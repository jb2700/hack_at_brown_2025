// MuscleModel.js
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Switch, Text } from 'react-native';
import Body from 'react-native-body-highlighter';

interface MuscleModelProps {
  painSeverity: number;
  setTappedElements: React.Dispatch<React.SetStateAction<{ slug: string; intensity: number; side: 'front' | 'back' }[]>>;
}

export default function MuscleModel({ setTappedElements }: MuscleModelProps) {
  const [side, setSide] = useState<'front' | 'back'>('front');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  
  const [tappedElements, setLocalTappedElements] = useState<{ slug: string; intensity: number; side: 'front' | 'back' }[]>([]);  // Local state to manage tapped elements

  const sideSwitch = () => {
    setSide((prev) => (prev === 'front' ? 'back' : 'front'));
  };

  const toggleGenderSwitch = () => {
    setGender((prev) => (prev === 'male' ? 'female' : 'male'));
  };

  useEffect(() => {
    setTappedElements(tappedElements);  // Send the local tappedElements to the parent
  }, [tappedElements, setTappedElements]);

  return (
    <View style={styles.container}>
      <Body
        data={tappedElements}
        onBodyPartPress={(e: { slug: string }, side: 'front' | 'back') => {
          setLocalTappedElements((prevState) => {
            const exists = prevState.find(item => item.slug === e.slug && item.side === side);
            return exists
              ? prevState.filter(item => !(item.slug === e.slug && item.side === side))  // Remove if exists
              : [...prevState, { slug: e.slug, intensity: 2, side }];  // Add if not
          });
        }}
        colors={['#ff0000', '#ff0000']}
        gender={gender}
        side={side}
        scale={1.7}
        border="#dfdfdf"
      />
      <View style={styles.switchContainer}>
        <View style={styles.switch}>
          <Text>Side ({side})</Text>
          <Switch onValueChange={sideSwitch} value={side === 'front'} />
          <Text>Gender ({gender})</Text>
          <Switch onValueChange={toggleGenderSwitch} value={gender === 'male'} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  switchContainer: {},
  switch: { flexDirection: 'row', alignItems: 'center' },
});