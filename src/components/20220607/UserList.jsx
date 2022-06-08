import React from 'react';
import styles from './UserList.module.css';

const User = React.memo(({ user,onRemove,onToggle }) => {
	const { nickname, email, id, active } = user;
	return (
		<div>
			<b className={active ? `${styles.active} ${styles.content}` : `${styles.content}`} onClick={() => onToggle(id)}>{nickname}</b>
			&nbsp;
			({email})
			<button onClick={()=>{onRemove(id)}}>삭제</button>
		</div>
	)
})

const UserList = ({ users, onRemove, onToggle }) => {
	return (
		<div className='userList'>
			{
				users.map((user) =>
					<User
						user={user}
						key={user.id}
						onRemove={onRemove}
						onToggle={onToggle}
					/>
				)
			}
		</div>
	);
};

export default React.memo(
	UserList,
	(prevProps, nextProps) => prevProps.users === nextProps.users
	);