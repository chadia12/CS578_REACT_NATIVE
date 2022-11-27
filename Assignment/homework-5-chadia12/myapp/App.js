import { StatusBar } from "expo-status-bar";
import { useEffect, useRef, useState } from "react";
import { Text, View, Button } from "react-native";
 

export default function App() {
  const [timeLeft, setTimeLeft] = useState(600);
  const [restTime, setRestTime] = useState(120);
  const [isStart, setIsStart] = useState(true);
  const [isRest, setIsRest] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isShow, setIsShow] = useState(true);
  const ref = useRef(null);
  const refRest = useRef(null);

  function onStart() {
    if (timeLeft === 0) {
      clearInterval(ref.current);
    } else {
      ref.current = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    }
  }

  function onStop() {
    clearInterval(ref.current);
    setTimeLeft(600);
  }
  function onPause() {
    if (!isPaused) {
      clearInterval(ref.current);
    } else {
      ref.current = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    }
    setIsPaused(!isPaused);
  }
  useEffect(() => {
    if (timeLeft === 0) {
      clearInterval(ref.current);
    }
    return () => clearInterval(ref.current);
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      clearInterval(ref.current);
      setIsStart(false);
      setIsRest(true);
      setIsShow(false);
      refRest.current = setInterval(
        () => setRestTime((time) => time - 1),
        1000
      );
    }
  }, [timeLeft]);

  useEffect(() => {
    if (restTime === 0) {
      clearInterval(refRest.current);
      setIsStart(true);
      setIsRest(false);
      setIsShow(true);
    }
  }, [restTime]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: isStart ? "green" : isRest ? "orange" : "white",
      }}
    >
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 20, marginTop:20}}>Meditation App</Text>
      </View>
      
      <View style={{ flex: 3 }}>
        {isStart && <Text>Meditation Start: {timeLeft} secs</Text>}

        {isRest && <Text>Resting {restTime} secs</Text>}
      </View>
      {isShow && (
        <View style={{ flex: 2, flexDirection: "column" }}>
          <View style={{ flex: 2, flexDirection: "column" }}>
            <Button title="start " onPress={onStart}>
              Start
            </Button>
          </View>
          <View style={{ flex: 2, flexDirection: "column" }}>
            <Button
              title={isPaused ? "Resume" : "Pause"}
              onPress={onPause}
            ></Button>
          </View>
          <View style={{ flex: 2, flexDirection: "column" }}>
            <Button title="Stop" onPress={onStop}>
              Stop
            </Button>
          </View>
        </View>
      )}

      <StatusBar style="auto" />
    </View>
  );
}
