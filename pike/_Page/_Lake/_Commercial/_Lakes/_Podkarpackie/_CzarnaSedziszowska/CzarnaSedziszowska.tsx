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

type CzarnaProps = {
  navigation: NavigationProp<any, any>; // Zmieniono 'any' na bardziej szczegółowy typ nawigacji w aplikacji
};

const CzarnaSedziszowska: React.FC<CzarnaProps> = ({ navigation }) => {
  const regulations = [
    "Łowisko Czarna Sędziszowska jest łowiskiem uznającym zasadę \u201eNo Kill\u201d oraz \u201eZłów i Wypuść\u201d i tylko na takich zasadach dozwolone jest wędkowanie na tym zbiorniku. Obowiązuje bezwzględny zakaz zabierania złowionych ryb!",
    "Wędkowanie na łowisku Czarna Sędziszowska dozwolone jest wyłącznie po zapoznaniu się z niniejszym regulaminem i zaakceptowaniu go, oraz opłaceniu zezwolenia na wędkowanie i połów ryb. Nie zapoznanie się z niniejszym regulaminem nie zwalnia korzystającego z łowiska od jego przestrzegania.",
    "Łowisko czynne jest w okresie od 1 kwietnia do 31 listopada lub pierwszego lodu. Poza wyznaczonymi terminami obowiązuje całkowity zakaz wejścia na łowisko bez wiedzy właściciela.",
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Łowisko Czarna Sędziszowska</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://www.facebook.com/lowisko.czarnasedziszowska/?locale=pl_PL')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Facebook Łowiska Czarna Sędziszowska</Text>
        </TouchableOpacity>

        <Text style={styles.subtitle}>Największa ryba: 29 kg karp</Text>

        <Text style={styles.subtitle}>Regulamin łowiska:</Text>
        {regulations.map((rule, index) => (
          <View key={index} style={styles.infoBox}>
            <Text style={styles.infoText}>{rule}</Text>
          </View>
        ))}

        <TouchableOpacity
          onPress={() => navigation.navigate('Map', {
            initialLocation: { lat: 50.0415, lng: 21.9991 },
          })}
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
    color: 'white',
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

export default CzarnaSedziszowska;
