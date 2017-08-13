import React from 'react-js';


class Families extends React.Component {
  render() {
    return (
      <h3>Continue your exploration.</h3>
      <p className="sidebar-text">
        Select the family of constellations you wish to learn about today.
      </p>
      <div className="col-xs-12">
        {this.props.families.map((family) => {
          return (
            <div className="col-xs-6">
              <div className="circle circle-progress" data-family={family.name}>
                {family.completed} / {family.total}
              </div>
              <p>{family.name}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
