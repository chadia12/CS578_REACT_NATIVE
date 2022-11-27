import { useEffect, useState } from "react";

export default function LimitedTextArea({ characters }) {
  const [data, setData] = useState('');
  const [count, setCount] = useState(0);

  function handleChange(e){
    setData(e.target.value);
  }
  useEffect(() => {
    setCount(data.length)
  },[data])
  return (
    <div>
      <textarea  id="w3review"
        name="w3review"
        rows="10"
        cols="50" value={data} maxLength ={characters} onChange={handleChange}/>
      <p>{count} / {characters}</p>
    </div>
  )
}
