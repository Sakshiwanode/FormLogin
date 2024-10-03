import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const LoginScreen = ({ navigation }: any) => {
  const [firstName, setFirstName] = useState('sakshi');
  const [lastName, setLastName] = useState('wanode');
  const [dob, setDob] = useState(new Date());
  const [dobDisplay, setDobDisplay] = useState('Select Date of Birth');
  const [email, setEmail] = useState('sakshi@.com');
  const [mobile, setMobile] = useState('1234567891');
  const [password, setPassword] = useState('123@@');
  const [confirmPassword, setConfirmPassword] = useState('123@@');
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleSubmit = () => {
    if (!firstName || !lastName || !dob || !email || !mobile || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill all fields.');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

   
    navigation.navigate('SignUp', {
      firstName,
      lastName,
      dob,
      email,
      mobile,
      password, 
    });
  };

  const onChange = (event: any, selectedDate:any) => {
    setShowDatePicker(false); 

    if (event.type === 'set') {
      const currentDate = selectedDate || dob;
      setDob(currentDate);
      setDobDisplay(currentDate.toDateString());
    }
  };

 
  const openDatePicker = () => {
    setShowDatePicker(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>

      <Text style={styles.label}>First Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter First Name"
        value={firstName}
        onChangeText={setFirstName}
      />

      <Text style={styles.label}>Last Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Last Name"
        value={lastName}
        onChangeText={setLastName}
      />

      <Text style={styles.label}>Date of Birth</Text>
      <View style={styles.datePickerContainer}>
        <TextInput
          style={styles.dateInput}
          placeholder="Date of Birth"
          value={dobDisplay}
          onFocus={openDatePicker}
          editable={false} 
        />
        <Icon
          name="calendar"
          size={30}
          color="black"
          onPress={openDatePicker} 
          style={styles.icon}
        />
      </View>
      {showDatePicker && (
        <DateTimePicker
          value={dob}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <Text style={styles.label}>Mobile Number</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Mobile Number"
        value={mobile}
        onChangeText={setMobile}
        keyboardType="phone-pad"
        maxLength={10}
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Text style={styles.label}>Confirm Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />

      <Button title="Submit" onPress={handleSubmit} />
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
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 9,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  datePickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  dateInput: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 9,
    paddingHorizontal: 10,
  },
  icon: {
    marginLeft: 10,
  },
});

export default LoginScreen;
