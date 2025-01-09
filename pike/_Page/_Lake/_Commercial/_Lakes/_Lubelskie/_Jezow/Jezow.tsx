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

type JezowProps = {
  navigation: NavigationProp<any, any>;
};

const Jezow: React.FC<JezowProps> = ({ navigation }) => {
  const regulations = [
    "Lowisko Jezow to swiezutkie lowisko, które zostało otwarte w 2021 roku.",
    "Akwen czynny przez cala dobe, przez caly rok.",
    "Na terenie lowiska znajduje sie piec zbiorników: staw z ryba drapiezna, duza ryba, feeder, staw z pstragiem oraz zbiornik mieszany.",
    "Lowisko oferuje mozliwosc wedkowania róznymi metodami: karpiowa, spinningowa, feederowa, splawikowa oraz method feeder.",
    "Na lowiskach karpiowych obowiazuje zasada 'no kill' (zlow i wypusc).",
    "W przypadku polowów na pstraga, jesli ryba nie bedzie nadawala sie do ponownego wypuszczenia, obowiazuje zakup ryby.",
    "Mozliwosc rozbicia namiotu.",
    "Lowisko nie zezwala na przyjazd z przyczepa campingowa.",
    "Na lowisku dostepne sa akcesoria do wedkowania, w tym maty, podbieraki karpiowe, haczyki z mikrozadziorem lub bezzadziorowe.",
    "Wedkarze zobowiazani sa do posiadania odpowiedniego sprzetu, w tym maty, podbieraka karpiowego oraz odkazacza.",
    "Na miejscu mozna zakupić pellety, zanety oraz kulki wedkarskie.",
    "Nie ma mozliwosci podjechania na stanowiska samochodem, ale dostepne sa taczki do transportu.",
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Lowisko Jezow</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://www.facebook.com/%C5%81owisko-Je%C5%BC%C3%B3w-105518438283538')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Facebook Lowisko Jezow</Text>
        </TouchableOpacity>

        <Text style={styles.subtitle}>Województwo: Lubelskie</Text>
        <Text style={styles.subtitle}>Miejscowosc: Jezow</Text>

        <Text style={styles.subtitle}>Regulamin lowiska:</Text>
        {regulations.map((rule, index) => (
          <View key={index} style={styles.infoBox}>
            <Text style={styles.infoText}>{rule}</Text>
          </View>
        ))}

        <TouchableOpacity
          onPress={() => navigation.navigate('Map', {
            initialLocation: { lat: 51.4161, lng: 19.1777 },
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
});

export default Jezow;
