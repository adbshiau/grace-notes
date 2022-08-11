import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src="/videos/piano-2.mp4" autoPlay loop muted/>
        <h1>Music Lessons</h1>
        <h2>for Kids & Adults</h2>
        <p>Virtual</p>
        <button className='btn'>Book Trial Lesson</button>
    </div>
  )
}

export default HeroSection;