import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

const SignUpScreen = ({ route }: any) => {
  const { firstName, lastName, dob, email: loginEmail, mobile, password: loginPassword } = route.params;

  const [email, setEmail] = useState('sakshi@.com');
  const [password, setPassword] = useState('123@@');
  const [isSignedUp, setIsSignedUp] = useState(false);

  const handleSignUp = () => {
   
    if (email === loginEmail && password === loginPassword) {
      setIsSignedUp(true);
      Alert.alert('Success', 'Sign Up Successful!');
    } else {
      Alert.alert('Error', 'Email or Password is incorrect.');
    }
  };

  return (
    <View style={styles.container}>
      {!isSignedUp ? (
        <View>
          <Text style={styles.header}>Sign Up</Text>

          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <Button title="Sign Up" onPress={handleSignUp} />
        </View>
      ) : (
        // Display the form data if sign up is successful
        <View>
          <Text style={styles.header}>Sign Up Successful!</Text>
          <Text style={styles.label}>First Name: {firstName}</Text>
          <Text style={styles.label}>Last Name: {lastName}</Text>
          <Text style={styles.label}>Date of Birth: {dob.toDateString()}</Text>
          <Text style={styles.label}>Email: {loginEmail}</Text>
          <Text style={styles.label}>Mobile: {mobile}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#bb7c7c',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 9,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default SignUpScreen;
