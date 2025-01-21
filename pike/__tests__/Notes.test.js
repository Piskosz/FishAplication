import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import Notes from '../_Page/_Notes/Notes';
import AsyncStorage from '@react-native-async-storage/async-storage';

jest.mock('@react-native-async-storage/async-storage', () => ({
  setItem: jest.fn(),
  getItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
}));

describe('Notes Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    AsyncStorage.getItem = jest.fn().mockResolvedValue('123');
  });

  it('should fetch notes on mount', async () => {
    const mockNotes = [
      { id: '1', userId: '123', content: 'Test note 1' },
      { id: '2', userId: '123', content: 'Test note 2' },
    ];

    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockNotes),
    });

    const { getByText } = render(<Notes />);

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith('http://172.28.16.1:8080/notes/user/123');
      expect(getByText('Test note 1')).toBeTruthy();
      expect(getByText('Test note 2')).toBeTruthy();
    });
  });

  it('should add a new note when add button is pressed', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue({ id: '3', userId: '123', content: 'New note' }),
    });

    const { getByPlaceholderText, getByText, findByText } = render(<Notes />);

    await waitFor(() => expect(AsyncStorage.getItem).toHaveBeenCalledWith('userId'));

    fireEvent.changeText(getByPlaceholderText('Wpisz notatkę'), 'New note');
    fireEvent.press(getByText('Dodaj'));

    await waitFor(() => expect(global.fetch).toHaveBeenCalledWith(
      'http://172.28.16.1:8080/notes/add',
      expect.objectContaining({
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: '123', content: 'New note' }),
      })
    ));

    await waitFor(() => expect(findByText('New note')).toBeTruthy());
  });

  it('should delete a note when delete button is pressed', async () => {
    const mockNotes = [
      { id: '1', userId: '123', content: 'Note to delete' },
    ];

    global.fetch = jest
      .fn()
      .mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue(mockNotes),
      })
      .mockResolvedValueOnce({ ok: true });

    const { getByText } = render(<Notes />);

    await waitFor(() => expect(getByText('Note to delete')).toBeTruthy());

    fireEvent.press(getByText('Usuń'));

    await waitFor(() => expect(global.fetch).toHaveBeenCalledWith(
      'http://172.28.16.1:8080/notes/1',
      expect.objectContaining({ method: 'DELETE' })
    ));

    expect(() => getByText('Note to delete')).toThrow();
  });
});
