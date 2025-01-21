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

type ZakrzewkoProps = {
  navigation: NavigationProp<any, any>;
};

const Zakrzewko: React.FC<ZakrzewkoProps> = ({ navigation }) => {
  const regulations = [
    "Łowisko położone w Pasłęku.",
    "Akwen czynny od 1 kwietnia do 31 października w godzinach od świtu do zmierzchu.",
    "Łowienie dozwolone na jedną wędkę.",
    "Obowiązują limity ilościowe i wielkościowe złowionych ryb.",
    "Karpie powyżej 5 kg muszą wrócić do wody.",
    "Brak nocnych połowów.",
    "Brak możliwości rozbicia namiotu.",
    "Brak możliwości przyjazdu z przyczepą campingową.",
    "Brak noclegów w pobliżu.",
    "Spinning: brak danych.",
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Łowisko Zakrzewko II</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://znajdzlowisko.pl/lowisko-zakrzewko-ii/')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Strona internetowa Łowiska Zakrzewko II</Text>
        </TouchableOpacity>

        <Text style={styles.subtitle}>Województwo: Warmińsko-Mazurskie</Text>
        <Text style={styles.subtitle}>Miejscowość: Pasłęk</Text>


        <Text style={styles.subtitle}>Dodatkowe informacje:</Text>
        {regulations.map((rule, index) => (
          <View key={index} style={styles.infoBox}>
            <Text style={styles.infoText}>{rule}</Text>
          </View>
        ))}

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Map', {
              initialLocation: { lat: 54.0488, lng: 19.3092 }, // Przykładowe współrzędne dla Łowiska Zakrzewko II
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

export default Zakrzewko;
