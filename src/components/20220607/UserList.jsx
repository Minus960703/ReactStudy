import React from 'react';
import User from './User';

const UserList = ({ users, toggleInputs, updateUser, onChange }) => {
	return (
		<div className='userList'>
			{
				users.map(
					user =>
						<User
							key={user.id}
							user={user}
							toggleInputs={toggleInputs}
							updateUser={updateUser}
						/>
				)
			}
		</div>
	);
};

export default React.memo(UserList, (prev,next) => prev.users === next.users);