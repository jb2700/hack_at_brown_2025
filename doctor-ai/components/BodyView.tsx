import React from 'react';
import { View, StyleSheet } from 'react-native';
import BodyModel from './MuscleModel';
import SkeletalModel from './SkeletalModel';

export default function App() {
  return (
    <View style={styles.container}>
      <BodyModel />
      <SkeletalModel />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',  // Aligns the components horizontally
    justifyContent: 'space-between',  // Optional: Add spacing between the components
    alignItems: 'center',  // Align components vertically in the center
    flex: 1,
  },
});