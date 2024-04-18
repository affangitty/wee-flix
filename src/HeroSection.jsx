import React, { useState } from 'react';
import './App.css';

const HeroSection = () => {
  const [showLanguages, setShowLanguages] = useState(false);

  const toggleLanguages = () => {
    setShowLanguages(!showLanguages);
  };
  return (
    <section className="hero">
      <section className="head">
        <div id="logo">
          <img src="./src/assets/images/Logo.svg" alt="Weflix Logo" />
        </div>
        <div className="bt">
          <button id="bt1" onClick={toggleLanguages}>English</button>
          {showLanguages && (
            <div className="languages-dropdown">
              <ul>
                <li>French</li>
                <li>Spanish</li>
                <li>Hindi</li>
              </ul>
            </div>
          )}
          <button id="bt2">Sign In</button>
        </div>
      </section>
      <section className="body">
        <div className="txt">
          <div id="a">Enjoy big movies, hit series and more from ₹ 149.</div>
          <h5 id="b">Join today. Cancel anytime.</h5>
          <h6 id="c">Ready to watch? Enter your email to create or restart your membership.</h6>
          <div className="inb">
            <input type="email" placeholder="Email Address" className="inp" />
            <button className="bt3">Get Started </button>
          </div>
        </div>
      </section>
      <img src="./src/assets/images/bg.jpg" className="bg" alt="Background" />
    </section>
  );
};
export default HeroSection;
