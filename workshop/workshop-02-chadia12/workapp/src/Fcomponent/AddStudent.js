import { useContext, useEffect, useState } from "react"
import { StudentContext } from "../contexts/StudentContext"
import useForm from "../useForm";
export default function AddStudent (){
   
    const [data, handleChange]= useForm({username:"", email:""});
    const [uid, setId] = useState();
    const { dispatch } = useContext(StudentContext);
    // const handleChange = (e) =>{
    //     setData((prev) =>{
    //         return ({
    //             ...prev, [e.target.name]: e.target.value
    //         })
    //     })
    // }
   
useEffect (() =>{
    const interval = setInterval( () =>{
let max = 30;
let min = 1;
const res = Math.floor(Math.random() * (max - min +1 )) + min;
setId(res)
    }, 5000);
    return clearInterval(interval)
},[])

const handleAddStudent = () =>{
    dispatch({type:'ADD_STUDENT', payload:{...data, id: uid}});
   
}
    return(
        <div>
            <input type="text" name="username" value={data.username} onChange ={handleChange}/>
            &nbsp;
            <input type="email" name="email" value={data.email} onChange ={handleChange}/>
            <button onClick={handleAddStudent}>Add</button>
        </div>
    )
}