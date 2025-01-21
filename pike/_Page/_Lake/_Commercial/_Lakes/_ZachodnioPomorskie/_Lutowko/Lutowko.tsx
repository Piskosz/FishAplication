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

type LutowkoProps = {
  navigation: NavigationProp<any, any>;
};

const Lutowko: React.FC<LutowkoProps> = ({ navigation }) => {
  const regulations = [
    "Staw w Lutówku położony jest niedaleko takich miejscowości jak Barlinek czy Pyrzyce.",
    "Otoczone lasem, fajnie usytuowany.",
    "W wodzie pływają ładne karasie (około 1 kg) i spora ilość karpia. Najczęściej łowione są karpie około 6 kg.",
    "Nie ma za wiele miejsca parkingowego.",
    "Złowione ryby można w cenie zabrać (do 3 kg karasi), ale absolutnie nie trzeba. Inne gatunki można odpłatnie zabrać.",
    "Nie jest wymagane posiadanie karty wędkarskiej.",
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')} // Możesz zastąpić to odpowiednim zdjęciem
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Staw w Lutówku</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://znajdzlowisko.pl/staw-w-lutowku/')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Strona internetowa Stawu w Lutówku</Text>
        </TouchableOpacity>

        <Text style={styles.subtitle}>Województwo: Zachodniopomorskie</Text>
        <Text style={styles.subtitle}>Miejscowość: Lutówko</Text>

        <Text style={styles.subtitle}>Dodatkowe informacje:</Text>
        {regulations.map((rule, index) => (
          <View key={index} style={styles.infoBox}>
            <Text style={styles.infoText}>{rule}</Text>
          </View>
        ))}

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Map', {
              initialLocation: { lat: 53.015, lng: 15.205 }, // Przykładowe współrzędne dla Stawu w Lutówku
            })
          }
          style={styles.mapButton}
        >
          <Text style={styles.linkText}>Otwórz mapę stawu</Text>
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
});

export default Lutowko;
