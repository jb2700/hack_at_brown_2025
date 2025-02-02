import React from 'react';
import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import BodyModel from '@/components/MuscleModel'; // Adjust the path as per your project structure
import SkeletalModel from '@/components/SkeletalModel';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">3D View</ThemedText>
      </ThemedView>
      <ThemedText>This view allows users to select a body part. It is part of the issue creation screen. </ThemedText>
      
      {/* Render the BodyModel component here */}
      <ThemedView style={styles.bodyModelContainer}>
        <BodyModel />
        <SkeletalModel/>
      </ThemedView>
    </ParallaxScrollView>
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
    flexDirection: 'row',
    gap: 8,
  },
  bodyModelContainer: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});