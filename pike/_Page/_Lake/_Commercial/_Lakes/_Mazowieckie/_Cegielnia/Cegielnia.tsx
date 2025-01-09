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

type CegielniaProps = {
  navigation: NavigationProp<any, any>;
};

const Cegielnia: React.FC<CegielniaProps> = ({ navigation }) => {
  const regulations = [
    "Akwen Stara Cegielnia to nowe łowisko, które otworzyło się dla wędkarzy w 2022 roku.",
    "Położone niedaleko takich miejscowości jak: Pułtusk, Radzymin, Wyszków, Legionowo, Warszawa.",
    "Zbiornik główny ma około 3 ha, dno zróżnicowane, głębokość max 12 metrów, w większości 8 metrów.",
    "Jest jeszcze jeden mniejszy, odrębny staw w którym jest 8 metrów głębokości.",
    "Wędkarz musi posiadać: matę karpiową, podbierak dużych rozmiarów, odkażacz oraz wyhaczacz.",
    "Białoryb powyżej 4 kg wraca do wody, poniżej istnieje możliwość zakupu ryby.",
    "Na łowisku będzie można łowić różnymi metodami, nie tylko karpiową.",
    "Możliwość zorganizowania zawodów.",
    "Na łowisku powstają wiaty. Możliwość rozpalenia grilla, ale tylko w wyznaczonych miejscach.",
    "Samochody powinny zostać w wyznaczonym miejscu, jednak za zgodą opiekuna oraz opłatą, mogą być na stanowisku.",
    "Nie jest wymagane posiadanie karty wędkarskiej.",
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Łowisko Stara Cegielnia</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://znajdzlowisko.pl/lowisko-stara-cegielnia/')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Facebook Łowisko Stara Cegielnia</Text>
        </TouchableOpacity>

        <Text style={styles.subtitle}>Województwo: Mazowieckie</Text>
        <Text style={styles.subtitle}>Miejscowość: Dąbrówka</Text>

        <Text style={styles.subtitle}>Regulamin łowiska:</Text>
        {regulations.map((rule, index) => (
          <View key={index} style={styles.infoBox}>
            <Text style={styles.infoText}>{rule}</Text>
          </View>
        ))}

        <TouchableOpacity
          onPress={() => navigation.navigate('Map', {
            initialLocation: { lat: 52.658, lng: 21.325 }, // Przykładowe współrzędne dla Dąbrówki
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
  contactTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 20,
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

export default Cegielnia;
