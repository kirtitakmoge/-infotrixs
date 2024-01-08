import React from 'react';
import './newapp.css'; // Import your CSS file

function NewApp() {
  return (
    <div className="App">
      <div className="container">
        <video autoPlay muted loop id="myVideo">
          <source src="https://media.istockphoto.com/id/1253604245/video/young-plant.mp4?s=mp4-640x640-is&k=20&c=iN-UwXYuCnkPQGo48wb-21CN_LvkXl-l0U96j42iuew=" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
        <div className="quote-box">
          <p className="quote">Your quote goes here</p>
        </div>
      </div>
      <div className="header">
        {/* Your header content goes here */}
      </div>
      <div className="footer">
        {/* Your footer content goes here */}
      </div>
    </div>
  );
}

export default NewApp;
