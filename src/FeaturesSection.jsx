import React from 'react';
import './App.css';
const FeaturesSection = () => {
  return (
    <section className="one sect">
    <div className="txt2">
      <h1>Enjoy on your TV</h1>
      <h2>Watch on smart TVs, PlayStation, Xbox,</h2>
      <h2>Chromecast, Apple TV, Blu-ray players and</h2>
      <h2>more.</h2>
    </div>
    <div className="tv">
      <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" width="555px" height="416px" className="i1" alt="TV" />
    </div>
    <div className="vid">
      <video src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" autoPlay loop muted />
    </div>
  </section>
  );
}

export default FeaturesSection;
