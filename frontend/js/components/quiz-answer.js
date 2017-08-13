import React from 'react-js';


class QuizAnswer extends React.Component {
  result() {
    if (this.props.correct) {
      return (
				<div className="form-group has-success">
					<i className="fa fa-check" aria-hidden="true"></i>
					<label className="form-control-label has-success">
						<span>Correct!</span><br>
						<span>This is {this.props.name}.</span>
					</label>
				</div>
      );
    } else {
      return (
				<div className="form-group has-danger">
					<i className="fa fa-cross" aria-hidden="true"></i>
					<label className="form-control-label has-danger">
						<span>Not quite!</span><br>
					</label>
				</div>
      );
    }
  }

  render() {
    return (
      <div className="circle circle-single quiz-circle">{this.state.time}</div>
      <h3>Question</h3><h6 className="sidebar-text">What's the name?</h6>
      <p className="sidebar-text">What is the name of this constellation you have learnt?</p>

			<div className="form-input">
        {this.result()}
				<span className="btn btn-side btn-primary-outline btn-text" data-quiz-next>Next</span>
			</div>
      <span className="btn btn-side btn-primary-outline btn-text" data-reset>Back</span>
    );
  }
}
