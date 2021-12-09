import React from 'react'
import FindProfile from './FindProfile2'

export default function Header(props) {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <button class="navbar-brand">GitHub Profile Explorer</button>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <button class="nav-link active" aria-current="page">Home</button>
          </li>
        </ul>
        <FindProfile addProfile={props.addProfile}/>
      </div>
    </div>
  </nav>
  )
}
