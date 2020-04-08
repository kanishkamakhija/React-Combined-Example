import React from 'react';

class UserDetailsForm extends React.Component {
  
  state = {
    user: {
      firstName: '',
      lastName: '',
      username: '',
    },
    userExists : false
  };

isUserPresent = (userName) => {
	for (let user of this.props.users) {
      if (user.userName === userName) {
        return true;
      }
    }
    return false;
}


addUser = event => {
    event.preventDefault();
  	const userExist = this.isUserPresent(this.state.user.userName)
    if(!userExist)  {
       this.props.updateUserList(this.state.user)
     }
  	this.setState({ userExists : userExist })
    };

handleInput = event => {
    const { name, value } = event.target;
    this.setState(currState => ({
      ...currState,
      user: {
        ...currState.user,
        [name]: value,
      },
    }));
  };


isDisable = () => {
  const { firstName, lastName, userName } = this.state.user
  return (firstName === '' || lastName === '' || userName === '') 
  }

  render() {
 return (
 	<form onSubmit={this.addUser}>
		<div>
         <label>FirstName : </label>
         <input type="text" name="firstName" value={this.state.user.firstName} onChange={this.handleInput}/>
		</div>

		<div>
          <label>LastName : </label>
          <input type="text" name="lastName" value={this.state.user.lastName} onChange={this.handleInput}/>
		</div>

		<div>
          <label>UserName : </label>
          <input type="text" name="userName" value={this.state.user.userName}  onChange={this.handleInput}/>
		</div>
			{ this.state.userExists ? (<p> Username Already Exists!</p>) : '' }
		<div>
          <button type="submit" disabled={this.isDisable()} > Add </button>
          <button> Toggle List</button>
		</div>
   	</form>
	
 )}
}

export default UserDetailsForm;