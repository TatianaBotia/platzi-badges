import React from 'react'
import {Link} from 'react-router-dom' 
import astronauts from '../../images/astronauts.svg'
import confLog from '../../images/platziconf-logo.svg'
import '../../styles/BadgesHome.css'

class BadgesHome extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="Home">
                    <div className="Home-start">
                        <img src={confLog} alt="Logo Platziconf"/>
                        <h3>Print your badges</h3>
                        <p>The easiest way to manage your <br/> conference</p>
                        <Link to="/badges/new"className="btn btn-primary">Start Now</Link>
                    </div>
                    <img className="Home-img" src={astronauts} alt="Atronautas"/>
                </div>                
            </React.Fragment>
        )
    }
}

export default BadgesHome