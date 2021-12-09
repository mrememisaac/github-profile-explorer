import React from 'react';
import './App.css';
import CardList from './Components/CardList';
import Header from './Components/Header';

class App extends React.Component {
  state = {profiles: []};

  addProfile = (profileData) => {
    this.setState({profiles: [profileData, ...this.state.profiles]});
    console.log(this.state.profiles);
  }

  render(){
    return(
    <div className="container-fluid">
      <Header addProfile={this.addProfile} />
      <CardList profiles={this.state.profiles} />
    </div>
    );
  }
}

export default App;
