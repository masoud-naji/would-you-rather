import React, { useEffect } from "react";
import { connect } from "react-redux";
import Result from "./Result";
import { getQuestions } from "../../src/redux/actions/questions";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import AnswerQuestion from "./AnswerQuestion";
import { Redirect } from "react-router-dom";

const QuestionCard = (props) => {
  useEffect(() => {
    props.dispatch(getQuestions(props.authedUser));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    formattedQuestion: { question, user },
    wrongPath,
  } = props;

  if (wrongPath) {
    console.log("Bad Path");
    return <Redirect to="/NotFound" />;
  }
  if (!question)
    return (
      <div className="spinner">
        <Loader
          type="Bars"
          color="rgba(0, 37, 5,1"
          height={100}
          width={100}
          timeout={3000}
        />
      </div>
    );
  if (question.answered) {
    console.log("quession id ok");
    return <Result qid={question.id} user={user} />;
  }
  return (
    <div className="homePageContainer">
      <div className="homePage" style={{ margin: "10px", minWidth: "80vh" }}>
        <div
          className="container"
          style={{
            width: "80%",
            alignContent: "center",
            padding: "2rem 3rem 2rem 3rem",
          }}
        >
          <div className="questionContainer">
            <AnswerQuestion
              qid={question.id}
              question={question}
              user={user}
              answered={question.answered}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { users, questions } = state;
  const {
    match: {
      params: { qid },
    },
  } = ownProps;

  //checked: double check if its wrong path
  // if (questions[qid]) {
  //   console.log(Object.keys(questions));
  //   console.log(Object.values(questions[qid])[0]);
  //   var isitValisquestion = "";
  //   var newQuestion = Object.values(questions[qid])[0];
  //   isitValisquestion = Object.keys(questions).includes(newQuestion);
  //   console.log(isitValisquestion);
  // } else {
  //   console.log("wrong path!!!");
  // }

  const wrongPath = !questions[qid] || questions[qid] === undefined;
  const question = !wrongPath && questions[qid];
  const user = !wrongPath && users[questions[qid].author];
  console.log(wrongPath);

  return {
    formattedQuestion: { question, user },
    wrongPath,
    authedUser: state.authedUser,
  };
};

export default connect(mapStateToProps)(QuestionCard);
