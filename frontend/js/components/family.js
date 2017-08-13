import React from 'react-js';


class Family extends React.Component {
  render() {
    return (
      <div className="circle circle-single">{this.props.prog.completed} / {this.props.prog.total}</div>
      <h3>{this.props.prog.name}</h3>
      <div className="const-group">
        <h5>Family</h5>
        <p className="sidebar-text">{this.props.info}</p>
        {this.props.groups.map((group) => {
          return (
            <div className="list-group family-view-level">
              {group.map((constellation, i) => {
                return (
                  <a href="#" className="list-group-item" data-group={constellation.index} data-constellation={i}>
                  {i}
                  </a>
                );
              })}
            </div>
          );
        })}
      </div>
      <span className="btn btn-side btn-primary-outline btn-text" data-reset>Back</span>
    );
  }
}
