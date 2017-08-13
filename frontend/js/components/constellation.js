import React from 'react-js';


class Constellation extends React.Component {
  render() {
    return (
      <div className="circle circle-single">{this.props.current.short}</div>
      <h3>{this.props.current.name}</h3>
      <h6>{this.props.current.meaning}</h6>
      <br>
      <p>{this.props.current.info}</p>
      <table className="table table-bordered">
        <tbody>
          <tr>
            <th scope="row">Family</th>
            <td>{this.props.current.family}</td>
          </tr>
          <tr>
            <th scope="row">Origin</th>
            <td>{this.props.current.origin}</td>
          </tr>
          <tr>
            <th scope="row">Meaning</th>
            <td>{this.props.current.meaning}</td>
          </tr>
          <tr>
            <th scope="row">Luminary</th>
            <td>{this.props.current.luminary}</td>
          </tr>
          <tr>
            <th scope="row">Month</th>
            <td>{this.props.current.month}</td>
          </tr>
        </tbody>
      </table>
      <span className="btn btn-side btn-primary-outline btn-text" data-group={this.props.prev.index} data-constellation={this.props.prev.name}>Prev</span>
      <span className="btn btn-side btn-primary-outline btn-text" data-family={this.props.family}>Back</span>
      <span className="btn btn-side btn-primary-outline btn-text" data-group={this.props.next.index} data-constellation={this.props.next.name}>Next</span>
      <span className="btn btn-side btn-primary-outline btn-text" data-test data-group={this.props.test.index} data-family={this.props.text.name}>Test</span>
    );
  }
}
