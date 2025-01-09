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

type SzuwarekFishingProps = {
  navigation: NavigationProp<any, any>;
};

const Szuwarek: React.FC<SzuwarekFishingProps> = ({ navigation }) => {
  const regulations = [
    "Łowisko Szuwarek położone jest w okolicy Miastka. Dokładną lokalizację podaje opiekun w momencie rezerwacji wody.",
    "Zbiornik otoczony lasem, polami. Gwarancja ciszy i spokoju.",
    "Akwen raczej płytki, głębokość od 1 m do 1,5 m. Dno muliste, raczej równe.",
    "Na wodzie występuje roślinność nawodna – duża ilość lilii, które dają możliwość ucieczki rybom.",
    "Woda jest żyzna, występuje w niej m.in. ochotka, co sprawia, że przechytrzenie najstarszych ryb nie jest łatwe.",
    "Większość ryb nie widziała dotąd haczyków.",
    "Wędkarze muszą posiadać: matę, kołyskę, większy podbierak karpiowy oraz odkażacz.",
    "Obowiązuje bezwzględna zasada 'no kill' dla wszystkich gatunków ryb.",
    "Można łowić metodą feederową, karpiową.",
    "Rekord łowiska to karp 15 kg. Przeważają ryby między 4 a 12 kg, w tym karpie pełnołuskie.",
    "Jest jeden rodzynek – pełnołuski karp koi.",
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Łowisko Szuwarek</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://znajdzlowisko.pl/lowisko-szuwarek/')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Strona internetowa Łowiska Szuwarek</Text>
        </TouchableOpacity>

        <Text style={styles.subtitle}>Województwo: Pomorskie</Text>
        <Text style={styles.subtitle}>Miejscowość: Okolice Miastka</Text>

        <Text style={styles.subtitle}>Dodatkowe informacje:</Text>
        {regulations.map((rule, index) => (
          <View key={index} style={styles.infoBox}>
            <Text style={styles.infoText}>{rule}</Text>
          </View>
        ))}

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Map', {
              initialLocation: { lat: 54.017, lng: 17.502 }, // Przykładowe współrzędne dla Szuwałka
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

export default Szuwarek;
