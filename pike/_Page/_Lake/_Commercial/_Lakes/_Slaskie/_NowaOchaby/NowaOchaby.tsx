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

type HarusFishingProps = {
  navigation: NavigationProp<any, any>;
};

const NowaOchaby: React.FC<HarusFishingProps> = ({ navigation }) => {
  const regulations = [
    "Łowisko Nowa Ochaby położone jest w miejscowości Ochaby, województwo Śląskie.",
    "Powierzchnia łowiska: 6 ha.",
    "Dozwolone metody łowienia: gruntowa, spławikowa (zakaz spinningu).",
    "Zasada 'no kill' - ryby muszą wrócić do wody.",
    "Na łowisku obowiązuje zakaz łowienia na spinning.",
    "Możliwość rozpalenia grilla, ognisko tylko w wyznaczonych miejscach.",
    "Wymagana żyłka min. 0,3 mm, podbierak o rozstawie ramion minimum 0,8 m, mata do ryb.",
    "Największy karp złowiony w 2022 roku ważył 19 kg.",
    "Możliwość wynajęcia domku.",
    "Kontakt: tel. 533 340 181.",
    "Więcej informacji dostępnych na stronie: www.facebook.com/Łowisko-NOWA-102618608666195.",
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Łowisko Nowa Ochaby</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://znajdzlowisko.pl/lowisko-nowa-ochaby/')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Strona internetowa Łowiska Nowa Ochaby</Text>
        </TouchableOpacity>

        <Text style={styles.subtitle}>Województwo: Śląskie</Text>
        <Text style={styles.subtitle}>Miejscowość: Ochaby</Text>

        <Text style={styles.subtitle}>Dodatkowe informacje:</Text>
        {regulations.map((rule, index) => (
          <View key={index} style={styles.infoBox}>
            <Text style={styles.infoText}>{rule}</Text>
          </View>
        ))}

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Map', {
              initialLocation: { lat: 49.9703, lng: 18.9464 }, // Example coordinates for Nowa Ochaby
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

export default NowaOchaby;
