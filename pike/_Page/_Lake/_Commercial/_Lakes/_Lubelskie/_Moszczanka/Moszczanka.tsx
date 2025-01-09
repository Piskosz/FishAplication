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

type MoszczankaProps = {
  navigation: NavigationProp<any, any>;
};

const Moszczanka: React.FC<MoszczankaProps> = ({ navigation }) => {
  const regulations = [
    "Łowisko Moszczanka położone jest niedaleko takich miejscowości jak: Ryki, Dęblin.",
    "Łowisko czynne jest od piątku do niedzieli w godzinach 6:00-21:00 oraz od 1 kwietnia do końca października po wcześniejszym uzgodnieniu.",
    "Możliwość wędkowania następującymi metodami: spławikową, gruntową, spinningową.",
    "Obowiązuje zasada 'no kill' (złów i wypuść) na rybach takich jak: okoń, jesiotr, karaś złocisty, lin. Pozostałe gatunki mają wymiary ochronne.",
    "Nie można zabierać ryb powyżej 3 kg.",
    "Na łowisku obowiązuje zakaz przyjazdu z przyczepą campingową.",
    "Wędkarze muszą posiadać długi podbierak, haki i kotwice bezzadziorowe, matę oraz odkażacz.",
    "Na łowisku istnieje możliwość odpłatnego skorzystania z prądu, rezerwacji stanowiska oraz rozbicia namiotu.",
    "Karta wędkarska nie jest wymagana.",
    "Obiekt monitorowany całodobowo.",
    "Możliwość łowienia w nocy po wcześniejszym uzgodnieniu.",
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Lowisko Moszczanka</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://znajdzlowisko.pl/lowisko-moszczanka/')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Facebook Lowisko Moszczanka</Text>
        </TouchableOpacity>

        <Text style={styles.subtitle}>Województwo: Lubelskie</Text>
        <Text style={styles.subtitle}>Miejscowość: Moszczanka</Text>

        <Text style={styles.subtitle}>Regulamin łowiska:</Text>
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

export default Moszczanka;
