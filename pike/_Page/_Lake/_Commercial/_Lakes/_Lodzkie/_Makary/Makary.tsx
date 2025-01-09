import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Linking,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { NavigationProp } from '@react-navigation/native';

type MakaryProps = {
  navigation: NavigationProp<any, any>;
};

const Makary: React.FC<MakaryProps> = ({ navigation }) => {
  const regulations = [
    "Lowisko u Makary zostalo udostepnione do wedkowania w 2021 roku.",
    "Akwen czynny codziennie w godzinach 7:00-20:00.",
    "Na lowisku mozna rozpalac grilla i ognisko w miejscach do tego wyznaczonych i po wczesniejszej konsultacji.",
    "Na lowisku obowiazuje bezwzgledna zasada 'no kill' (zlow i wypusc).",
    "Nie jest wymagana karta wedkarska.",
    "Sezon na polow bialorybu trwa od 01.03 do 31.10.",
    "Sezon na polow ryb drapieznych trwa od 01.05 do 31.12.",
    "Lowisko jest monitorowane 24 h/dobe.",
    "Lowisko zaleca posiadanie i uzywanie: duzych podbierakow, mat karpiowych, odkazacza, hakow bezzadziorowych.",
    "Dla wedkarzy dostepne sa pomosty, mozna rowniez lowic z brzegu.",
    "Przy lowisku istnieje mozliwosc wynajecia apartamentow.",
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Lowisko u Makary</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://www.facebook.com/lowiskoumakary/')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Facebook Lowisko u Makary</Text>
        </TouchableOpacity>

        <Text style={styles.subtitle}>Wojewodztwo: Lodzkie</Text>
        <Text style={styles.subtitle}>Miejscowosc: Kluki</Text>

        <Text style={styles.subtitle}>Regulamin lowiska:</Text>
        {regulations.map((rule, index) => (
          <View key={index} style={styles.infoBox}>
            <Text style={styles.infoText}>{rule}</Text>
          </View>
        ))}

        <TouchableOpacity
          onPress={() => navigation.navigate('Map', {
            initialLocation: { lat: 51.4161, lng: 19.1777 },
          })}
          style={styles.mapButton}
        >
          <Text style={styles.linkText}>Otworz mape lowiska</Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  linkButton: {
    backgroundColor: 'rgba(0, 0, 255, 0.7)',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  mapButton: {
    backgroundColor: 'rgba(34, 139, 34, 0.7)',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  linkText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  infoBox: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  infoText: {
    color: 'white',
    fontSize: 16,
    marginBottom: 5,
  },
  contact: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 20,
    textAlign: 'center',
  },
});

export default Makary;
