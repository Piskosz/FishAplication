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

type SokolowProps = {
  navigation: NavigationProp<any, any>;
};

const Sokolow: React.FC<SokolowProps> = ({ navigation }) => {
  const regulations = [
    "Łowisko u Sokołów czynne przez cały rok.",
    "Łowisko znajduje się w miejscowości Kąck, województwo Mazowieckie.",
    "Występujące gatunki ryb: Karp, Lin, Karaś, Amur, Jesiotr.",
    "Powierzchnia łowiska: 2,5 ha.",
    "Łowisko składa się z dwóch stawów wędkarskich.",
    "Na łowisku wyznaczono 44 stanowiska (14 feederowo-spławikowych oraz 30 feederowych).",
    "Możliwość łowienia w nocy po wcześniejszym umówieniu.",
    "Na łowisku dostępne są WC, prysznic i prąd.",
    "Rekordy zbiornika to karp 15 kg oraz amur 15.5 kg.",
    "Na terenie znajduje się sklepik wędkarski oraz lodówka z napojami.",
    "Teren ogrodzony, monitorowany i oświetlony w nocy.",
    "Nie jest wymagana karta wędkarska.",
    "Dozwolone metody połowu: spławik, feeder, metoda karpiowa, method feeder.",
    "Wprowadzono karnet antyinflacyjny w 2023 roku.",
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Łowisko u Sokołów</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://znajdzlowisko.pl/lowisko-u-sokolow-mazowieckie/')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Strona internetowa Łowisko u Sokołów</Text>
        </TouchableOpacity>

        <Text style={styles.subtitle}>Województwo: Mazowieckie</Text>
        <Text style={styles.subtitle}>Miejscowość: Kąck</Text>

        <Text style={styles.subtitle}>Regulamin łowiska:</Text>
        {regulations.map((rule, index) => (
          <View key={index} style={styles.infoBox}>
            <Text style={styles.infoText}>{rule}</Text>
          </View>
        ))}

        <TouchableOpacity
          onPress={() => navigation.navigate('Map', {
            initialLocation: { lat: 52.122, lng: 21.409 }, // Współrzędne dla Kącka
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

export default Sokolow;
