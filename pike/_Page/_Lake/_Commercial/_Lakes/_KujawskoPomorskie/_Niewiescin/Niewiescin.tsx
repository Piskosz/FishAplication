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

type NiewiescinLakeProps = {
  navigation: NavigationProp<any, any>;
};

const Niewiescin: React.FC<NiewiescinLakeProps> = ({ navigation }) => {
  const regulations = [
    "Lowisko Niewiescin polozone jest niedaleko Bydgoszczy, to naturalny zbiornik z trudnodostepna linia brzegowa i wysoka skarpa.",
    "Na lowisku wystepuja takie gatunki ryb jak karp, amur, szczupak, lin, leszcz, ploc, okon.",
    "Powierzchnia lowiska wynosi 11 ha, a do dyspozycji wedkarzy przygotowano 6 dwuosobowych stanowisk.",
    "Akwen dostepny dla wedkarzy caly rok, 24 h/dobe. Mozliwosc lowienia w nocy.",
    "Na lowisku obowiazuje zasada 'no kill' (zlow i wypusc) dla karpi i amurow.",
    "Metody polowu dozwolone na akwenie to: spinning, grunt, splawik, karpiowa, feeder.",
    "Dopuszczono mozliwosc spinningowania z lodzi.",
    "Na lowisku obowiazuje zakaz rozpalania ogniska (chyba, ze po wczesniejszym uzyskaniu zgody od gospodarza).",
    "Dla osob lowiacych karpie wyznaczono 6 dwuosobowych stanowisk. Dostep do pradu na stanowiskach 1 i 2.",
    "Woda ma glebokosc od 6 do 7 m, a w najglebszym miejscu osiagnie do 11 m.",
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Lowisko Niewiescin</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://www.facebook.com/%C5%81owisko-Niewie%C5%9Bcin-105939037460795/')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Facebook Lowisko Niewiescin</Text>
        </TouchableOpacity>

        <Text style={styles.subtitle}>Wojewodztwo: Kujawsko-Pomorskie</Text>
        <Text style={styles.subtitle}>Miejscowosc: Niewiescin</Text>

        <Text style={styles.subtitle}>Regulamin lowiska:</Text>
        {regulations.map((rule, index) => (
          <View key={index} style={styles.infoBox}>
            <Text style={styles.infoText}>{rule}</Text>
          </View>
        ))}

        <TouchableOpacity
          onPress={() => navigation.navigate('Map', {
            initialLocation: { lat: 53.2911, lng: 19.1067 },
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
});

export default Niewiescin;
