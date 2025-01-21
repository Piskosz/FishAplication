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

type PstragalProps = {
  navigation: NavigationProp<any, any>;
};

const Pstragal: React.FC<PstragalProps> = ({ navigation }) => {
  const regulations = [
    "Łowisko Pstrągal położone jest w województwie Świętokrzyskim, w miejscowości Ostrowiec Świętokrzyski.",
    "Występujące gatunki ryb: Karp, Amur, Jesiotr, Lin, Karaś, Sum, Szczupak, Pstrąg, Leszcz, Płoć, Okoń, Węgorz, Wzdręga, Sandacz.",
    "Powierzchnia: 4 ha.",
    "Możliwość łowienia w nocy: Tak.",
    "Możliwość rozbicia namiotu: Tak.",
    "Łowisko bez wymogu posiadania karty wędkarskiej.",
    "Spinning dozwolony.",
    "Możliwość wypożyczenia sprzętu wędkarskiego.",
    "Palenie ognisk tylko w wyznaczonych miejscach.",
    "Rekordy: karp powyżej 20 kg, amur 24,8 kg.",
    "Zakaz połowu na żywca i martwą rybkę.",
    "Łowisko otoczone drzewami, z maksymalną głębokością 3,5 m.",
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')} // Zaktualizuj ścieżkę do zdjęcia
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Łowisko Pstrągal</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://znajdzlowisko.pl/lowisko-pstragal/')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Strona internetowa Łowiska Pstrągal</Text>
        </TouchableOpacity>

        <Text style={styles.subtitle}>Województwo: Świętokrzyskie</Text>
        <Text style={styles.subtitle}>Miejscowość: Ostrowiec Świętokrzyski</Text>

        <Text style={styles.subtitle}>Dodatkowe informacje:</Text>
        {regulations.map((rule, index) => (
          <View key={index} style={styles.infoBox}>
            <Text style={styles.infoText}>{rule}</Text>
          </View>
        ))}

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Map', {
              initialLocation: { lat: 50.9540, lng: 21.4160 }, // Przykładowe współrzędne dla Pstrągala
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

export default Pstragal;
