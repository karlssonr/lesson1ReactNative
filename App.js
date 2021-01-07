import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, Image, TextInput } from "react-native";

export default function App() {
  var textInputValue = "<answer goes here>";
  const handlePress = () => console.log(textInputValue);
  const handleChangeText = () => console.log(textInputValue);

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Text style={styles.h1}>Hello World!</Text>
        <Text style={styles.h2}>First React Native App</Text>
      </View>
      <Text style={styles.text}>
        What would you like to get out of this course?
      </Text>
      <TextInput
        placeholder="Write text here"
        onChangeText={handleChangeText}
        style={styles.textInput}
      />
      <Text style={styles.text}>
        An emoji describinghow you are feeling about the course:
      </Text>

      <StatusBar style="auto" />


      {/* <Text>Your answer is: {textInputValue}</Text> */}

      <Image
        source={{
          uri: "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
        }}
        style={{ width: 100, height: 100, alignContent: "flex-start", marginLeft: 0 }}
      />
            <Button
        title="Submit"
        onPress={() => {
          handlePress;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  topView: {
    width: "100%",
    height: "20%",
    backgroundColor: "rgb(0, 191, 255)",
    alignContent: "flex-start",
    marginTop: 0,
  },
  h1: {
    color: "black",
    marginTop: 50,
    fontSize: 40,
    fontWeight: "bold",
  },
  h2: {
    color: "black",
    marginTop: 10,
    fontSize: 20,
    fontWeight: "normal",
  },
  text: {
    color: "black",
    marginTop: 50,
    fontSize: 25,
    fontWeight: "bold",
    marginRight: 75,
  },
  textInput: {
    //marginRight: 50,
    backgroundColor: "grey",
    height: "15%",
    width: "80%",
    alignContent: "flex-start",
  },
});
