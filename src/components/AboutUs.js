import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
    <>
    <div className="aboutus-container">
      <img alt='Musical Sheet' src="https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
      <h1>ABOUT US</h1>
      <p>
      We offer music lessons to kids and adults at all levels. 
      Our program includes reading notes, basic to advance music theory, 
      chord progressions, and annual recitals. 
      </p>
      
      <p>
      Grace Notes Music Studio started in 2020 during the pandemic to cater music lessons 
      to students at the comfort of their homes. Since then, we have been conducting online 
      recitals twice a year where students perform pieces across different genres - baroque, 
      classical, romantic, contemporary, pop, and folk music. Now, we are conducting both online 
      and face to face classes depending on the student's discretion.
      </p>
    </div>
    
    </>
  );
}

export default AboutUs;
