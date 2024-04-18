import React from 'react';
import './App.css';
const WatchEverywhereSection = () => {
  return (
    <section className="three sect">
    <div className="vid2">
      <video src="./src/assets/videos/video1.m4v" autoPlay loop muted />
    </div>
    <div className="thr">
      <div className="txt4">
        <h1>Watch everywhere</h1>
        <h2>Stream unlimited movies and TV shows on</h2>
        <h2>your phone, tablet, laptop, and TV.</h2>
      </div>
      <div className="tv2">
        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" width="555px" height="416px" className="i3" alt="TV" />
      </div>
    </div>
  </section>

  );
}

export default WatchEverywhereSection;
