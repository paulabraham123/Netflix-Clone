import React from "react";
import { useSelector } from "react-redux";
import Nav from "../Nav";
import "./ProfileScreen.css";
import { selectUser } from "../features/userSlice";
import auth from "../firebase";
import { getAuth, signOut } from "firebase/auth";
import PlansScreen from "./PlansScreen";

function ProfileScreen() {
  const user = useSelector(selectUser);
  const auth = getAuth();

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>
              <PlansScreen />
              <button
                onClick={() =>
                  signOut(auth)
                    .then(() => {
                      // Sign-out successful.
                    })
                    .catch((error) => {
                      // An error happened.
                    })
                }
                className="profileScreen__signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
