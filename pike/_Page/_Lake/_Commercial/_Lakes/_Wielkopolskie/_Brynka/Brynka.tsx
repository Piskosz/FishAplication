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

type BrynkaProps = {
  navigation: NavigationProp<any, any>;
};

const Brynka: React.FC<BrynkaProps> = ({ navigation }) => {
  const regulations = [
    "Akwen czynny codziennie całodobowo.",
    "Łowisko bogato zarybione.",
    "Na terenie miejsce na ognisko.",
    "Dla wędkarzy wyznaczono stanowiska.",
    "Obowiązuje zasada 'no kill' (złów i wypuść).",
    "Nakaz używania worka i kołyski do ważenia (można używać własnych lub łowiska).",
    "Nie jest wymagane posiadanie karty wędkarskiej.",
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')} // Możesz zastąpić to odpowiednim zdjęciem
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Łowisko u Brynka</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://znajdzlowisko.pl/lowisko-u-brynka/')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Strona internetowa Łowiska u Brynka</Text>
        </TouchableOpacity>

        <Text style={styles.subtitle}>Województwo: Wielkopolskie</Text>
        <Text style={styles.subtitle}>Miejscowość: Studzianna</Text>

        <Text style={styles.subtitle}>Dodatkowe informacje:</Text>
        {regulations.map((rule, index) => (
          <View key={index} style={styles.infoBox}>
            <Text style={styles.infoText}>{rule}</Text>
          </View>
        ))}

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Map', {
              initialLocation: { lat: 51.8525, lng: 17.4500 }, // Przykładowe współrzędne dla Łowiska u Brynka
            })
          }
          style={styles.mapButton}
        >
          <Text style={styles.linkText}>Otwórz mapę łowiska</Text>
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

export default Brynka;
