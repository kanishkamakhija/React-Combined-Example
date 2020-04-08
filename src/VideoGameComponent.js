import React from 'react';
import UserDetailsForm from './UserDetailsForm.js'
import logo from './logo.svg';
import UserList from './UserList.js';


function VideoGameComponent(props) {

	return (
  		<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>	
        </header>
  		<div>
     		<UserDetailsForm updateUserList={props.updateUserList} users={props.users}/>
        </div>
          <div>
          	<UserList users={props.users} />
		</div>
      </div>
  )
}


export default VideoGameComponent;