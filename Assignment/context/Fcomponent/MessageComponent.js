import appContext from "./AppContext";
import React, {useContext} from "react";


 const MessageComponent= React.memo( () =>{
    console.log(`rendering MSG`);
        const {info} = useContext(appContext)
        return <div>{info.message}</div>;
      })

export default MessageComponent;

 