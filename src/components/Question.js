import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Question = (props) => {
  const renderResults = (answered) => (
    <Link to={`/questions/${props.question.id}`}>
      <button className="showResults">
        {answered ? "Show Results" : "AnswerQuestion"}
      </button>
    </Link>
  );

  const {
    formattedQuestion: { question, user },
    answered,
  } = props;

  return (
    <div className="container">
      <div className="questionContainer">
        <div className="questionAuthor">{`${user.name} asks`}</div>
        <div className="questionWrapper">
          <img src={user.avatarURL} alt="" className="questionuserAvatar" />
          <div className="questionSection">
            <div className="question">Would you rather</div>
            <div className="optionOne">{question.optionOne.text}</div>
            <div>OR</div>
            <div className="optionTwo">{question.optionTwo.text}</div>
            {renderResults(answered)}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { users } = state;
  const { question } = ownProps;
  return {
    formattedQuestion: { ...ownProps, user: users[question.author] },
  };
};

export default connect(mapStateToProps)(Question);
