import React, { useState } from "react";
import { saveAnswerAction } from "../../src/redux/actions/questions";
import Result from "./Result";
import { connect } from "react-redux";

const AnswerQuestion = (props) => {
  const [selectedValue, setSelectedValue] = useState("");
  const [answeredQuestion, setAnsweredQuestion] = useState(false);

  const formSubmit = (event) => {
    event.preventDefault();
    if (selectedValue === "") return null;

    const { authedUser, saveAnswer } = props;
    const { question } = props;

    setAnsweredQuestion(true);
    saveAnswer(authedUser.id, question.id, selectedValue);
  };

  const onChangeOption = (event) => {
    setSelectedValue(event.target.name);
  };

  const renderForm = () => {
    const { question } = props;

    return (
      <form onSubmit={formSubmit}>
        Would you rather
        <hr />
        <label>
          <input
            type="radio"
            name="optionOne"
            value={question.optionOne.text}
            checked={selectedValue === "optionOne"}
            onChange={onChangeOption}
          />
          {question.optionOne.text}
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="optionTwo"
            value={question.optionTwo.text}
            checked={selectedValue === "optionTwo"}
            onChange={onChangeOption}
          />
          {question.optionTwo.text}
        </label>
        <hr />
        <button className="showResults" type="submit">
          Submit
        </button>
      </form>
    );
  };

  const { user, question, answered } = props;

  if (answeredQuestion || answered)
    return <Result qid={question.id} user={user} />;

  return (
    <div className="homePageContainer">
      <div className="container">
        <div className="questionAuthor">{`${user.name} asks`}</div>
        <div className="questionWrapper">
          <img src={user.avatarURL} alt="" className="questionuserAvatar" />
          {renderForm()}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    authedUser: state.authedUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveAnswer: (authUser, qid, answer) =>
      dispatch(saveAnswerAction(authUser, qid, answer)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AnswerQuestion);
