import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import Login from '../_Page/_LoginRegistery/_Login/Login';
import axios from 'axios'; // Dodaj import axios
import AsyncStorage from '@react-native-async-storage/async-storage';

// Mockowanie AsyncStorage
jest.mock('@react-native-async-storage/async-storage', () => ({
  setItem: jest.fn(),
  getItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
}));

jest.mock('axios'); // Dodaj mockowanie axios, aby kontrolować odpowiedzi

describe('Login Screen', () => {
  it('should login successfully', async () => {
    // Ustawienie mocka odpowiedzi z API
    const mockResponse = { data: { token: 'mockToken', userId: 1 } };
    axios.post.mockResolvedValue(mockResponse); // Użyj mockResolvedValue zamiast bezpośredniego przypisania

    const { getByPlaceholderText, getByText } = render(<Login navigation={{ navigate: jest.fn() }} />);

    // Wypełnianie formularza
    fireEvent.changeText(getByPlaceholderText('Nazwa użytkownika'), 'testUser');
    fireEvent.changeText(getByPlaceholderText('Hasło'), 'testPassword');

    // Kliknięcie przycisku logowania
    fireEvent.press(getByText('Zaloguj się'));

    // Oczekiwanie na zakończenie akcji
    await waitFor(() => expect(axios.post).toHaveBeenCalled());

    // Sprawdzenie, czy żądanie zostało wysłane do API
    expect(axios.post).toHaveBeenCalledWith('http://172.28.16.1:8080/auth/login', {
      login: 'testUser',
      haslo: 'testPassword',
    }, { headers: { 'Content-Type': 'application/json' } });
  });

  it('should show error message when login fails', async () => {
    // Ustawienie mocka odpowiedzi z API na błąd
    axios.post.mockRejectedValue({
      response: { data: { message: 'Invalid credentials' } },
    });

    const { getByPlaceholderText, getByText, getByTestId } = render(<Login navigation={{ navigate: jest.fn() }} />);

    // Wypełnianie formularza
    fireEvent.changeText(getByPlaceholderText('Nazwa użytkownika'), 'wrongUser');
    fireEvent.changeText(getByPlaceholderText('Hasło'), 'wrongPassword');

    // Kliknięcie przycisku logowania
    fireEvent.press(getByText('Zaloguj się'));

    // Oczekiwanie na zakończenie akcji
    await waitFor(() => expect(axios.post).toHaveBeenCalled());

    // Weryfikacja, czy komunikat o błędzie jest wyświetlany
    expect(getByTestId('errorMessage')).toHaveTextContent('Invalid credentials');
  });
});
