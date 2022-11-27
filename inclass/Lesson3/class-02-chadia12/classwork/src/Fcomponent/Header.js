import { useState } from "react";

export default function Header() {
  const [formData, setFormData] = useState({
    title:"",
    author:""
  })
  const[books, setBooks] = useState([]);
  const [isShow, setShow] = useState(true);

function handleChange(e){
  setFormData((prev) =>{
    return {...prev, [e.target.name]: e.target.value}
  })

}
function handleSubmit(e){
  e.preventDefault();
 setBooks(prev =>
   [formData, ...prev]
 )
 setFormData({title:'', author:''})
}
function handleShow(){
  setShow(!isShow);
}

 return(
  <div>
    <input type="text" value={formData.title} name="title" onChange={handleChange}/>
    <input type="text" value={formData.author} name="author" onChange={handleChange}/>
    <button onClick={handleSubmit}>Add</button>
    <hr/>
    {isShow && <ol>
      {books.map((bk,index) =>{
        return(
          <li key={index}>{bk.title} - {bk.author}</li>
        )
 
      })}
    
    </ol>}
    
    <button onClick={handleShow}>show/hidd</button>
  </div>
 )
}
