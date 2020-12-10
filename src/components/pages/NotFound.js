import React from 'react'
import '../../styles/NotFound.css'
import error from '../../images/notfound.svg'

function NotFound(){
    return(
        <React.Fragment>
            <div className="notfound-container">
                <img src={error} alt="Error 404"/>
            </div>
        </React.Fragment>
    )
}

export default NotFound