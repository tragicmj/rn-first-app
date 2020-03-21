import Expo from "expo";
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function App() {
  const [outputText, setOutputText] = useState("Hello, Friends Chai Peelo");
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>{outputText}</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => setOutputText("Nikal, pehli phursat me nikal")}
      >
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
    justifyContent: "center"
  },
  txt: {
    fontSize: 30,
    marginBottom: 10,
    color: "#954e80",
    fontWeight: "bold"
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
    borderRadius: 26
  },
  btntxt: {
    color: "#fff"
  }
});
