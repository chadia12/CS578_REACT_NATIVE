import AddStudent from "./AddStudent";
import Listudent from "./ListStudent";
import { useState } from "react";
export default function Header(){
    const user = localStorage.getItem('username');
    const[isList, setIsList] = useState(true);
    const [isAdd, setIsADD] = useState(false);
   function handleList(){
    setIsList(true)
    setIsADD(false)

   }
   function handleAdd(){
    setIsList(false)
    setIsADD(true)
    
    
   }
    return(
        <div>
            <h1> welcom {user} </h1>
            <button onClick={handleList}>List Student</button>
            <button onClick={handleAdd}>Add Student</button>
            {isList && <Listudent />}
            {isAdd && <AddStudent />}
        </div>
    )
}
