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

type EkoLakesWojcinaProps = {
  navigation: NavigationProp<any, any>;
};

const EkoLakesWojcina: React.FC<EkoLakesWojcinaProps> = ({ navigation }) => {
  const regulations = [
    "Łowisko Eko Lakes Wójcina czynne od 1 kwietnia do 30 listopada.",
    "Łowisko znajduje się na granicy województwa Małopolskiego i Świętokrzyskiego, w miejscowości Wójcina.",
    "Występujące gatunki ryb: Karp, Amur, Lin.",
    "Powierzchnia łowiska: 24 ha.",
    "Woda składa się z kilku zbiorników dostępnych dla karpiarzy.",
    "Łowisko oferuje 22 dwuosobowe stanowiska wędkarskie.",
    "Wymagana metoda połowu: metoda karpiowa.",
    "Obowiązuje zasada 'no kill' (złów i wypuść).",
    "Na stanowiskach VIP znajdują się domki do wynajęcia.",
    "Woda zawiera karpie powyżej 20 kg, a największe okazy mogą ważyć nawet 34 kg.",
    "Na łowisku dostępne są miejsca do ładowania akumulatorów i WC z węzłem sanitarnym.",
    "Wędkarze muszą posiadać haki bezzadziorowe lub z mikrozadziorem oraz żyłki o średnicy min. 0,33.",
    "Wszystkie stanowiska wyposażone są w kołyskę karpiową, worek do ważenia ryb oraz podbierak.",
    "Woda dostępna jest także dla modeli RC i środków pływających.",
    "Nie jest wymagane posiadanie karty wędkarskiej.",
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Łowisko „Eko Lakes Wójcina”</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://znajdzlowisko.pl/lowisko-eko-lakes-wojcina')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Strona internetowa Łowisko Eko Lakes Wójcina</Text>
        </TouchableOpacity>

        <Text style={styles.subtitle}>Województwo: Małopolskie</Text>
        <Text style={styles.subtitle}>Miejscowość: Wójcina</Text>

        <Text style={styles.subtitle}>Regulamin łowiska:</Text>
        {regulations.map((rule, index) => (
          <View key={index} style={styles.infoBox}>
            <Text style={styles.infoText}>{rule}</Text>
          </View>
        ))}

        <TouchableOpacity
          onPress={() => navigation.navigate('Map', {
            initialLocation: { lat: 50.0, lng: 20.0 }, // Współrzędne dla Wójciny
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

export default EkoLakesWojcina;
