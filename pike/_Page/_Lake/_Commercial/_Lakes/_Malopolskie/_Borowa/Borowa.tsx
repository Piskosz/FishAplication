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

type BorowaProps = {
  navigation: NavigationProp<any, any>;
};

const Borowa: React.FC<BorowaProps> = ({ navigation }) => {
  const regulations = [
    "Łowisko Borowa czynne przez cały rok.",
    "Łowisko znajduje się w miejscowości Borzęcin, województwo Małopolskie.",
    "Występujące gatunki ryb: Karp, Amur, Lin, Sumik.",
    "Powierzchnia łowiska: 5,5 ha.",
    "Łowisko położone jest w otoczeniu lasu dębowo-sosnowego.",
    "Na łowisku wyznaczono 9 stanowisk dwuosobowych.",
    "Jedno z stanowisk jest VIP, z domkiem dla czterech osób i własnym tarasem.",
    "Na stanowiskach znajdują się miejsca parkingowe.",
    "Obowiązuje zasada 'no kill' (złów i wypuść).",
    "Na łowisku dostępne są przenośne toalety oraz prysznic.",
    "Wędkarze muszą używać haków zadziorowych w rozmiarach od 1 do 6.",
    "Zakaz stosowania orzecha tygrysiego oraz surowego ziarna.",
    "Dozwolona metoda połowu: gruntowa. Dzieci mogą używać metody spławikowej.",
    "Okazy karpi dochodzą do 20 kg.",
    "Na łowisku dostępne są środki pływające: łódka zdalnie sterowana, ponton, łódź wędkarska.",
    "Nie jest wymagane posiadanie karty wędkarskiej.",
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Łowisko Borowa</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://znajdzlowisko.pl/lowisko-borowa')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Strona internetowa Łowisko Borowa</Text>
        </TouchableOpacity>

        <Text style={styles.subtitle}>Województwo: Małopolskie</Text>
        <Text style={styles.subtitle}>Miejscowość: Borzęcin</Text>

        <Text style={styles.subtitle}>Regulamin łowiska:</Text>
        {regulations.map((rule, index) => (
          <View key={index} style={styles.infoBox}>
            <Text style={styles.infoText}>{rule}</Text>
          </View>
        ))}

        <TouchableOpacity
          onPress={() => navigation.navigate('Map', {
            initialLocation: { lat: 50.0, lng: 20.0 }, // Współrzędne dla Borzęcina
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

export default Borowa;
