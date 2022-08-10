import React from "react";
import "./Header.css";

function Header() {
  return (
    <>
      <header className="top-header">
        <div className="header-container">
            <ul className="header-fields">
                <li className="header-item">
                    <i className="fa-solid fa-phone" /> 09164264490
                </li>
                <li className="header-item">
                    <i className="fa-brands fa-facebook" /> {" "}
                    <a href="https://www.facebook.com/profile.php?id=100063982576936" target="_blank">
                    Facebook Page
                    </a>
                </li>
            </ul>
          
         
        </div>
      </header>
    </>
  );
}

export default Header;
