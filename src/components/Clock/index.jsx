import React from "react";
import { Text, View } from "react-native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { Container, MainText } from "./styles";

export function Clock() {
  const [isPlaying, setIsPlaying] = React.useState(true);

  return (
    <>
      <Container>
        <CountdownCircleTimer
          isPlaying={isPlaying}
          duration={60 * 25}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[10, 6, 3, 0]}
          onComplete={() => ({ shouldRepeat: true, delay: 2 })}
          updateInterval={1}
        >
          {({ remainingTime, color }) => (
            <Text style={{ color, fontSize: 40 }}>{remainingTime}</Text>
          )}
        </CountdownCircleTimer>
      </Container>
    </>
  );
}
