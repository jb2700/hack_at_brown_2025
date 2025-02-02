// import React, { useState } from 'react';
// import { View, StyleSheet, Switch, Text } from 'react-native';
// import Body from "react-native-body-highlighter";

import { StyleSheet, Switch, Text, View } from "react-native";
import { useState } from "react";
import Body, { ExtendedBodyPart } from "react-native-body-highlighter";

export default function BodyModel() {
  const [side, setSide] = useState<"front" | "back">("front");
  const [gender, setGender] = useState<"male" | "female">("male");

  const [tappedElements, setTappedElements] = useState<{ slug: string; intensity: number; side: "front" | "back" }[]>([]);
  const sideSwitch = () => {
    setSide((prev) => (prev === "front" ? "back" : "front"));
  };

  const toggleGenderSwitch = () => {
    setGender((prev) => (prev === "male" ? "female" : "male"));
  };

  return (
    <View style={styles.container}>
      <Body
      data={tappedElements}  // Pass the array directly
      onBodyPartPress={(e: { slug: string }, side: "front" | "back") => {
        setTappedElements(prevState => {
          const exists = prevState.find(item => item.slug === e.slug && item.side === side);

          return exists
            ? prevState.filter(item => !(item.slug === e.slug && item.side === side))  // Remove if exists
            : [...prevState, { slug: e.slug, intensity: 2, side }];  // Add if not
        });
        console.log(tappedElements);
      }}
      colors={['#0000ff', '#0000ff']}
      gender={gender}
      side={side}
      scale={1.7}
      border="#dfdfdf"
    />
      <View style={styles.switchContainer}>
        <View style={styles.switch}>
          <Text>Side ({side})</Text>
          <Switch onValueChange={sideSwitch} value={side === "front"} />
          <Text>Gender ({gender})</Text>
          <Switch onValueChange={toggleGenderSwitch} value={gender === "male"} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  switchContainer: { },
  switch: { flexDirection: "row", alignItems: "center"},
});

// export default function BodyModel() {
//   const [gender, setGender] = useState("female");
//   const [side, setSide] = useState("front");

//   const toggleGender = () => setGender(gender === "female" ? "male" : "female");
//   const toggleSide = () => setSide(side === "front" ? "back" : "front");

//   return (
//     <View style={styles.container}>
//       <Body
//         data={[
//         ]}
//         colors={['#000', '#000']}
//         gender={gender}
//         side={side}
//         scale={1.7}
//         border="#dfdfdf"
//       />
//       <View style={styles.toggles}>
//         <View style={styles.toggleRow}>
//           <Text>Gender: {gender}</Text>
//           <Switch value={gender === "male"} onValueChange={toggleGender} />
//         </View>
//         <View style={styles.toggleRow}>
//           <Text>Side: {side}</Text>
//           <Switch value={side === "back"} onValueChange={toggleSide} />
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   toggles: {
//     marginTop: 20,
//   },
//   toggleRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
// });