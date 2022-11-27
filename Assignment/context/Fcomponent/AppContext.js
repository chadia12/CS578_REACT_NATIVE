import { createContext, useState } from "react";

const initialValue = {count:0, message:"my message goes here"}
const appContext = createContext(initialValue);

export function GlobalData({children}){
    const [info, setInfo] = useState(initialValue);
return<appContext.Provider value={{info, setInfo}}>
    {children}
</appContext.Provider>
}
export default appContext;