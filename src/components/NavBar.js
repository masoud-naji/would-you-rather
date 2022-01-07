import React from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  const onLogout = () => {
    const { setLoggedInUser } = props;
    setLoggedInUser(null);
  };
  const {
    authedUser: { avatarURL, name },
  } = props;

  return (
    <div className="headerNav">
      <div className="leftNav">
        <Link to="/">
          <div className="home">Home</div>
        </Link>
        <Link to="/add">
          <div className="newPoll">New Survey</div>
        </Link>
        <Link to="/leaderboard">
          <div className="leaderboard">leaderboard</div>
        </Link>
      </div>
      <div className="rightNav">
        <div>{name} </div>
        <Link to="/">
          <div className="logout" onClick={onLogout}>
            Logout
          </div>
        </Link>
        <img alt="user" src={avatarURL} className="userName" />
      </div>
    </div>
  );
};

export default NavBar;
