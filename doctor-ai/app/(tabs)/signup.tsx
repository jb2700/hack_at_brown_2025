import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, StyleSheet, View, ImageBackground, Modal } from 'react-native';
import { useAuth } from './../../hooks/useAuth'; 
import { useRouter } from 'expo-router';

const SignupScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [modalVisible, setModalVisible] = useState(false); // Modal visibility state
  const [modalMessage, setModalMessage] = useState(''); // State for modal message
  const { signup } = useAuth(); 
  const router = useRouter();

  const handleSignup = async () => {
    // console.log("I AM HERE in HANle signup");
    if (password !== confirmPassword) {
      setErrorMessage("Passwords don't match.");
      return;
    }
    try {
      await signup(email, password); 
      // console.log("here");
      setModalMessage("A message was sent to your email, please confirm and then log in via the login page.");
      setModalVisible(true); // Show the modal with success message
    } catch (error) {
      setModalMessage(`Error: ${error|| 'An unexpected error occurred.'}`); // Show error message in modal
      setModalVisible(true); // Show the modal with error message
      console.log(error);
    }
  };

  return (
    <ImageBackground 
      source={require('../../assets/images/signup_joshua_hilbert.jpg')}  // Update the path to your image
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.header}>Be ready for your next appointment.</Text>
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
      </View>

      {/* Modal for showing confirmation or error message */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>{modalMessage}</Text>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(false);
                if (!errorMessage) {
                  router.push('/');
                }
              }}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Go to Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

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
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default SignupScreen;
