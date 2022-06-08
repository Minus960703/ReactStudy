import React, { useSyncExternalStore } from 'react';
import User from './User';

const UserList = ({users, removeUser, toggleUser }) => {
	return (
		<div className='userList'>
			{
				users.map(
					user => <User key={user.id} user={user} toggleUser={toggleUser} removeUser={removeUser}/>
				)
			}
		</div>
	);
};

export default UserList;