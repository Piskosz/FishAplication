import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import Registry from '../_Page/_LoginRegistery/_Registery/Registery';
import axios from 'axios';

jest.mock('axios'); // Mockowanie axios

describe('Registry Component', () => {
  it('should send correct API request when registering a user', async () => {
    const mockResponse = { data: { success: true } };
    axios.post.mockResolvedValue(mockResponse); // Mockowanie odpowiedzi z API

    const { getByPlaceholderText, getByText } = render(<Registry />);

    // Wypełnianie formularza
    fireEvent.changeText(getByPlaceholderText('Nazwa użytkownika'), 'testUser');
    fireEvent.changeText(getByPlaceholderText('Hasło'), 'testPassword');
    fireEvent.changeText(getByPlaceholderText('E-mail'), 'test@example.com');

    // Kliknięcie przycisku rejestracji
    fireEvent.press(getByText('Zarejestruj się'));

    // Oczekiwanie na wywołanie API
    await waitFor(() => expect(axios.post).toHaveBeenCalled());

    // Sprawdzanie, czy zapytanie API zostało wysłane z poprawnymi danymi
    expect(axios.post).toHaveBeenCalledWith(
      'http://172.28.16.1:8080/Rejestracja/dodawanie/',
      [
        {
          login: 'testUser',
          password: 'testPassword',
          mail: 'test@example.com',
        },
      ],
      { headers: { 'Content-Type': 'application/json' } }
    );
  });

  it('should display error message when fields are empty', async () => {
    const { getByText } = render(<Registry />);

    // Kliknięcie przycisku rejestracji bez wypełnienia formularza
    fireEvent.press(getByText('Zarejestruj się'));

    // Sprawdzanie, czy pojawił się komunikat o błędzie
    expect(getByText('Wszystkie pola muszą być wypełnione.')).toBeTruthy();
  });

  it('should show error message if API request fails', async () => {
    const mockError = new Error('Network Error');
    axios.post.mockRejectedValue(mockError); // Mockowanie błędu z API

    const { getByPlaceholderText, getByText } = render(<Registry />);

    // Wypełnianie formularza
    fireEvent.changeText(getByPlaceholderText('Nazwa użytkownika'), 'testUser');
    fireEvent.changeText(getByPlaceholderText('Hasło'), 'testPassword');
    fireEvent.changeText(getByPlaceholderText('E-mail'), 'test@example.com');

    // Kliknięcie przycisku rejestracji
    fireEvent.press(getByText('Zarejestruj się'));

    // Oczekiwanie na pojawienie się komunikatu o błędzie
    await waitFor(() => {
      expect(getByText('Wystąpił błąd podczas rejestracji. Spróbuj ponownie.')).toBeTruthy();
    });
  });
});
