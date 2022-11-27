
import appContext from "./AppContext";
import {useContext} from "react";
export default function CounterComponent() {
    console.log("count rendering");
    const {info} = useContext(appContext)
    return (
      <>
      <strong>{info.count}</strong>
      </>
        
     
    );
  }