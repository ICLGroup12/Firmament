import React from 'react-js';


class QuizQuestion extends React.Component {
  render() {
    return (
      <div className="circle circle-single quiz-circle">{this.state.time}</div>
      <h3>Question</h3><h6 className="sidebar-text">What's the name?</h6>
      <p className="sidebar-text">What is the name of this constellation you have learnt?</p>

			<div className="form-input">
				<label>This is...
					<input id="quiz-answer-box" type="text" maxlength="20" className="form-control" placeholder="Answer">
				</label>
				<span className="btn btn-sm btn-primary-outline" data-quiz-submit>Submit</span>
			</div>
      <span className="btn btn-side btn-primary-outline btn-text" data-reset>Back</span>
    );
  }
}
