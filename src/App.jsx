// import React, { useCallback, useMemo, useRef, useState } from 'react';
// import CreateUser from "./components/20220607/CreateUser";
// import UserList from "./components/20220607/UserList";
// import './App.css'

// const activeUsersCount = users => {
//   return users.filter(user => user.active).length;
// }

// const App = () => {
//   const [inputs, setInputs] = useState({
// 		nickname: '',
// 		email: ''
//   })

// 	const { nickname, email } = inputs;

// 	const [users,setUsers] = useState([
// 		{
// 			id: 1,
// 			nickname: '홍길동',
//       email: 'honggildong@naver.com',
//       active: false
// 		},
// 		{
// 			id: 6,
// 			nickname: '아무개',
//       email: 'amugae@naver.com',
//       active: false
// 		},
// 		{
// 			id: 4,
// 			nickname: '최진우',
//       email: 'cgzoo9607@gmail.com',
//       active: true
// 		}
// 	]);
//   const onChange = useCallback(e => {
//     const { name, value } = e.target;
//     setInputs(inputs => ({
//       ...inputs,
//       [name]: value
//     }))
//   }, []);

//   /** DB 존재 시 , autoIncrease 사용 예정이라 설정 필요없을 예정.. ( nextId 설정 부분 )*/
// 	//console.log(Math.max(...users.map(user => user.id+1),0)) //값을 참조하는거라 .. 메모리적 낭비가 존재하는지...
	
// 	const nextId = useRef(users.reduce(
//     (prev, current) => { return prev.id > current.id ? prev : current}
//   ).id+1);

//   // const inputRef = useRef([]);

//   const onCreate = useCallback(() => {
//     // for (let i = 0; i < inputRef.current.length; i++) {
//     //   if (!inputRef.current[i].value) {
//     //     alert(`${inputRef.current[i].name}을 입력해주세요.`);
//     //     inputRef.current[i].focus();
//     //     return;
//     //   }
//     // }
//     const user = {
//       id: nextId.current,
//       nickname,
//       email
//     };
//     setUsers(users => users.concat(user));
//     setInputs({
//       nickname: '',
//       email: ''
//     });
//     // inputRef.current[0].focus();
//     nextId.current += 1;
//   },[ nickname, email ]);
  
//   const onRemove = useCallback(id => {
//     setUsers(users => users.filter(user => user.id !== id));
//   },[]);

//   const onToggle = useCallback(id => {
//     setUsers(users =>
//       users.map(user => user.id === id
//         ? { ...user, active: !user.active }
//         : user
//       )
//     )
//   }, [])
  
//   const count = useMemo(() => activeUsersCount(users), [users]);

//   return (
//     <>
//       <div className='count'>활성화 유저 수 : {count}</div>
//       <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
//       <CreateUser
//         onCreate={onCreate}
// 				onChange={onChange}
// 				nickname={nickname}
//         email={email}
//         // nicknameRef={el => inputRef.current[0] = el}
//         // emailRef={el => inputRef.current[1] = el}
//       />
//     </>
//   );
// }

// export default App;

import React from 'react';
import UserApp from './components/20220607/UserApp';

const App = () => {
  return (
    <div>
      <UserApp />
    </div>
  );
};

export default App;