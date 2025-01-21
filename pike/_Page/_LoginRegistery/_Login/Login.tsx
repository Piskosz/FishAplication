import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
  Registry: undefined;
  RemindPassword:undefined;
};

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

const Login: React.FC<Props> = ({ navigation }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // Stan na komunikat o błędzie

  const handleLogin = async () => {
    setErrorMessage(''); // Wyczyszczenie poprzedniego błędu
    try {
      const response = await axios.post(
        'http://172.28.16.1:8080/auth/login',
        { login, haslo: password },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 200) {
        const { token, userId } = response.data;
        console.log('JWT Token:', token);
        console.log('User ID:', userId);
        console.log('Login:', login);

        // Zapisanie tokena i userId w AsyncStorage
        await AsyncStorage.setItem('token', token);
        await AsyncStorage.setItem('userId', String(userId)); // Konwersja na string
        await AsyncStorage.setItem('login', String(login)); // Konwersja na string
        navigation.navigate('Home'); // Przejdź do strony głównej
      } else {
        setErrorMessage('Invalid username or password'); // Komunikat o błędzie
      }
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message || 'Invalid username or password');
      } else {
        setErrorMessage('Could not connect to the server. Please try again later.');
      }
    }
  };

  const handleRegister = () => {
    navigation.navigate('Registry');
  };
  const handleRemind = () => {
    navigation.navigate('RemindPassword');
  };

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.headerText}>Logowanie</Text>
        {errorMessage !== '' && <Text testID="errorMessage" style={styles.errorMessage}>{errorMessage}</Text>} {/* Wyświetlanie błędu */}
        <TextInput
          placeholder="Nazwa użytkownika"
          placeholderTextColor="#ccc"
          style={styles.input}
          onChangeText={setLogin}
          value={login}
        />
        <TextInput
          placeholder="Hasło"
          placeholderTextColor="#ccc"
          secureTextEntry
          style={styles.input}
          onChangeText={setPassword}
          value={password}
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Zaloguj się</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.remindButton} onPress={handleRemind}>
          <Text style={styles.loginButtonText}>Przypomnij Haslo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
          <Text style={styles.registerButtonText}>Zarejestruj się</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};


const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover',
  },
  container: {
    width: '90%',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 10,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 28,
    color: '#f1f1f1',
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: '600',
  },
  errorMessage: {
    color: 'red', // Styl błędu
    fontSize: 16,
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#333',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  loginButton: {
    width: '100%',
    paddingVertical: 12,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  loginButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  remindButton: { // Styl dla przycisku przypomnij hasło
    width: '100%',
    paddingVertical: 12,
    backgroundColor: '#2196F3', // Niebieski
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
},
  registerButton: {
    width: '100%',
    paddingVertical: 12,
    backgroundColor: '#FF5722',
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  registerButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Login;
