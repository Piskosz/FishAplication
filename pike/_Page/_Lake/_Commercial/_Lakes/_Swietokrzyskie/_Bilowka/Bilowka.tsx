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

type BilowkaProps = {
  navigation: NavigationProp<any, any>;
};

const Bilowka: React.FC<BilowkaProps> = ({ navigation }) => {
  const regulations = [
    "Łowisko Bilówka to zbiornik pokopalniany piasku.",
    "Staw czynny codziennie. Od maja do października możliwość połowów nocnych w weekendy (jednak trzeba to ustalić wcześniej z właścicielem zbiornika).",
    "Na łowisku znajduje się około 20 stanowisk wędkarskich.",
    "Wędkarz musi posiadać na łowisku i używać: podbierak karpiowy min. rozstaw ramion 80 cm, wyhaczacz, odkażacz, matę karpiową.",
    "Na łowisku znajduje się plaża dla dzieci, miejsce do rozpalenia grilla, ogrzewana altana, sklepik wędkarski.",
    "Możliwość zakupu złowionych ryb (ryby powyżej 3 kg wracają do wody).",
    "Dozwolone metody połowu: feeder, spławik, spinning, grunt, metoda karpiowa.",
    "Wędkarze nastawiający się na suma mają bezpłatną wejściówkę.",
    "Możliwość zakupu wędzonych ryb.",
    "Nie jest wymagane posiadanie karty wędkarskiej.",
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')} // Zaktualizuj ścieżkę do zdjęcia
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Łowisko Bilówka</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://znajdzlowisko.pl/lowisko-bilowka/')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Strona internetowa Łowiska Bilówka</Text>
        </TouchableOpacity>

        <Text style={styles.subtitle}>Województwo: Świętokrzyskie</Text>
        <Text style={styles.subtitle}>Miejscowość: Wólka Bodzechowska</Text>

        <Text style={styles.subtitle}>Dodatkowe informacje:</Text>
        {regulations.map((rule, index) => (
          <View key={index} style={styles.infoBox}>
            <Text style={styles.infoText}>{rule}</Text>
          </View>
        ))}

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Map', {
              initialLocation: { lat: 50.9640, lng: 21.6250 }, // Przykładowe współrzędne dla Bilówki
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

export default Bilowka;
