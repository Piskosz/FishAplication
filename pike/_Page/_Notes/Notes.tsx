import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, ImageBackground } from 'react-native';

const Notes = () => {
  const [notes, setNotes] = useState<string[]>([]);
  const [noteText, setNoteText] = useState('');

  const addNote = () => {
    if (noteText.trim()) {
      setNotes([...notes, noteText.trim()]);
      setNoteText('');
    }
  };

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        {/* Nagłówek */}
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>NOTATKI</Text>
        </View>

        {/* Lista notatek */}
        <FlatList
          data={notes}
          renderItem={({ item, index }) => (
            <View style={styles.noteItem} key={index}>
              <Text style={styles.noteText}>{item}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.notesList}
        />

        {/* Pole tekstowe i przycisk */}
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
});

export default Notes;
