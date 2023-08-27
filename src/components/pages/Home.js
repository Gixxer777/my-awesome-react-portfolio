import React from 'react';
import mypicture from '../images/mypicture.jpg';

export default function Home() {
  return (
    <div className="home">
      <h1>Welcome to my Portfolio</h1>
      <p id="thanks">
        You are now viewing the digital portfolio of David Gaspard! Thank you for taking the time to view my work!
      </p>
      <div>
        <img src={mypicture} alt="David Gaspard" id="mypicture"></img>
      </div>
    </div>
  );
}
