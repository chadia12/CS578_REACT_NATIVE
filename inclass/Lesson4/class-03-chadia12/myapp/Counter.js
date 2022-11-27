import { View, Text, Button } from "react-native";
import { useEffect, useState, useRef } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  const onStart = () => {
    if (ref.current) {
      clearInterval(ref.current);
    }
    ref.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  };

  const onStop = () => {
    clearInterval(ref.current);
  };
  useEffect(() => {
    return () => clearInterval(ref.current);
  }, []);

  return (
    <View style={{ flex: 5, flexDirection: "column" }}>
      <View style={{ flex: 3 }}>
        {" "}
        <Text>Counter: {count}</Text>{" "}
      </View>

      <View style={{ flex: 2, flexDirection: "column" }}>
        <View style={{ flex: 2 }}>
          <Button title="Start" onPress={onStart}></Button>{" "}
        </View>
        <View style={{ flex: 2 }}>
          <Button title="Stop" onPress={onStop}></Button>
        </View>
      </View>
    </View>
  );
}
