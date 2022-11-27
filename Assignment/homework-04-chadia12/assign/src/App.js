import React, { createContext, useContext, useReducer } from 'react'
import "./App.css";


const AppContext = createContext();
const appReducer = (state, action) =>{
   switch(action.type){
    case'INC':
    return {...state, count: state.count +1 }
    case 'MSG':
        return {...state, message: action.payload}
        default:
            return state;
   }
}
const MessageComp = ()=>{
    const {data} = useContext(AppContext)
    console.log('rendering MSG');
    return <div>{data.message}</div>
}


const CounterComp = ()=>{
    const {data} = useContext(AppContext)
    return (<><strong>{data.count}</strong></>)
} 


function App() {
    const [data, dispatch] = useReducer(appReducer, {count:0, message:'my message goes here'})

const handleChange =(e) =>{
    dispatch({type:'MSG', payload: e.target.value})

}
const handleClick = () =>{
    dispatch({type:'INC'})
}
  
 
  return (
   
<AppContext.Provider value={{data, dispatch}}>

    <div className="App">
        <br/>
        <br/>
        <CounterComp />
        <button type="button" onClick={handleClick}>Increase Count</button>
            <input type="text" value={data.message} name='message' onChange={handleChange} />
            <MessageComp />
    </div>
    </AppContext.Provider>
    
  );
}
export default App;
