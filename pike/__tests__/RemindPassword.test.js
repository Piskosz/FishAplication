import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import RemindPassword from '../_Page/_LoginRegistery/_Login/RemindPassword';

describe('RemindPassword Component', () => {
  it('should send API request with correct data', async () => {
    const mockResponse = { ok: true };
    global.fetch = jest.fn().mockResolvedValue(mockResponse); // Zamockowanie fetch

    const { getByPlaceholderText, getByText } = render(<RemindPassword />);

    // Wypełnianie formularza
    fireEvent.changeText(getByPlaceholderText('Enter your email'), 'test@example.com');
    fireEvent.changeText(getByPlaceholderText('Enter new password'), 'newPassword123');

    // Kliknięcie przycisku resetu hasła
    fireEvent.press(getByText('Reset Password'));

    // Oczekiwanie na zakończenie wywołania API
    await waitFor(() => expect(global.fetch).toHaveBeenCalled());

    // Sprawdzanie, czy wywołanie API miało odpowiednią treść
    expect(global.fetch).toHaveBeenCalledWith(
      'http://172.28.16.1:8080/auth/reset-password',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: 'test@example.com',
          newPassword: 'newPassword123',
        }),
      }
    );
  });
});
