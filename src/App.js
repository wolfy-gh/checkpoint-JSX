import React from 'react';
import imageSrc from './imageInSrc.jpg';
import './Styles.css';

function App() {
  return (
    <div className="app">
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="title red">Smoke Gk</h1>
        <img src={imageSrc} />
        <br />
        <img src="/imageInPublic.jpg" />
      </div> 
      <video  style={{width:"320", height:"240"}} controls>
        <source src="/videos/myvideo.mp4" type="video/mp4" ></source>
      </video>
    </div>
  );
}

export default App;
