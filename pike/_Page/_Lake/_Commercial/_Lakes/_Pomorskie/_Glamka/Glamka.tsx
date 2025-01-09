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

type GlamkaFishingProps = {
  navigation: NavigationProp<any, any>;
};

const Glamka: React.FC<GlamkaFishingProps> = ({ navigation }) => {
  const regulations = [
    "Łowisko Glamka położone jest niedaleko Miastka w województwie pomorskim.",
    "Jest to nowo otwarty zbiornik (lato 2022) do połowów komercyjnych.",
    "Krystalicznie czysta woda, głębokość zbiornika dochodzi miejscami do 17 m.",
    "Nie jest to łatwy technicznie zbiornik, gdyż poza sporą głębokością znajduje się również roślinność podwodna, powalone drzewa i zaczepy.",
    "Na terenie znajduje się wychodek, ławki ze stołami, gdzieniegdzie pomosty.",
    "Obowiązuje zasada 'no kill' ('złów i wypuść') dla wszystkich gatunków ryb!",
    "Na ten moment przygotowano 6 stanowisk wędkarskich, kolejne są w drodze.",
    "Preferowany kontakt telefoniczny.",
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Łowisko Glamka</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://znajdzlowisko.pl/lowisko-glamka/')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Strona internetowa Łowiska Glamka</Text>
        </TouchableOpacity>

        <Text style={styles.subtitle}>Województwo: Pomorskie</Text>
        <Text style={styles.subtitle}>Miejscowość: Dźwierzno k. Miastka</Text>

        <Text style={styles.subtitle}>Dodatkowe informacje:</Text>
        {regulations.map((rule, index) => (
          <View key={index} style={styles.infoBox}>
            <Text style={styles.infoText}>{rule}</Text>
          </View>
        ))}

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Map', {
              initialLocation: { lat: 54.017, lng: 17.502 }, // Przykładowe współrzędne dla Dźwierzno k. Miastka
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

export default Glamka;
