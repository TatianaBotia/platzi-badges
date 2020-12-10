import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/BadgesItems.css'
import Gravatar from './Gravatar'



function useSearchBadges(badges){
    const [query, setQuery] = React.useState('')
    const [filteredBadges, setFilteredBadges] = React.useState(badges)


    React.useMemo( () => {
        const result = badges.filter(badge => {
        return `${badge.firstName} ${badge.lastName}`
        .toLowerCase().includes(query.toLowerCase())
        })
        setFilteredBadges(result)
    }, [badges, query])

    return {query, setQuery, filteredBadges}
}


function BadgesList (props){

    const badges = props.badges
    const {query, setQuery, filteredBadges} = useSearchBadges(badges)

    if(filteredBadges.length === 0){
        return (
            <div>
                <div className="form-group">
                    <label>Filter Badges</label>
                    <input type="text" className="form-control"
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value)
                    }}/>
                </div>
                <h3>No badges were found</h3>

                <Link className="btn btn-primary" to="/badges/new">Create new badge</Link>
            </div>
        )
    }
    return(
        <div className="BadgesList">

            <div className="form-group">
                <label>Filter Badges</label>
                <input type="text" className="form-control"
                value={query}
                onChange={(e) => {
                    setQuery(e.target.value)
                }}/>
            </div>

            <ul className="list-unstyled Badge__item">
                {filteredBadges.map((badge)=> {
                    return(
                        <li key={badge.id}>
                            <Link className="text-reset text-decoration-none" to={`badges/${badge.id}`}>
                            <Gravatar alt={`Avatar ${badge.firstName} ${badge.lastName}`}
                                email={badge.email}/>
                                <div className="Badge__item-data">
                                    <p>
                                        <span>Nombre:</span> {badge.firstName} {badge.lastName}
                                    </p>
                                    <p>
                                        <span>Trabajo:</span> {badge.jobTitle}
                                    </p>
                                    <p>
                                        <span>Twitter:</span>  @{badge.twitter}
                                    </p>
                                </div>
                            </Link>
                        </li>
                    )
                })}
            </ul>   
        </div>
    )
}

export default BadgesList