import React, { useEffect, useState } from "react";
import Question from "./Question";
import _ from "lodash";
import { getQuestions } from "../../src/redux/actions/questions";
import { connect } from "react-redux";

const HomePage = (props) => {
  const [tab, setTab] = useState("unAnswered");

  useEffect(() => {
    props.dispatch(getQuestions(props.authedUser));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selectTab = (event) => {
    event.stopPropagation();
    setTab(event.target.className);
  };

  const { questions, answeredQuestionsList, unansweredQuestionsList } = props;
  if (questions === undefined || _.isEmpty(questions)) return null;
  const answeredQuestions = _.sortBy(answeredQuestionsList, [
    function (o) {
      return o.timeStamp;
    },
  ]).reverse();
  const unansweredQuestions = _.sortBy(unansweredQuestionsList, [
    function (o) {
      return o.timeStamp;
    },
  ]).reverse();

  return (
    <div className="homePageContainer">
      <div className="homePage">
        <div className="tabContainer">
          <div
            className={`tab unanswered_Tab ${
              tab === "unAnswered" ? "selectedTab" : ""
            }`}
          >
            <div className="unAnswered" onClick={selectTab}>
              Unanswered
            </div>
          </div>
          <div
            className={`tab answered_Tab ${
              tab === "answered" ? "selectedTab" : ""
            }`}
          >
            <div className="answered" onClick={selectTab}>
              Answered
            </div>
          </div>
        </div>
        {tab === "answered"
          ? !_.isEmpty(answeredQuestions) &&
            answeredQuestions.map((question, index) => (
              <Question
                key={index}
                qid={question.id}
                question={question}
                answered={true}
              />
            ))
          : !_.isEmpty(unansweredQuestions) &&
            unansweredQuestions.map((question, index) => (
              <Question qid={question.id} key={index} question={question} />
            ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    questions: state.questions,
    answeredQuestionsList: Object.values(state.questions)
      .filter((question) => question.answered)
      .sort((a, b) => b.timeStamp - a.timeStamp),
    unansweredQuestionsList: Object.values(state.questions)
      .filter((question) => !question.answered)
      .sort((a, b) => b.timeStamp - a.timeStamp),
  };
};

export default connect(mapStateToProps)(HomePage);
