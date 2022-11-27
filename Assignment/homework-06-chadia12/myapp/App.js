
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useRef, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View ,Image} from "react-native";




export default function App() {
  const [time, setTime] = useState();
  const [rest, setRest] = useState();
   const [isStarted, setIsStarted] = useState(true);
  const [isRest, setIsRest] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [infoData, setInfoData] = useState()


  const startRef = useRef(null)
  const restRef = useRef(null)
 
  
  const onStart = async () => {
    if (time === 0) {
      clearInterval(startRef.current);
    } else {
      startRef.current = setInterval(() => setTime((prev) => prev - 1), 1000);
    }

const date = Date.now();
if(infoData ){
  setInfoData((prev)=>([...prev,
  {year:new Date(date).getFullYear(),
  moth:new Date(date).getMonth(),
  day:new Date(date).getDay(),
  hour:new Date(date).getHours(),
  minute:new Date(date).getMinutes()
}]));
}else{
  setInfoData([{
    year:new Date(date).getFullYear(),
    moth:new Date(date).getMonth(),
    day:new Date(date).getDay(),
    hour:new Date(date).getHours(),
    minute:new Date(date).getMinutes()
  }]);
}


  };

 
  
  const onStop = () => {
    clearInterval(startRef.current);
  };

  const onPause = () => {
    if(!isPaused){
      clearInterval(startRef.current);
    }
    else{
      startRef.current = setInterval(() => setTime((prev) => prev -1), 1000);
    }
    setIsPaused(!isPaused);
  };

  useEffect(() => {
    if(time === 0){
      clearInterval(startRef.current);
    }
    return () => clearInterval(startRef.current)
  }, []);


 useEffect(() => {
  if(time === 0){
    clearInterval(startRef.current);
    setIsStarted(false);
    setIsRest(true);
    restRef.current = setInterval( () =>{
      setRest((tm) => tm - 1)
    }, 1000)
  }
 },[time]);

 useEffect (() => {
  if(restRef === 0){
    clearInterval(restRef.current);
  }
  
  setIsStarted(true);
  setIsRest(false)
 },[restRef]);


  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: "column",
        },
      ]}
    >
      <View style={{ flex: 0.4, alignItems:"center"}}>
        <Image source={require('./assets/logo.jpg')} style={{height:100, width:100, }}/>
      
      </View>



      <View
        style={{
          flex: 0.2,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={styles.timecontainer}>
          <Text style={{fontSize:"2em"}}>{time}</Text>
        </View>
      
        <View style={styles.timecontainer}>
          <Text style={{fontSize:"2em"}}>{rest}</Text>
        </View>
        
      </View>


      <View
        style={{
          flex: 0.2,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >

        <Text style={styles.namecontainer}>Meditation</Text>
        <Text style={styles.namerest}>Rest</Text>
      </View>
      <View
        style={{
          flex: 0.3,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >

        <TextInput
          style={styles.input}
          placeholder="start Time"
          onChangeText={(newText) => setTime(newText)}
        />
        <TextInput
          style={styles.input}
          placeholder="rest Time"
          onChangeText={(newText) => setRest(newText)}
        />
      </View>
      <View style={{ flex:0.4, flexDirection:"row",alignItems:"center",justifyContent:"space-between" }} >
        <Button title="Start" onPress={onStart} />
        <Button title="Stop" onPress={onStop} />
        <Button title={isPaused ? "Resume": "Pause"} onPress={onPause} />
     </View>
      <View style={{ flex: 1, backgroundColor: "red" }}>
      <Button title="Meditation History" onPress={onStart} />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  timecontainer: {
    margin: 30,
  },
  namecontainer: {
    marginLeft: 30,
    fontSize: 20,
  },
  namerest: {
    marginRight: 25,
    fontSize: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    margin: 8,
  },
});
