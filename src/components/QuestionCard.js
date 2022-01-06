import React, { useEffect } from "react";
import { connect } from "react-redux";
import Result from "./Result";
import { getQuestions } from "../../src/redux/actions/questions";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import AnswerQuestion from "./AnswerQuestion";

const QuestionCard = (props) => {
  useEffect(() => {
    props.dispatch(getQuestions(props.authedUser));
  }, []);

  const {
    formattedQuestion: { question, user },
    badPath,
  } = props;
  if (!question)
    return (
      <div className="spinner">
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000}
        />
      </div>
    );
  if (badPath)
    return <div className="flexCenter">Sorry that page does not exist</div>;
  if (question.answered) return <Result qid={question.id} user={user} />;
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
  const badPath = !questions[qid];
  const question = !badPath && questions[qid];
  const user = !badPath && users[questions[qid].author];
  return {
    formattedQuestion: { question, user },
    badPath,
    authedUser: state.authedUser,
  };
};

export default connect(mapStateToProps)(QuestionCard);
