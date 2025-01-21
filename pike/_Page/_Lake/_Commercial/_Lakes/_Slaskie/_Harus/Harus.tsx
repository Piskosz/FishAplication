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

const Harus: React.FC<HarusFishingProps> = ({ navigation }) => {
  const regulations = [
    "Łowisko Haruś położone jest w miejscowości Pszczyna, województwo Śląskie.",
    "Powierzchnia łowiska: brak danych.",
    "Dozwolone metody łowienia: gruntowa, spławikowa, spinningowa (po wcześniejszym uzgodnieniu z właścicielem).",
    "Możliwość łowienia w nocy (po wcześniejszej konsultacji z właścicielem).",
    "Na łowisku obowiązuje zasada 'no kill' dla ryb powyżej 60 cm, które muszą wrócić do wody.",
    "Łowisko wyposażone w toalety oraz ławeczki.",
    "Możliwość zakupu złowionych ryb.",
    "Haczyki muszą być z mikrozadziorem lub bezzadzirowe.",
    "Nie jest wymagane posiadanie karty wędkarskiej.",
    "Kontakt: tel. 535 727 557.",
    "Więcej informacji dostępnych na stronie: www.facebook.com/Łowisko-Haruś-100776532139375.",
    "Na łowisku można złowić: Karp, Amur, Lin, Okoń, Pstrąg, Szczupak, Sandacz, Sum, Kleń.",
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Łowisko Haruś</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://znajdzlowisko.pl/lowisko-harus/')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Strona internetowa Łowiska Haruś</Text>
        </TouchableOpacity>

        <Text style={styles.subtitle}>Województwo: Śląskie</Text>
        <Text style={styles.subtitle}>Miejscowość: Pszczyna</Text>

        <Text style={styles.subtitle}>Dodatkowe informacje:</Text>
        {regulations.map((rule, index) => (
          <View key={index} style={styles.infoBox}>
            <Text style={styles.infoText}>{rule}</Text>
          </View>
        ))}

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Map', {
              initialLocation: { lat: 49.9703, lng: 18.9464 }, // Example coordinates for Haruś
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

export default Harus;
