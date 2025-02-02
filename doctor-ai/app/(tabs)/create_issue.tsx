import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import { useRouter } from 'expo-router'; 

const CreateIssueScreen = () => {
  const router = useRouter(); 
  const [painSeverity, setPainSeverity] = useState<number>(0);
  const [issueDetails, setIssueDetails] = useState<string>('');

  const handleCreateIssue = () => {
    const newIssue = {
      id: Date.now().toString(),
      title: issueDetails,
      details: `Pain Severity: ${painSeverity}`,
    };


    router.push(`/home?id=${newIssue.id}&title=${newIssue.title}&details=${newIssue.details}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create a New Issue</Text>

      <Text style={styles.description}>
        Please provide details about the issue you are facing. Use the scale below to rate the pain severity from 0 to 10.
      </Text>

      <TextInput
        style={styles.textInput}
        placeholder="Describe your health issue..."
        multiline
        value={issueDetails}
        onChangeText={setIssueDetails}
      />

      <View style={styles.painSeverityContainer}>
        <Text style={styles.painSeverityLabel}>Pain Severity: {painSeverity}</Text>
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

      <Button title="Finish Creating Issue" onPress={handleCreateIssue} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
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
