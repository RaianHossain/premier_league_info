import React from 'react';
import { Link } from 'react-router-dom';
import './Clubs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Clubs = (props) => {
    const {strTeam, strTeamBadge, idTeam, strSport} = props.club
    return (
    <div className="outer-container">
        <div className="inner-container">
            <img src={strTeamBadge} alt=""/>
            <h4>{strTeam}</h4> 
            <p><small>Type: {strSport}</small></p>
            <Link to={"club/"+idTeam}>
                <button className="btn">Explore <FontAwesomeIcon icon={faArrowRight} /></button>
            </Link>
        </div>
    </div>
        
    );
};

export default Clubs;