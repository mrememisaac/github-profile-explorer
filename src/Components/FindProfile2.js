import React from 'react'
import axios from 'axios'

export default class FindProfile extends React.Component{
  state = { userName:''};
  handleSubmit = async (event) => { 
    event.preventDefault(); 
    try {
      const url = `https://api.github.com/users/${this.state.userName}`;
      console.log(url);
      const resp = await axios.get(url);
      this.props.addProfile(resp.data);
    } catch (error) {
      this.setState({error:true});
      this.setState({errorMessage:`An error occured while fetching profile: ${this.state.userName}`});
      console.log(error);
    }
  };

  clearError = () => { 
    this.setState({error:false});
    this.setState({errorMessage:``});
  }

  render(){
    return (
      <div>
        <form class="d-flex" onSubmit={this.handleSubmit}>
            <span className={this.state.error ? 'alert-error' : 'hidden'}>{this.state.feedback}</span>
            <input class="form-control me-2"
              value={this.state.userName}
              onChange={event => { this.setState({userName: event.target.value}); this.clearError();}}
              required
              type="search" 
              placeholder="Enter GitHub username" 
              aria-label="Search">
            </input>
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
      </div>
    );
  }
}
