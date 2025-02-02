import React, { useState } from 'react';
import { View, Text, Modal, TextInput, TouchableOpacity, ScrollView, Button, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import { useRouter } from 'expo-router'; 
import BodyView from '@/components/BodyView'
import Constants from "expo-constants";

const CreateIssueScreen = () => {
  const router = useRouter(); 
  const [painSeverity, setPainSeverity] = useState<number>(0);
  const [issueDetails, setIssueDetails] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [responseText, setResponseText] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [tappedElements, setTappedElements] = useState<string[]>([]); // Example state for body parts
  const [tappedElementsSkeletal, setTappedElementsSkeletal] = useState<Set<string>>(new Set()); // Example for skeletal parts
  const GEMINI_API_KEY = Constants.manifest?.extra?.GEMINI_API_KEY;
  const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`;

  const prompt = "You are a helpful agent which will read in JSON descriptions of user's pain points and provide a bulleted list of suggestions for their continued care. You will first summarize potential causes, and then suggest treatment options for each of these causes. Here is the description: "

  const handleCreateIssue = async () => {
    // setLoading(true);
    // setError(null);
    // setResponseText("");

    // try {
    //   // Make API call to submit the issue
    //   const response = await fetch(GEMINI_API_URL, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       contents: [
    //         {
    //           role: "user",
    //           parts: [{ text: prompt + issueDetails }],
    //         },
    //       ],
    //     }),
    //   });

    //   if (!response.ok) {
    //     const errorText = await response.text();
    //     throw new Error(`Error: ${response.status} - ${errorText}`);
    //   }

    //   const data = await response.json();
    //   const generatedText =
    //     data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response received.";
    //   setResponseText(generatedText); // 

      // After submitting the data, we can create the issue object 
      const newIssue = {
        id: Date.now().toString(),
        title: issueDetails, // change this to be the title of the llm 
        details: painSeverity, 
        bodyParts: tappedElements,
        skeletalParts: Array.from(tappedElementsSkeletal),
        generatedText: "bad"
      };

      console.log("New Issue Created:", newIssue);
      router.push(`/home?id=${newIssue.id}&title=${newIssue.title}&details=${newIssue.details}`);
    // } catch (err) {
    //   setError((err as Error).message);
    // } finally {
    //   setLoading(false);
    // }
  };

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
      <BodyView painSeverity={painSeverity} tappedElements={tappedElements}
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
    // marginTop: 20,
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    // marginBottom: 50
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
