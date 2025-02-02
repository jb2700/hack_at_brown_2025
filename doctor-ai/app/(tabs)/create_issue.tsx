import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Button, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import { useRouter } from 'expo-router'; 
import BodyView from '@/components/BodyView'
const CreateIssueScreen = () => {
  const router = useRouter(); 
  const [painSeverity, setPainSeverity] = useState<number>(0);
  const [issueDetails, setIssueDetails] = useState<string>('');

  const handleCreateIssue = () => {
    const newIssue = {
      id: Date.now().toString(),
      title: issueDetails,
      details: `Pain Severity: ${painSeverity}`,
      bodyParts: tappedElements,
      skeletalParts: Array.from(tappedElementsSkeletal),
    };
    console.log(newIssue);
    router.push(`/home?id=${newIssue.id}&title=${newIssue.title}&details=${newIssue.details}`);
  };
  const [tappedElements, setTappedElements] = useState<{ slug: string; intensity: number; side: "front" | "back" }[]>([]);
  const [tappedElementsSkeletal, setTappedElementsSkeletal] = useState(new Set<string>());

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Create a New Issue</Text>

      <Text style={styles.description}>
        Tell us what hurts and where. Our custom agent will carefully and thoroughly research potential causes. We will then suggest actionable treatment options and exercises for your specific needs.
      </Text>

      <TextInput
        style={styles.textInput}
        placeholder="Describe your health issue..."
        multiline
        value={issueDetails}
        onChangeText={setIssueDetails}
      />

      <View style={styles.painSeverityContainer}>
      <Text style={styles.header}>Pain Severity: {painSeverity}</Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={10}
          step={1}
          value={painSeverity}
          onValueChange={setPainSeverity}
          minimumTrackTintColor="#FF6347"
          maximumTrackTintColor="#d3d3d3"
          thumbTintColor="#FF6347"
        />
      </View>
      <BodyView tappedElements={tappedElements}
        setTappedElements={setTappedElements}
        tappedElementsSkeletal={tappedElementsSkeletal}
        setTappedElementsSkeletal={setTappedElementsSkeletal}/>
    <View style={styles.buttonContainer}>
    <TouchableOpacity onPress={handleCreateIssue} style={styles.button}>
      <Text style={styles.button}>Add Issue</Text>
    </TouchableOpacity>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginBottom: 60, // Adjust margin here
  },
  button: {
    color: "#fff",
    backgroundColor: '#1177C7',
    padding: 8,
    borderRadius: 5,
    alignItems: 'center',
  },

  container: {
    marginTop: 100,
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    marginBottom: 150
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginBottom: 15,
    color: '#333',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 4,
    height: 100,
    textAlignVertical: 'top',
  },
  painSeverityContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  painSeverityLabel: {
    fontSize: 16,
    marginBottom: 10,
  },
  slider: {
    width: '80%',
    height: 40,
  },
});

export default CreateIssueScreen;
