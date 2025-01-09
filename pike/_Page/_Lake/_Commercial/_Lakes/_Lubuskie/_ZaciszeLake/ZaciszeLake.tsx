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

type ZaciszeLakeProps = {
  navigation: NavigationProp<any, any>;
};

const ZaciszeLake: React.FC<ZaciszeLakeProps> = ({ navigation }) => {
  const regulations = [
    "Łowisko „Zacisze Lgiń” czynne od 01.07.2023.",
    "Łowisko znajduje się w miejscowości Lgiń, województwo Lubuskie.",
    "Występujące gatunki ryb: Karp, Amur, Szczupak, Płoć.",
    "Powierzchnia łowiska: 2 ha.",
    "Łowisko czynne od poniedziałku do piątku w godzinach 7:00 - 19:00, a w weekendy oraz święta całą dobę.",
    "Na łowisku obowiązuje zasada „no kill” (złów i wypuść) dla wszystkich gatunków ryb.",
    "Na łowisku dostępnych jest 30 stanowisk wędkarskich.",
    "Wędkarze muszą posiadać: podbierak o rozstawie ramion ~ 1 metr, kołyskę karpiową, odkażacz, worek karpiowy typu sling, żyłkę o średnicy min. 0,30 mm.",
    "Możliwość wywózki modelami RC.",
    "Palenie ogniska tylko w miejscach do tego wyznaczonych.",
    "Teren jest monitorowany i ogrodzony.",
    "Rekord łowiska: 17,80 kg.",
    "Możliwość podłączenia do prądu (dodatkowo płatne).",
    "Możliwość wynajęcia całości wody pod zawody lub inne imprezy wędkarskie.",
    "Nie jest wymagane posiadanie karty wędkarskiej.",
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Łowisko „Zacisze Lgiń”</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://lowiskozacisze.pl')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Strona internetowa Łowisko Zacisze Lgiń</Text>
        </TouchableOpacity>

        <Text style={styles.subtitle}>Województwo: Lubuskie</Text>
        <Text style={styles.subtitle}>Miejscowość: Lgiń</Text>

        <Text style={styles.subtitle}>Regulamin łowiska:</Text>
        {regulations.map((rule, index) => (
          <View key={index} style={styles.infoBox}>
            <Text style={styles.infoText}>{rule}</Text>
          </View>
        ))}

        <TouchableOpacity
          onPress={() => navigation.navigate('Map', {
            initialLocation: { lat: 51.8100, lng: 15.6683 },
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

export default ZaciszeLake;
