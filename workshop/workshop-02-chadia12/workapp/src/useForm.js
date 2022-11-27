
import {useState} from 'react'
export default function useForm(intialvalue){
 const [data, setData] = useState(intialvalue);
 
 const handleChange = (e) =>{
   setData({ ...data , [e.target.name]: e.target.value})
 }
 return [data, handleChange]
}