import React, { useState } from 'react';
import { View, StyleSheet, Switch, Text } from 'react-native';
import Body from "react-native-body-highlighter";

export default function BodyModel() {
  const [gender, setGender] = useState("female");
  const [side, setSide] = useState("front");

  const toggleGender = () => setGender(gender === "female" ? "male" : "female");
  const toggleSide = () => setSide(side === "front" ? "back" : "front");

  return (
    <View style={styles.container}>
      <Body
        data={[
        ]}
        colors={['#000', '#000']}
        gender={gender}
        side={side}
        scale={1.7}
        border="#dfdfdf"
      />
      <View style={styles.toggles}>
        <View style={styles.toggleRow}>
          <Text>Gender: {gender}</Text>
          <Switch value={gender === "male"} onValueChange={toggleGender} />
        </View>
        <View style={styles.toggleRow}>
          <Text>Side: {side}</Text>
          <Switch value={side === "back"} onValueChange={toggleSide} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  toggles: {
    marginTop: 20,
  },
  toggleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
});