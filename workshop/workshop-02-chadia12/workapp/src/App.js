import "./App.css";
import { useState} from "react"
import Header from "./Fcomponent/Header";
function App() {
  const [userName, setUsername] = useState({user:""});
  const [isShow, setIsShow] = useState(true);
  const [isHeader, setHeader] =useState(false)

  function handleChange(e){
    setUsername({[e.target.name]: e.target.value})
  }
 
  const handleSubmit = () => {
    localStorage.setItem("username", userName.user);
    setIsShow(false)
    setHeader(true)
  }

  return (
    <div className="App">
      <br/>
      <br/>
     {isShow && (<div><input type="text" value={userName.user} name="user" onChange={handleChange}/>
      <button onClick={handleSubmit}>Submit</button></div>)} 
      {isHeader && <Header />}
    </div>
  );
}

export default App;
