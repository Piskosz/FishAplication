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

type BunkramiProps = {
  navigation: NavigationProp<any, any>;
};

const Bunkrami: React.FC<BunkramiProps> = ({ navigation }) => {
  const regulations = [
    "Łowisko pod Bunkrami oferuje możliwość połowu na różne techniki: feeder, grunt, karpiowa, spławik, spinning, a nawet z lodu.",
    "Akwen czynny dla wędkarzy jedynie w dzień. Nie ma połowów nocnych.",
    "Woda ta jest 'no kill' (złów i wypuść).",
    "Wędkarz musi posiadać: haki bezzadziorowe oraz podbierak.",
    "Głębokość akwenu sięga do 7,5 m. Możliwość wędkowania na pływadełkach.",
    "Bardzo duża różnorodność gatunkowa ryb - ponad 20 gatunków (dokładnie 23).",
    "Woda otoczona lasem oraz polami.",
    "Na terenie znajduje się altana z krzesełkami oraz stolikami. Są również wyznaczone stanowiska wędkarskie.",
    "Nie jest wymagane posiadanie karty wędkarskiej.",
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Łowisko pod Bunkrami</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://znajdzlowisko.pl/lowisko-pod-bunkrami/')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Strona internetowa Łowisko pod Bunkrami</Text>
        </TouchableOpacity>

        <Text style={styles.subtitle}>Województwo: Mazowieckie</Text>
        <Text style={styles.subtitle}>Miejscowość: Guty - Bujno</Text>

        <Text style={styles.subtitle}>Regulamin łowiska:</Text>
        {regulations.map((rule, index) => (
          <View key={index} style={styles.infoBox}>
            <Text style={styles.infoText}>{rule}</Text>
          </View>
        ))}

        <TouchableOpacity
          onPress={() => navigation.navigate('Map', {
            initialLocation: { lat: 52.173, lng: 22.719 }, // Współrzędne przykładowe, zmień na właściwe
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

export default Bunkrami;
