import React from 'react';

function UserDetailsForm(props) {
  
  return (
    <ol>{
    	props.users.map((user) => {
          return (<li key="{user.userName}">{ user.userName + " played " + user.noOfGamesPlayed }</li>)
        })}
    </ol>
  )
}
                            
export default UserDetailsForm;                        