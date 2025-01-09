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

type CzarDaFishingProps = {
  navigation: NavigationProp<any, any>;
};

const CzarDa: React.FC<CzarDaFishingProps> = ({ navigation }) => {
  const regulations = [
    "Łowisko CzarDa położone jest niedaleko miejscowości Miastko, Bytów. Od Słupska dzieli je 50 km, a od Gdańska 130 km.",
    "Powierzchnia łowiska: 3,13 ha, głębokość od 1 m do 5 m. Dno muliste, w niektórych miejscach porośnięte roślinnością.",
    "Dozwolone metody łowienia: spinning, spławik, grunt, feeder, method feeder, karpiowa.",
    "Na łowisku obowiązuje zasada 'no kill' dla karpia i lina, pozostałe gatunki można zabrać po wcześniejszym uzgodnieniu z właścicielem.",
    "Łowisko wyposażone w 3 pomosty oraz miejsca na brzegu.",
    "Możliwość rozbicia namiotu i przyjazdu z przyczepą campingową (dodatkowa opłata i wcześniejsze uzgodnienie).",
    "Wynajem przyczepy kempingowej, dostępna również z wyposażeniem: gazówka, lodówka, naczynia, prąd.",
    "Łowisko jest otoczone pięknymi lasami oraz łąką, gdzie można rozbić namiot lub przyjechać z przyczepą kempingową.",
    "Co roku łowisko jest systematycznie zarybiane.",
    "Na łowisku można złowić piękne liny, leszcze, płocie, karpie, a także szczupaki i okonie.",
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Łowisko CzarDa</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://znajdzlowisko.pl/lowisko-czarda/')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Strona internetowa Łowiska CzarDa</Text>
        </TouchableOpacity>

        <Text style={styles.subtitle}>Województwo: Pomorskie</Text>
        <Text style={styles.subtitle}>Miejscowość: Czarnkowo</Text>

        <Text style={styles.subtitle}>Dodatkowe informacje:</Text>
        {regulations.map((rule, index) => (
          <View key={index} style={styles.infoBox}>
            <Text style={styles.infoText}>{rule}</Text>
          </View>
        ))}

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Map', {
              initialLocation: { lat: 54.017, lng: 17.502 }, // Example coordinates for CzarDa
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

export default CzarDa;
