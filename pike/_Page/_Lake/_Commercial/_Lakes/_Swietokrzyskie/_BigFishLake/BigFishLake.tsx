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

type BigFishLakeProps = {
  navigation: NavigationProp<any, any>;
};

const BigFishLake: React.FC<BigFishLakeProps> = ({ navigation }) => {
  const regulations = [
    "Łowisko Big Fish Lake położone jest niedaleko Pacanowa, Buska-Zdroju, Chmielnika, Kielc, Opatowa, Sandomierza i Tarnobrzega.",
    "Oficjalne otwarcie nastąpi 1 kwietnia 2024 roku.",
    "Dno piaszczyste, z niewielką ilością mułu. Urozmaicone z wyspami oraz półwyspami.",
    "15 dwuosobowych stanowisk wędkarskich. Każde stanowisko wyposażone w matę, podbierak karpiowy i worek karpiowy.",
    "Minimalny czas pobytu to jedna doba.",
    "Zasada 'no kill' - złów i wypuść dla wszystkich gatunków ryb.",
    "Dozwolone metody połowu: grunt, method feeder, zig-rig, karpiowa.",
    "Zakaz spinningu, połowu na żywca i martwą rybkę.",
    "Możliwość wynajmu łodzi i zakupu pelletu lub gotowanej kukurydzy.",
    "Całkowity zakaz rozpalania ognisk.",
    "Rekord łowiska: karp 19,4 kg, amur 24,8 kg.",
    "Teren ogrodzony i monitorowany.",
    "Brak wymogu posiadania karty wędkarskiej.",
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Łowisko Big Fish Lake</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://znajdzlowisko.pl/lowisko-big-fish-lake/')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Strona internetowa Łowiska Big Fish Lake</Text>
        </TouchableOpacity>

        <Text style={styles.subtitle}>Województwo: Świętokrzyskie</Text>
        <Text style={styles.subtitle}>Miejscowość: Bosowice</Text>

        <Text style={styles.subtitle}>Dodatkowe informacje:</Text>
        {regulations.map((rule, index) => (
          <View key={index} style={styles.infoBox}>
            <Text style={styles.infoText}>{rule}</Text>
          </View>
        ))}

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Map', {
              initialLocation: { lat: 50.2870, lng: 21.2420 }, // Example coordinates for Big Fish Lake
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

export default BigFishLake;
