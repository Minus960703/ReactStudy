import React, { useContext, useState } from 'react';
import ModifyUser from './ModifyUser';
import UserRemote from './UserRemote';
import styles from './User.module.css'
import { UserDisPatch } from './UserApp';

const User = ({ user }) => {
  const { username, email, id, active, update } = user;
  const dispatch = useContext(UserDisPatch);

  return (
    <div>
      <div className='user'>
        <div>
          <b className={active ? `${styles.active} ${styles.content}` : `${styles.content}`} onClick={() => dispatch({
            type: 'TOGGLE_USER',
            id
          })}
          >
            {username}
          </b>
          &nbsp;
          ({email})
        </div>
        <div>
          <button onClick={() => dispatch({
            type: 'REMOVE_USER',
            id
          })}
          >삭제</button>
          <button onClick={() => dispatch({
            type: 'TOGGLE_INPUTS',
            id
          })}
          >수정</button>
        </div>
      </div>
      <div style={update
        ? { display: 'block' }
        : { display: 'none' }
      }>
        <ModifyUser user={user}/>
        {/* <UserRemote user={user} updateUser={updateUser} /> */}
      </div>
    </div>
  );
};

export default React.memo(User);