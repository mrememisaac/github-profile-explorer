import React, { Component } from 'react'
import Card from './Card'

export default class CardList extends Component {
  render() {
    const profiles = this.props.profiles;
    return (
      profiles.map(profile => {
        console.log(profile) ;
      return<Card profile={profile} />
    })
    )
  }
}
