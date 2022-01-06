import React from "react";
import { connect } from "react-redux";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import winner from "../needs/winner.png";

const Result = (props) => {
  const renderLoading = () => (
    <Loader
      timeout={2000}
      type="Puff"
      color="#00BFFF"
      height={100}
      width={100}
    />
  );

  const {
    question: { optionOne, optionTwo },
    selectedValue,
    user,
    loading,
  } = props;

  let opV1 = optionOne.votes.length;
  let opV2 = optionTwo.votes.length;
  const totalVotes = opV1 + opV2;
  const opOnePerc = Math.floor((opV1 / totalVotes) * 100);
  const opTwoPerc = Math.floor((opV2 / totalVotes) * 100);
  const votingIndicator =
    selectedValue === "optionOne"
      ? `You and ${opV1} ${
          opV1 > 1 ? "people" : "person"
        } out of ${totalVotes} people voted`
      : `You and ${opV2} ${
          opV2 > 1 ? "people" : "person"
        } out of ${totalVotes} people voted`;
  if (loading) renderLoading();

  const Progress = ({ done }) => (
    <div className="progress">
      <div className="progress-done" style={{ opacity: 1, width: `${done}%` }}>
        {done}%
      </div>
    </div>
  );

  return (
    <div>
      <div className="homePageContainer">
        <div className="container">
          <div className="questionAuthor">{`${user.name} asks`}</div>
          <div className="questionWrapper">
            <img src={user.avatarURL} alt="" className="questionuserAvatar" />
            <div className="questionSection flexColumn paddingContainer">
              Results:
              <br />
              <div className="optionOneSection">
                <div className="optionText">{optionOne.text}</div>
                <div>
                  <Progress done={opOnePerc} />
                  {selectedValue === "optionOne" && (
                    <img src={winner} alt="Winner" />
                  )}
                  {selectedValue === "optionOne"
                    ? votingIndicator
                    : `${opV1} of ${totalVotes} people voted this`}

                  <div className="optionTwoSection">
                    <div className="optionText">{optionTwo.text}</div>

                    <Progress done={opTwoPerc} />
                    {selectedValue === "optionTwo" && (
                      <img src={winner} alt="Winner" />
                    )}
                  </div>
                  {selectedValue === "optionTwo"
                    ? votingIndicator
                    : `${opV2} of ${totalVotes} people voted this`}
                </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const question = state.questions[ownProps.qid];
  let selectedValue;
  if (question.answered) {
    selectedValue = question.optionOne.votes
      .toString()
      .includes(ownProps.user.id)
      ? "optionOne"
      : "optionTwo";
  }
  return {
    loading: state.loading,
    question: state.questions[ownProps.qid],
    selectedValue: selectedValue,
  };
};

export default connect(mapStateToProps)(Result);
