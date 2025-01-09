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

type SelwaProps = {
  navigation: NavigationProp<any, any>;
};

const Selwa: React.FC<SelwaProps> = ({ navigation }) => {
  const regulations = [
    "Łowisko Selwa położone jest niedaleko Białegostoku.",
    "Dwa zbiorniki wyczyszczone, gliniaste, bez zaczepów. Jeden zbiornik naturalnie dziki, w części porośnięty, z mulistym dnem.",
    "Łowisko 'no kill' dla większości gatunków ryb (poza karasiem i okoniem – w cenie wejścia).",
    "Zakupić można amura, tołpygę i szczupaka.",
    "Na terenie dostępne jest pole namiotowe z podłączeniem do prądu, bieżącą wodą oraz toi-toi.",
    "Do dyspozycji: miejsce na ognisko, przenośne paleniska, sauna.",
    "Wędkarze muszą posiadać: haki bezzadziorowe, podbieraki; mile widziany odkażacz.",
    "Do dyspozycji wędkarzy są maty.",
    "Akwen nie prowadzi rezerwacji stanowisk.",
    "Łowisko nie wymaga posiadania karty wędkarskiej.",
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Łowisko Selwa</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://znajdzlowisko.pl/selwa-lowisko/')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Strona internetowa Łowiska Selwa</Text>
        </TouchableOpacity>

        <Text style={styles.subtitle}>Województwo: Podlaskie</Text>
        <Text style={styles.subtitle}>Miejscowość: Supraśl</Text>



        <Text style={styles.subtitle}>Dodatkowe informacje:</Text>
        {regulations.map((rule, index) => (
          <View key={index} style={styles.infoBox}>
            <Text style={styles.infoText}>{rule}</Text>
          </View>
        ))}

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Map', {
              initialLocation: { lat: 53.192, lng: 23.322 }, // Przykładowe współrzędne dla Supraśla
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

export default Selwa;
