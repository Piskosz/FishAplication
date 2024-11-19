import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import axios from 'axios';

const Registry = ({ navigation }) => {
  const [formData, setFormData] = useState({
    login: '',
    password: '',
    mail: '',
  });
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async () => {
    try {
      const response = await axios.post(
        'http://172.28.16.1:8080/Rejestracja/dodawanie/',
        [formData],
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log(response.data.message);
      setRegistrationSuccess(true);
      navigation.navigate('Home');
    } catch (error) {
      console.error('Registration error:', error);
    
    }
  };

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Image
        />
        {registrationSuccess && (
          <Text style={styles.successMessage}>
            Użytkownik zarejestrowany pomyślnie!
          </Text>
        )}
        <View style={styles.formContainer}>
          <TextInput
            placeholder="Nazwa użytkownika"
            placeholderTextColor="#ccc"
            style={styles.input}
            onChangeText={(text) => handleInputChange('login', text)}
            value={formData.login}
          />
          <TextInput
            placeholder="Hasło"
            placeholderTextColor="#ccc"
            secureTextEntry
            style={styles.input}
            onChangeText={(text) => handleInputChange('password', text)}
            value={formData.password}
          />
            <TextInput
            placeholder="E-mail"
            placeholderTextColor="#ccc"
            style={styles.input}
            onChangeText={(text) => handleInputChange('mail', text)}
            value={formData.mail}
          />
          <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
            <Text style={styles.registerButtonText}>Zarejestruj się</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Wróć do logowania</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: '40%',
    height: '50%',
    marginBottom: 20,
  },
  successMessage: {
    color: 'green',
    fontSize: 16,
    marginBottom: 10,
  },
  formContainer: {
    width: '100%',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10,
  },
  input: {
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 18,
    color: '#333',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  loginButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  registerButton: {
    backgroundColor: '#FF5722',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  registerButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Registry;
