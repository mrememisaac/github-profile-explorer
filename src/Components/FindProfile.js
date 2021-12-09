import React from 'react'

function FindProfile() {
  const userNameInput = React.createRef();
  const handleSubmit = (event) => { 
    event.preventDefault(); 
    console.log(userNameInput.current.value)
  }
  return (
    <div>
      <form class="d-flex" onSubmit={handleSubmit}>
          <input class="form-control me-2"
            ref={userNameInput} 
            required
            type="search" 
            placeholder="Enter GitHub username" 
            aria-label="Search">
          </input>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
    </div>
  )
}

export default FindProfile
