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

type FishZoneProps = {
  navigation: NavigationProp<any, any>;
};

const FishZone: React.FC<FishZoneProps> = ({ navigation }) => {
  const regulations = [
    "Łowisko „Fish Zone” czynne przez całą dobę.",
    "Łowisko znajduje się w miejscowości Bobrowniki Wielkie, województwo Małopolskie.",
    "Występujące gatunki ryb: Karp, Amur, Karaś, Szczupak, Sandacz, Sum, Jesiotr.",
    "Powierzchnia łowiska: 5,6 ha.",
    "Łowisko czynne przez całą dobę, z możliwością łowienia w nocy.",
    "Na łowisku obowiązuje zasada „no kill” (złów i wypuść) dla wszystkich gatunków ryb.",
    "Łowisko udostępnia 6 dwuosobowych stanowisk wędkarzom.",
    "Wędkarze muszą posiadać: matę karpiową typu wanienka lub kołyski, podbierak o rozstawie ramion ~1 metr, żyłkę o średnicy min. 0,30 mm, strzałówki, haki z mikrozadziorem lub bezzadziorowe o rozmiarze od 1 do 4, oraz odkażacz.",
    "Na łowisku występują karpie 20+.",
    "Możliwość rozbicia namiotu i przyjazdu z przyczepą campingową (po wcześniejszym ustaleniu).",
    "Zakaz nęcenia surowymi ziarnami, można gotowanymi.",
    "Możliwość rezerwacji online.",
    "Możliwość połowów metodą gruntową lub ZIG RIG.",
    "Palenie ognisk tylko w wyznaczonych miejscach.",
    "Rezerwacja na minimum dwie doby. Wymagany wcześniejszy kontakt telefoniczny.",
    "Kontakt: tel. 693 082 804 lub 603 325 943.",
    "Facebook: www.facebook.com/FishZoneNoKill.",
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Łowisko „Fish Zone”</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://znajdzlowisko.pl/lowisko-fish-zone')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Strona internetowa Łowisko Fish Zone</Text>
        </TouchableOpacity>

        <Text style={styles.subtitle}>Województwo: Małopolskie</Text>
        <Text style={styles.subtitle}>Miejscowość: Bobrowniki Wielkie</Text>

        <Text style={styles.subtitle}>Regulamin łowiska:</Text>
        {regulations.map((rule, index) => (
          <View key={index} style={styles.infoBox}>
            <Text style={styles.infoText}>{rule}</Text>
          </View>
        ))}

        <TouchableOpacity
          onPress={() => navigation.navigate('Map', {
            initialLocation: { lat: 50.0175, lng: 19.3181 }, // Współrzędne dla Bobrownik Wielkich
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

export default FishZone;
