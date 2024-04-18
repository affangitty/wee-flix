import React from 'react';
import './App.css';
const HeroSection = () => {
  return (
    <section className="hero">
        <section className="head">
          <div id="logo">
            <img src="./src/assets/images/Logo.svg" alt="Weflix Logo" />
          </div>
          <div className="bt">
            <button id="bt1">English</button>
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
}

export default HeroSection;
