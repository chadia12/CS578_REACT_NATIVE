

import './App.css';
import React, { createContext, useContext, useEffect, useMemo, useReducer, useRef, useState } from 'react';


const GlobalContext = createContext({});
const reducer = (state, action) => {
  switch (action.type) {
    case "SHOW":
      return { ...state, show: action.payload };
    case "COUNTER1":
      return { ...state, counter1: state.counter1 + 1 }
    case "COUNTER2":
      return { ...state, counter2: state.counter2 + 1 }
    default:
      return state;
  }
}

const longOperation = (counter1) => {
  console.log('long operation');
  for(let i = 0; i < 1000; i++){
    counter1++;
  }
  return counter1;
}

const useMyMemo = (initialValue) => {
  
  const [counter1, setCounter1] = useState(initialValue);
  const [longValue, setLongValue] = useState(0);
  useEffect(() => {
    const value = longOperation(counter1);
    setLongValue(value);
  }, [counter1]);
  return [counter1, longValue, setCounter1];
}


function Counter() {
  const { state, dispatch } = useContext(GlobalContext);

  const [counter1, longValue, setCounter1] = useMyMemo(state.counter1);

  const [counter2, setCounter2] = useState(state.counter2);

  //const longValue = useMemo(() => longOperation(counter1), [counter1]);
  


  const action1 = () => {
    setCounter1(counter1 + 1);
    dispatch({ type: "COUNTER1" })
  }

  const action2 = () => {
    setCounter2(counter2 + 2)
  }

  console.log('render');
  return (
    <>
      <p>Long Value: {longValue}</p>
      <br></br>
      <p>Counter 1: {counter1}</p>
      <button onClick={action1}>INC1</button>
      <br></br>
      <p>Counter 2: {counter2}</p>
      <button onClick={action2}>INC2</button>
    </>
  )
}

function App() {
  // const [show, setShow] = useState(false);
  // const showHide = () => {
  //   setShow(!show);
  // }
  const [state, dispatch] = useReducer(reducer, { counter1: 10, counter2: 10, show: true });
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <Counter/>
      </div>
    </GlobalContext.Provider>

  );
}

export default App;

