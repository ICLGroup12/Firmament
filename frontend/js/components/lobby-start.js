import React from 'react-js';


class LobbyStart extends React.Component {
  render() {
    return (
      <h3 className="leaderboard-header">Share the link below to invite players to this lobby.</h3>
      <div>
        <strong>Invitation URL: </strong>
        <a className="selectable" href={'https://firmament.space/#!/join/' + this.props.lobbyId}>
          {'https://firmament.space/#!/join/' + this.props.lobbyId}
        </a>
      </div>
      <table className="table leaderboard-table">
        <caption style="caption-side: top;">Current lobby members</caption>
        <thead>
          <tr>
            <th>Player</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
        {this.props.people.map((person) => {
					<tr>
						<th>{person.player}</th>
						<th>{person.status}</th>
					</tr>
        })}
				</tbody>
      </table>
      <div className="btn btn-primary-outline btn-text" data-start>Start Game</div>
    );
  }
}
