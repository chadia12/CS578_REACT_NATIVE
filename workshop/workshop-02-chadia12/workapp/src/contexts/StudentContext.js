import { createContext, useEffect, useReducer } from "react";
import { studentReducer } from "../reducers/studentReducer";

export const StudentContext = createContext();

 const StudentProvider = ({children}) =>{
    const [students, dispatch] = useReducer(studentReducer, [], () =>{
        const localData = localStorage.getItem('data');
        return localData ? JSON.parse(localData) : []
    });
    useEffect (() =>{
        localStorage.setItem('data', JSON.stringify(students));
    },[students]);
return(
    <StudentContext.Provider value={{students, dispatch}}>
        {children}
    </StudentContext.Provider>
)
}
export default StudentProvider;