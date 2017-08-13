import React from 'react-js';


class QuizResult extends React.Component {
  result() {
    if (this.props.pass) {
      return (
				<div className="sidebar-box">
					<p>You scored {this.props.correct} out of {this.props.total}</p>
					<p>Well done! You are ready to learn more.</p>
				</div>
      );
    } else {
      return (
				<div className="sidebar-box">
					<p>You scored {this.props.correct} out of {total}</p>
					<p>Let's take a look at some of these constellations again.</p>
				</div>
      );
    }
  }

  render() {
    return (
      <div className="circle circle-single quiz-circle">?</div>
      <h3>Question</h3><h6 className="sidebar-text">What's the name?</h6>
      <p className="sidebar-text">What is the name of this constellation you have learnt?</p>
      <div>
        {this.result()}
			</div>
      <span className="btn btn-side btn-primary-outline btn-text" data-reset>Back</span>
    );
  }
}
