import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    const profile = this.props.profile;
    return (
      <div className="card" style={{width: "18rem"}} key={profile.id}>
        <img src={profile.avatar_url} alt={profile.name} className="img-responsive" />
        <div className="card-body">
          <h5 class="card-title">{profile.name}</h5>
          <p class="card-text">{profile.bio}</p>
	        <div className="company">{profile.company}</div>
          <button class="btn btn-primary">Full Profile</button>
        </div>
      </div>
    )
  }
}
