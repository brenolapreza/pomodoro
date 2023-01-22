import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ThemeProvider } from "styled-components";
import { Clock } from "./src/components/Clock";
import global from "./src/styles/global";
import { Container } from "./styles";

export default function App() {
  return (
    <ThemeProvider theme={global}>
      <Container>
        <Clock />
      </Container>
    </ThemeProvider>
  );
}
