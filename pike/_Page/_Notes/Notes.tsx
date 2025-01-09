import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Note {
  id: string;
  userId: string;
  content: string;
}

const Notes = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [noteText, setNoteText] = useState('');
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const fetchUserIdAndNotes = async () => {
      try {
        const storedUserId = await AsyncStorage.getItem('userId');
        if (storedUserId) {
          setUserId(storedUserId);
          const response = await fetch(`http://172.28.16.1:8080/notes/user/${storedUserId}`);
          const data: Note[] = await response.json();
          setNotes(data);
        }
      } catch (error) {
        console.error('Error fetching notes:', error);
      }
    };
    fetchUserIdAndNotes();
  }, []); // Tylko raz przy pierwszym renderze

  const addNote = async () => {
    if (noteText.trim()) {
      const newNote = {
        userId,
        content: noteText.trim(),
      };

      try {
        const response = await fetch('http://172.28.16.1:8080/notes/add', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newNote),
        });

        if (response.ok) {
          const savedNote: Note = await response.json();
          // Dodanie nowej notatki na początek listy
          setNotes([savedNote, ...notes]);
          setNoteText('');
          // Odświeżenie notatek po dodaniu
          refreshNotes();
        } else {
          const errorResponse = await response.json();
          console.error('Failed to add note:', errorResponse.message);
        }
      } catch (error)        {
        console.error('Error adding note:', error);
      }
    }
  };

  // Funkcja do odświeżania notatek
  const refreshNotes = async () => {
    try {
      const response = await fetch(`http://172.28.16.1:8080/notes/user/${userId}`);
      const data: Note[] = await response.json();
      setNotes(data); // Aktualizuje listę notatek
    } catch (error) {
      console.error('Error refreshing notes:', error);
    }
  };

  // Funkcja usuwania notatki
  const deleteNote = async (id: string) => {
    try {
      const response = await fetch(`http://172.28.16.1:8080/notes/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Po usunięciu notatki, filtrujemy ją z listy
        setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
      } else {
        const errorResponse = await response.json();
        console.error('Failed to delete note:', errorResponse.message);
      }
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  return (
    <ImageBackground source={require('./ryba2.jpg')} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>NOTATKI</Text>
        </View>

        <FlatList
          data={notes}
          renderItem={({ item }) => (
            <View style={styles.noteItem}>
              <Text style={styles.noteText}>{item.content}</Text>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => deleteNote(item.id)}
              >
                <Text style={styles.deleteButtonText}>Usuń</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => `${item.id}-${item.userId}`} // Zapewnia unikalność klucza
          contentContainerStyle={styles.notesList}
        />

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Wpisz notatkę"
            placeholderTextColor="#aaa"
            style={styles.input}
            value={noteText}
            onChangeText={setNoteText}
          />
          <TouchableOpacity style={styles.addButton} onPress={addNote}>
            <Text style={styles.addButtonText}>Dodaj</Text>
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
    justifyContent: 'flex-start',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 10,
  },
  headerContainer: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  notesList: {
    flexGrow: 1,
    width: '100%',
    paddingHorizontal: 10,
  },
  noteItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 8,
    padding: 10,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  noteText: {
    fontSize: 16,
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
  input: {
    flex: 1,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#333',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  addButton: {
    backgroundColor: '#4CAF50',
    marginLeft: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  deleteButton: {
    backgroundColor: '#FF5722',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  deleteButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Notes;
