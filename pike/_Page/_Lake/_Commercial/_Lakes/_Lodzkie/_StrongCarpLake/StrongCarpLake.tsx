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

type StrongCarpLakeProps = {
  navigation: NavigationProp<any, any>;
};

const StrongCarpLake: React.FC<StrongCarpLakeProps> = ({ navigation }) => {
  const regulations = [
    "Lowisko Strong Carp Lake polozone jest w Bolimowie, niedaleko takich miejscowosci jak Lowicz, Mszczonow czy Sochaczew, na granicy wojewodztwa lodzkiego i mazowieckiego.",
    "Na lowisku obowiazuje bezwzgledna zasada 'no kill' (zlow i wypusc) dla wszystkich gatunkow ryb.",
    "Akwen jest zbiornikiem pozwirowym. Maksymalna glebokosc wynosi 4-5 m. Bardzo zroznicowane dno akwenu, najczesciej kamieniste. Na lowisku znajduja sie dwie wyspy.",
    "Do dyspozycji wedkarzy znajduje sie lacznie 18 stanowisk wedkarskich (w tym dwu i trzyosobowe).",
    "Na jednym z brzegow udostepniono domki z mozliwoscia wynajecia. Domki w pelni wyposazone (prad, czajnik, lozka, koce, posciele, lodowka i wiele innych).",
    "Czesc stanowisk typowo pod namioty.",
    "Z dodatkowych udogodnien znajdziemy jeszcze prysznic, WC, prad na stanowisku czy mozliwosc wypozyczenia malej lodzi.",
    "Istnieje mozliwosc zamowienia jedzenia z dowozem.",
    "W przypadku polowu karpia jedyna dopuszczona metoda jest metoda wlosowa.",
    "W wodzie plywaja zarowno karpie, jak i amury powyzej 20 kg.",
    "Wedkarze musza posiadac na lowisku oraz uzywac: duzy podbierak, mata/wanna lub kolyska karpiowa, worek do wazenia ze sztywnymi ramionami oraz odkazacz.",
    "Nie jest wymagane posiadanie karty wedkarskiej.",
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Lowisko Strong Carp Lake</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://www.facebook.com/carpstronglake')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Facebook Strong Carp Lake</Text>
        </TouchableOpacity>

        <Text style={styles.subtitle}>Wojewodztwo: Lodzkie</Text>
        <Text style={styles.subtitle}>Miejscowosc: Bolimow / Lasieczniki</Text>

        <Text style={styles.subtitle}>Regulamin lowiska:</Text>
        {regulations.map((rule, index) => (
          <View key={index} style={styles.infoBox}>
            <Text style={styles.infoText}>{rule}</Text>
          </View>
        ))}

        <TouchableOpacity
          onPress={() => navigation.navigate('Map', {
            initialLocation: { lat: 52.0714, lng: 20.1596 },
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

export default StrongCarpLake;
