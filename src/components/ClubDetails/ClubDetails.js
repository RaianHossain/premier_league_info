import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ClubDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faFlag, faFootballBall, faMale } from '@fortawesome/free-solid-svg-icons';
import male from '../../images/Rectangle 28.png';
import female from '../../images/female.png';
import facebook from '../../images/Facebook.png';
import tweeter from '../../images/Twitter.png';
import youtube from '../../images/YouTube.png';


const ClubDetails = () => {
    const idTeam = useParams();
    const id = idTeam.idTeam;
    const [details, setDetails] = useState({});
    useEffect(()=>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setDetails(data.teams[0]))
    }, [id])

    const {strAlternate, intFormedYear, strStadium, strGender, strSport, strStadiumThumb} = details;
    let genderImage;
    if(strGender === 'Male'){
        genderImage = <img className="conditional-image" src={male} alt="male"></img>
    }
    else{
        genderImage = <img className="conditional-image" src={female} alt="female"></img>
    }
    
    return (
        <div className="details-container">
            <img src={strStadiumThumb} alt=""/>
            <div className="second-container">
                <div className="team-details">
                    <div className="info-container">
                        <h2>{strAlternate}</h2>
                        <p><FontAwesomeIcon icon={faTimes}></FontAwesomeIcon> Founded: {intFormedYear}</p>
                        <p><FontAwesomeIcon icon={faFlag}></FontAwesomeIcon> Stadium: {strStadium}</p>
                        <p><FontAwesomeIcon icon={faFootballBall}></FontAwesomeIcon> Sports Type: {strSport}</p>
                        <p><FontAwesomeIcon icon={faMale}></FontAwesomeIcon> Gender: {strGender}</p>                        
                    </div>
                    <div className="image-div">
                            { genderImage }
                    </div>
                </div>
                <br/>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum dolorum enim dolores, blanditiis consequuntur corporis dignissimos! Maiores aliquam dolor ex accusamus animi consectetur! Sit, rem possimus reprehenderit eligendi cupiditate doloremque. Quaerat minus voluptas iste assumenda eius facere aperiam ab nisi beatae, similique error explicabo tenetur? Nobis fuga accusantium harum, voluptatum, provident asperiores voluptates facere cumque excepturi ipsum, iste dolores molestiae eum totam et voluptatibus deserunt impedit odio eius ut omnis sunt eos adipisci? Provident illo architecto eius, totam animi et iusto nulla reprehenderit quibusdam modi ipsum repellat ea ut alias saepe esse id doloremque eveniet aut quisquam? Maiores, aliquid nihil?</p>
                <br/>
                <br/>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum dolorum enim dolores, blanditiis consequuntur corporis dignissimos! Maiores aliquam dolor ex accusamus animi consectetur! Sit, rem possimus reprehenderit eligendi cupiditate doloremque. Quaerat minus voluptas iste assumenda eius facere aperiam ab nisi beatae, similique error explicabo tenetur? Nobis fuga accusantium harum, voluptatum, provident asperiores voluptates facere cumque excepturi ipsum, iste dolores molestiae eum totam et voluptatibus deserunt impedit odio eius ut omnis sunt eos adipisci? Provident illo architecto eius, totam animi et iusto nulla reprehenderit quibusdam modi ipsum repellat ea ut alias saepe esse id doloremque eveniet aut quisquam? Maiores, aliquid nihil?</p>
                <div className='iconDiv'>
                    <img className="iconImage" src={facebook} alt="facebook"/>
                    <img className="iconImage" src={tweeter} alt="tweeter"/>
                    <img className="iconImage" src={youtube} alt="youtube"/>
                </div>
            </div>
            
        </div>
    );
};

export default ClubDetails;