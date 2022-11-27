
import React, { useContext } from "react";
import "./App.css";
import CounterComponent from "./Fcomponent/CounterComponent";
import MessageComponent from "./Fcomponent/MessageComponent";
import appContext from "./Fcomponent/AppContext";

function App() {
  const { info, setInfo } = useContext(appContext);

  function handleChange(e) {
    setInfo((prev) => ({ ...prev, message: e.target.value }));
  }

  function handleClick() {
    setInfo((prev) => ({ ...prev, count: prev.count + 1 }));
  }

  return (
    <div className="App">
      <CounterComponent />
      <button onClick={handleClick}>Increase count</button>
      <input type="text" value={info.message} onChange={handleChange} />
      <MessageComponent />
    </div>
  );
}
export default App;
