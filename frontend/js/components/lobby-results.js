import React from 'react-js';


class LobbyResults extends React.Component {
  render() {
    return (
      <h3 className="leaderboard-header">Game over! Results will be updated below.</h3>
      <table className="table leaderboard-table">
        <caption style="caption-side: top;">Lobby results</caption>
        <thead>
          <tr>
            <th>Player</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
				{this.props.people.map((person) => {
          return (
            <tr>
              <th>{person.player}</th>
              <th>{person.score}</th>
            </tr>
          );
        })}
				</tbody>
      </table>
      <div className="btn btn-primary-outline btn-text" data-end>Leave Lobby</div>
    );
  }
}
