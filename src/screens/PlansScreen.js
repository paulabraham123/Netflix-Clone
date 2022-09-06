import React, { useEffect } from "react";
import { useState } from "react";
import "./PlansScreen.css";

function PlansScreen() {
  return (
    <div className="planScreen">
      <div className="planScreens__plans">
        <h3 className="planScreen__plan">Premium</h3>
        <h4 className="planScreen__quality">4k + HDR</h4>
        <h3 className="planScreen__plan">Standard</h3>
        <h4 className="planScreen__quality">1080p</h4>
        <h3 className="planScreen__plan">Basic</h3>
        <h4 className="planScreen__quality">720p</h4>
      </div>
      <div className="planScreen__sub">
        <button className="planScreen__subscribe">Subscribe</button>
        <button className="planScreen__subscribe">Subscribe</button>
        <button className="planScreen__subscribe">Subscribe</button>
      </div>
    </div>
  );
}

export default PlansScreen;
