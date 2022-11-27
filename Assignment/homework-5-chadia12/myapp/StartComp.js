// import { Text, View, Button } from "react-native";
// import { useEffect, useRef, useState } from "react";
// export default function StartComp(){
//     const [timeLeft, setTimeLeft] = useState(600);
//     const [isStart, setIsStart] = useState(true);
//     const [isRest, setIsRest] = useState(false);
//     const [isPaused, setIsPaused] = useState(false);
//     const [isShow, setIsShow] = useState(true);
//     const ref = useRef(null);
//     const refRest = useRef(null);



    
//     return(
//         <View style={{flex:1}}>
// <View style={{ flex: 1 }}>
//         <Text style={{ fontSize: "2em" }}>Meditation App</Text>
//       </View>
//       <View style={{ flex: 3 }}>
//         {isStart && <Text>Meditation Start: {timeLeft} secs</Text>}

//         {isRest && <Text>Resting {restTime} secs</Text>}
//       </View>


//       {isShow && (
//         <View style={{ flex: 2, flexDirection: "column" }}>
//           <View style={{ flex: 2, flexDirection: "column" }}>
//             <Button title="start " onPress={onStart}>
//               Start
//             </Button>
//           </View>
//           <View style={{ flex: 2, flexDirection: "column" }}>
//             <Button
//               title={isPaused ? "Resume" : "Pause"}
//               onPress={onPause}
//             ></Button>
//           </View>
//           <View style={{ flex: 2, flexDirection: "column" }}>
//             <Button title="Stop" onPress={onStop}>
//               Stop
//             </Button>
//           </View>
//         </View>
//       )}






















//             </View>

//     )
// }