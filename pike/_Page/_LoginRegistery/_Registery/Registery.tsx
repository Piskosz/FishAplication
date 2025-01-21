import React, { useState } from 'react';
import { View, Text, TextInput, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

const Registry = ({ navigation }) => {
  const [formData, setFormData] = useState({
    login: '',
    password: '',
    mail: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleRegister = async () => {
    const { login, password, mail } = formData;

    if (!login || !password || !mail) {
      setErrorMessage('Wszystkie pola muszą być wypełnione.');
      return;
    }

    if (!validateEmail(mail)) {
      setErrorMessage('Podaj poprawny adres e-mail.');
      return;
    }

    try {
      await axios.post(
        'http://172.28.16.1:8080/Rejestracja/dodawanie/',
        [formData],
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      setErrorMessage('');
      navigation.navigate('Login'); // Przekierowanie do logowania
    } catch (error) {
      setErrorMessage('Wystąpił błąd podczas rejestracji. Spróbuj ponownie.');
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
        {errorMessage !== '' && (
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        )}
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Rejestracja</Text>
        </View>
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
  headerContainer: {
    width: '100%',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 28,
    color: '#f1f1f1',
    fontWeight: '600',
  },
  errorMessage: {
    color: 'red',
    fontSize: 16,
    marginBottom: 10,
  },
  formContainer: {
    width: '100%',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
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
