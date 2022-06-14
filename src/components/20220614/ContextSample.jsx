import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext('defaultValue');

const Child = () => {
  const text = useContext(MyContext);
  return <div>안녕하세요? {text}</div>
}

const Parent = ({ text }) => { 
  return <Child text={text} />
}

const GrandParent = ({ text }) => {
  return <Parent text={text} />
}

const ContextSample = () => {
  const [value, setValue] = useState(true);
  return (
    <MyContext.Provider value={value ? "GOOd" : 'Bad'}>
      <GrandParent />
      <button onClick={() =>{setValue(!value)}}> Click </button>
    </MyContext.Provider>
  )
}

export default ContextSample;