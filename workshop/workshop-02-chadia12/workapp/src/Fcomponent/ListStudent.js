import { useContext } from "react"
import { StudentContext } from "../contexts/StudentContext"
export default function Listudent(){
    const {students, dispatch} = useContext(StudentContext);
const handleDelete =(id) =>{
    dispatch({type:'DELETE_STUDENT' , payload: students.filter(st => st.id !== id)})
}
    return(<div>
        <h3>List of student</h3>
        <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((dt, index) => {
            return (
              <tr key={index}>
                <td>{dt.id}</td>
                <td>{dt.username}</td>
                <td>{dt.email}</td>
                <td>
                  {" "}
                  <button onClick={() => handleDelete(dt.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

    </div>)
}