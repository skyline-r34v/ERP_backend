import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Style.css'; // Import the CSS file
import i1 from './img/i1.jpg'
import i2 from './img/i2.jpg'
import i3 from './img/i3.jpg'
import i8 from './img/i8.jpg'
import i5 from './img/i5.jpg'
import i12 from './img/i12.jpg'

const WelcomePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [i1, i2, i3, i8, i5, i12];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="welcome-container">
      <h1 className="welcome-title">Hello My Oldie👵🏻</h1>
      <p className="welcome-message">Aapne V ko kam pareshan kiya karo !!</p>
      <Link className="welcome-link" to="/feeling">Next Page 💓</Link>
      
      {/* Carousel */}
      <div className="carousel-container">
        <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} className="carousel-image" />
      </div>
    </div>
  );
};

export default WelcomePage;
