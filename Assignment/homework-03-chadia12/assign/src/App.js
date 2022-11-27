
import { useState } from "react";
import "./App.css";
import LimitedTextArea from "./Fcomponent/LimitedTextArea";
function App() {
  const [isShow, setShow] = useState(true);
  function handleShow() {
    setShow(!isShow);
  }

  return (
    <div className="App">
      <br />
      <br />
      <br />
      {isShow && <LimitedTextArea characters={200} />}
      <button onClick={handleShow}>show/hidder</button>
    </div>
  );
}

export default App;
