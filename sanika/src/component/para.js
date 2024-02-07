// ParaPage.js
import React from 'react';
import './Style.css';
import { Link } from 'react-router-dom';
import i6 from './img/i6.jpg';

const ParaPage = () => {
    return (
        <div className="para-container">
            <h1>Dear Sana</h1>
            <p>She is like the Sun ☀️,</p>
            <p> Bright Eyes 👀 that cast away the shadows😶‍🌫️,</p>
            <p>Warm smile 😊, that even makes the cold hands warm🥰!</p>
            <p>My Heart melts everytime i see you smile 🫠,</p>
            <p>Like everyshade of red you flow in me 🫣 !</p>
            <p>I see your face in every person i see 😵‍💫,</p>
            <p>For you`re the poem 🐾 I recite out loud!</p>
            <h3>i love You Oldie👵🏻💓🙈</h3>
            <Link className="welcome-link" to="/choice">Next Page 💓</Link>
            <img src={i6} className='para-image' alt="Love Letter Image" />
        </div>
    );
};

export default ParaPage;
