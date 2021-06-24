import React, { useEffect, useState } from 'react';
import Clubs from '../Clubs/Clubs';
import './Body.css'

const Body = () => {
    const [clubs, setClubs] = useState([])
    useEffect(()=>{
        const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League';
        fetch(url)
        .then(res => res.json())
        .then(data => setClubs(data.teams))
    },[])
    return (
        <div className="main-container">
            <div className="body-container">
            {
                clubs.map(club => <Clubs club={club} key={club.idTeam}></Clubs>)
            }
            </div>
        </div>
        
    );
};

export default Body;