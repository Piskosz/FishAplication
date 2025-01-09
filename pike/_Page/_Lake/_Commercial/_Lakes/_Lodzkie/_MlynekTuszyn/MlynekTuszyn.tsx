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

type MlynekTuszynProps = {
  navigation: NavigationProp<any, any>;
};

const MlynekTuszyn: React.FC<MlynekTuszynProps> = ({ navigation }) => {
  const regulations = [
    "Lowisko Mlynek Tuszyn polozone jest w poblizu takich miejscowosci jak Lodz, Rzgow, Gluchow.",
    "Akwen otoczony jest lasem, a na wodzie znajduje sie wyspa.",
    "Glebokosc lowiska oscyluje miedzy 1,5 a 2,5 m. Dno jest mulowate.",
    "Na lowisku obowiazuje bezwzgledna zasada 'no kill' (zlow i wypusc) dla wszystkich gatunkow ryb.",
    "Dozwolone metody polowu to metoda splawikowa, gruntowa oraz spinningowa.",
    "Dla wedkarzy przygotowano 20 stanowisk z pomostami.",
    "Wedkarze musza posiadac i uzywac: mate, wanienke lub kolyske karpiowa, podbierak karpiowy, odkazacz, haczyki bezzadziorowe oraz zylke o srednicy min. 0,25 (w metodzie splawikowej moze byc ciensza).",
    "W wodzie plywaja okazy amura do 15 kg, karpie do 10-12 kg oraz szczupaki o dlugosci okolo 1 metra.",
    "Zakaz rozpalania grilla i ogniska. Auto musi pozostac na parkingu.",
    "Na terenie znajduje sie wakepark, altany dla gosci, toaleta z prysznicami oraz punkt gastronomiczny.",
    "W sezonie dostepne sa pole namiotowe oraz namioty glampingowe.",
    "Nie jest wymagane posiadanie karty wedkarskiej.",
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Lowisko Mlynek Tuszyn</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://www.facebook.com/wakeboardmlynek')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Facebook Mlynek Tuszyn</Text>
        </TouchableOpacity>

        <Text style={styles.subtitle}>Wojewodztwo: Lodzkie</Text>
        <Text style={styles.subtitle}>Miejscowosc: Tuszyn</Text>

        <Text style={styles.subtitle}>Regulamin lowiska:</Text>
        {regulations.map((rule, index) => (
          <View key={index} style={styles.infoBox}>
            <Text style={styles.infoText}>{rule}</Text>
          </View>
        ))}

        <TouchableOpacity
          onPress={() => navigation.navigate('Map', {
            initialLocation: { lat: 51.6341, lng: 19.5307 },
          })}
          style={styles.mapButton}
        >
          <Text style={styles.linkText}>Otworz mape lowiska</Text>
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
  contact: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 20,
    textAlign: 'center',
  },
});

export default MlynekTuszyn;
