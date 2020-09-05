import Expo from "expo";
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function App() {
  const [outputText, setOutputText] = useState(true);
  const toggleFunction = () => {
    setOutputText(!outputText);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>
        {outputText
          ? "Hello, friends Chai Peelo"
          : "Nikal, pehli phursat me nikal"}
      </Text>
      <TouchableOpacity style={styles.btn} onPress={() => toggleFunction()}>
        <Text style={styles.btntxt}>Click Here</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // display: "flex",
    // flexWrap: "Wrap",
    backgroundColor: "#ffefd5",
    alignItems: "center",
    justifyContent: "center",
  },
  txt: {
    fontSize: 28,
    padding: 10,
    marginBottom: 10,
    color: "#954e80",
    fontWeight: "bold",
    textAlign: "center",
  },
  btn: {
    backgroundColor: "#8c52dc",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 18,
    position: "relative",
    width: "auto",
    alignSelf: "center",
    borderRadius: 6,
    letterSpacing: 1,
  },
  btntxt: {
    color: "#fff",
  },
});
