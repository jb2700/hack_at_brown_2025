// BodyView.tsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MuscleModel from './MuscleModel';  // Assuming the path is correct
import SkeletalModel from './SkeletalModel'; // Assuming the path is correct

type BodyViewProps = {
    painSeverity: number;
    tappedElements: { slug: string; intensity: number; side: "front" | "back" }[];
    setTappedElements: React.Dispatch<React.SetStateAction<{ slug: string; intensity: number; side: "front" | "back" }[]>>;
    tappedElementsSkeletal: Set<string>;
    setTappedElementsSkeletal: React.Dispatch<React.SetStateAction<Set<string>>>;
  };

const BodyView: React.FC<BodyViewProps> = ({ 
  painSeverity,
  tappedElements, 
  setTappedElements, 
  tappedElementsSkeletal, 
  setTappedElementsSkeletal 
}) => {

  return (
    <View style={styles.container}>
      <MuscleModel painSeverity={painSeverity} setTappedElements={setTappedElements} />
      <SkeletalModel painSeverity={painSeverity} setTappedElements={setTappedElementsSkeletal} />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    padding: 10,
    backgroundColor: '#007BFF',
    color: 'white',
    borderRadius: 5,
  },
});

export default BodyView;