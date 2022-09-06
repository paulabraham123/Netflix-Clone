import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <h3 className="footerCreator footerMain">Creator ~ Paul Abraham</h3>
      <a href="https://firebase.google.com">
        <h3 className="footerFirebase footerMain">
          Hosted and Deplyed by FIREBASE © : https://firebase.google.com/
        </h3>
      </a>
    </div>
  );
}

export default Footer;
