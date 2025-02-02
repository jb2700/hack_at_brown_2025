import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, StyleSheet, View, ImageBackground} from 'react-native';
import { useAuth } from './../../hooks/useAuth'; 
import { useNavigation } from '@react-navigation/native'; 

const SignupScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { signup } = useAuth(); 
  const navigation = useNavigation();

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      setErrorMessage("Passwords don't match.");
      return;
    }
    try {
      await signup(email, password); 
      // navigation.navigate('Login'); 
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ImageBackground 
    source={require('../../assets/images/signup_joshua_hilbert.jpg')}  // Update the path to your image
    style={styles.background}
  >
    <View style={styles.container}>
      <Text style={styles.header}>Be ready for your next apppointment.</Text>
      {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <TouchableOpacity onPress={handleSignup} style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>Already have an account? Log In</Text>
      </TouchableOpacity> */}
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 80,
    textAlign: 'left',
  },
  input: {
    height: 50,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: '#1177C7',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  link: {
    color: '#1177C7',
    textAlign: 'center',
    marginTop: 20,
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default SignupScreen;
