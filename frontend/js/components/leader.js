import React from 'react-js';


class LeaderBoard extends React.Component {
  render() {
    return (
      <h3 className="leaderboard-header">Challenge finished! You scored {this.props.score} points.  </h3>
      <table className="table leaderboard-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
        {this.props.people.map((person) => {
          return (
            <tr>
              <th>{person.rank}</th>
              <th>{person.name}</th>
              <th>{person.score}</th>
            </tr>
          );
        })}
				</tbody>
      </table>
      <div className="btn btn-primary-outline btn-text" data-reset>Return to Firmament</div>
    );
  }
}
