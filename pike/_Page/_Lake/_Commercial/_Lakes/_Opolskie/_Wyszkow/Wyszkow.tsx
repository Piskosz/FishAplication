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

type WyszkowProps = {
  navigation: NavigationProp<any, any>;
};

const Wyszkow: React.FC<WyszkowProps> = ({ navigation }) => {
  const regulations = [
    "Łowisko Wyszków położone jest niedaleko takich miejscowości jak Nysa, Korfantów.",
    "Akwen do dyspozycji wędkarzy cały rok. Położony jest wśród pól, drzew i stawów.",
    "Głębokość na stanowiskach od 1 do 6 wynosi maksymalnie 3,7 m, a na stanowiskach 7-8 dochodzi do 5 m.",
    "Dno urozmaicone - są górki, wypłycenia, spadki.",
    "Na łowisku obowiązuje zasada 'no kill' (złów i wypuść) dla wszystkich gatunków ryb.",
    "Dozwoloną metodą połowu jest grunt (metoda karpiowa i method feeder), po uzgodnieniu również spinning.",
    "Zakaz połowów na martwą czy żywą rybkę.",
    "Wędkarze muszą posiadać odkażacz, podbierak (min. 70 cm), matę z bokami (min. 100 cm) i żyłki o średnicy min. 0,33 mm.",
    "Zakaz stosowania produktów odzwierzęcych oraz surowych ziaren.",
    "Na łowisku dostępnych jest 8 stanowisk dwuosobowych z szerokimi pomostami.",
    "Możliwość używania modeli RC czy pontonów do wywózki i holu ryby w obrębie stanowiska.",
    "Akwen wymaga telefonicznej rezerwacji stanowiska.",
    "Możliwość podjazdu i parkowania na stanowisku.",
    "Nie jest wymagane posiadanie karty wędkarskiej."
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Łowisko Wyszków</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://www.facebook.com/lowiskowyszkow')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Facebook Łowisko Wyszków</Text>
        </TouchableOpacity>

        <Text style={styles.subtitle}>Województwo: Opolskie</Text>
        <Text style={styles.subtitle}>Miejscowość: Wyszków Śląski</Text>

        <Text style={styles.subtitle}>Regulamin łowiska:</Text>
        {regulations.map((rule, index) => (
          <View key={index} style={styles.infoBox}>
            <Text style={styles.infoText}>{rule}</Text>
          </View>
        ))}

        <TouchableOpacity
          onPress={() => navigation.navigate('Map', {
            initialLocation: { lat: 50.4661, lng: 17.6177 },
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

export default Wyszkow;
