// this works for text 

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { getChatGPTResponse } from './../../components/ChatGptService'; // Import the service

const Chat_text = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    setResponse(''); // Clear previous response
    try {
      const gptResponse = await getChatGPTResponse(prompt);
      setResponse(gptResponse);
    } catch (error) {
      setResponse('Failed to get response from Llama');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Chat with Llama-3</Text>

      <TextInput
        style={styles.input}
        placeholder="Ask me anything..."
        value={prompt}
        onChangeText={setPrompt}
      />

      <Button
        title={loading ? 'Loading...' : 'Send Prompt'}
        onPress={handleSubmit}
        disabled={loading}
      />

      <ScrollView style={styles.responseContainer}>
        {response ? <Text style={styles.responseText}>{response}</Text> : null}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  responseContainer: {
    marginTop: 20,
  },
  responseText: {
    fontSize: 16,
    color: 'black',
    marginBottom: 10,
  },
});

export default Chat_text;
