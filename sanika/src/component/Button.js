import React, { useState } from 'react';
import './Style.css';


const ButtonContainer = () => {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });

  const handleNoButtonClick = () => {
    // Generate random position within the window dimensions
    const newX = Math.random() * (window.innerWidth - 100); // Adjust 100 according to button width
    const newY = Math.random() * (window.innerHeight - 50); // Adjust 50 according to button height
    setNoButtonPosition({ x: newX, y: newY });
  };

  const handleYesButtonClick = () => {
    alert('Love you too');
  }

  return (
    <div className="button-container">
      <p className="prompt-text">Do you love me?</p>
      <button className="button" onClick={handleYesButtonClick}>Yes</button>
      <button className="button" onClick={handleNoButtonClick} style={{ position: 'absolute', left: noButtonPosition.x, top: noButtonPosition.y }}>No</button>
    </div>
  );
};

export default ButtonContainer;
