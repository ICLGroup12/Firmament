import React from 'react-js';


class MultiplayerQuestion extends React.Component {
  render() {
    return (
      <div className="circle circle-single quiz-circle">?</div>
        <h3>Question</h3><h6 className="sidebar-text">Find the Constellation</h6>
        <p className="sidebar-text">Where is {this.props.constName} located?</p>
      <div>
      <div className="sidebar-box">
        <p>Line up the crosshair with the center of the constellation.</p>
        <p>When found, press enter to submit your answer.</p>
      </div>
	  </div>
    );
  }
}
