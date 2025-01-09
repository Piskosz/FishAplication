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

type TrzebiatkiFishingProps = {
  navigation: NavigationProp<any, any>;
};

const Trzebiatki: React.FC<TrzebiatkiFishingProps> = ({ navigation }) => {
  const regulations = [
    "Łowisko Trzebiatki położone jest niedaleko Miastka, Bytowa.",
    "Głębokość wody w większości oscyluje w granicach między 1,5-2 m.",
    "Występuje roślinność podwodna oraz lilie wodne w niektórych rejonach.",
    "Dno twarde, raczej równe. Kolor wody ciemny.",
    "Zbiornik pięknie usytuowany, otoczony lasem. Z dala od dróg czy zabudowań.",
    "Na ten moment jest 7 stanowisk z jednej strony wody oraz wychodek (dość dobry dojazd autem) i 13 stanowisk z drugiej strony.",
    "Obowiązuje bezwzględny zakaz zabierania ryb, jest to woda 'no kill' ('złów i wypuść').",
    "Na łowisku można stosować metody połowu: feeder, spławik, grunt, metoda karpiowa.",
    "Ze względu na duże osobniki karpia i amura zaleca się posiadanie i stosowanie: maty, dużego podbieraka, odkażacza.",
    "Woda jest nowo powstałą komercją, która wymaga odkrycia przez wędkarzy. Łowisko było systematycznie zarybiane karpiem i amurem.",
    "Nie jest wymagane posiadanie karty wędkarskiej.",
    "Preferowany kontakt telefoniczny z opiekunem wody.",
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Łowisko Trzebiatki</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://znajdzlowisko.pl/lowisko-trzebiatki/')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Strona internetowa Łowiska Trzebiatki</Text>
        </TouchableOpacity>

        <Text style={styles.subtitle}>Województwo: Pomorskie</Text>
        <Text style={styles.subtitle}>Miejscowość: Trzebiatkowa</Text>

        <Text style={styles.subtitle}>Dodatkowe informacje:</Text>
        {regulations.map((rule, index) => (
          <View key={index} style={styles.infoBox}>
            <Text style={styles.infoText}>{rule}</Text>
          </View>
        ))}

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Map', {
              initialLocation: { lat: 54.017, lng: 17.502 }, // Przykładowe współrzędne dla Trzebiatkowa
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

export default Trzebiatki;
