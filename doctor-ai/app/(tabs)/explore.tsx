import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import BodyView from '@/components/BodyView'; // Adjust the path as per your project structure
import SkeletalModel from '@/components/SkeletalModel';
import BodyModel from '@/components/MuscleModel';

export default function TabTwoScreen() {
  return (
    <ScrollView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">3D View</ThemedText>
      </ThemedView>
      <ThemedText>This view allows users to select a body part. It is part of the issue creation screen. </ThemedText>
      {/* Render the BodyModel component here */}
      <ThemedView style={styles.bodyModelContainer}>
      <BodyView/>
      </ThemedView>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    marginTop: 40,
    flexDirection: 'row',
    gap: 8,
  },
  bodyModelContainer: {
    marginTop: 20,
    marginBottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});