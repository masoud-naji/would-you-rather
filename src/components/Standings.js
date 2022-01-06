import React from "react";
import { connect } from "react-redux";

//TODO: Change the name
const Standing = (props) => {
  const renderStandingTile = (user, index) => {
    const questionsAnswered = Object.keys(user.answers).length;
    const questionsAsked = user.questions.length;
    return (
      <div className="container" style={{ minHeight: "150px" }} key={index}>
        <div
          className="questionWrapper"
          style={{ minWidth: "60vh", padding: "2rem" }}
        >
          <img src={user.avatarURL} alt="" className="questionuserAvatar" />
          <div className="answeredWrapper">
            <div className="name">{user.name}</div>
            <div className="questionsAnswered">{`Questions Answered: ${questionsAnswered}`}</div>
            <div className="createdQuestions">{`Questions Asked: ${questionsAsked}`}</div>
          </div>
          <div className="score">
            <div className="scoreText">Score</div>
            <div className="actualScore">
              {questionsAnswered + questionsAsked}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const { users = [] } = props;
  return (
    <div className="homePage" style={{ Width: "50vh" }}>
      {users.map((user, index) => renderStandingTile(user, index))}
    </div>
  );
};

const mapStateToProps = (state) => {
  const sortedUserList = Object.values(state.users).sort((a, b) => {
    const objAanswers = Object.keys(a.answers);
    const objAQuestions = Object.keys(a.questions);
    const objBanswers = Object.keys(b.answers);
    const objBQuestions = Object.keys(b.questions);
    return (
      objBanswers.length +
      objBQuestions.length -
      (objAanswers.length + objAQuestions.length)
    );
  });
  return { users: sortedUserList };
};

export default connect(mapStateToProps)(Standing);
