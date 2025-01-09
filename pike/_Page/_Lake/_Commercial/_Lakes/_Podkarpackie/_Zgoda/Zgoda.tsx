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

type ZgodaProps = {
  navigation: NavigationProp<any, any>; // Zmieniono 'any' na bardziej szczegółowy typ nawigacji w aplikacji
};

const Zgoda: React.FC<ZgodaProps> = ({ navigation }) => {
  const regulations = [
    "Łowisko Zgoda to ciche i spokojne miejsce, które jest istną gratką dla wędkarzy. Położone w pobliżu Zgody, oferuje doskonałe warunki do łowienia. Akwen o głębokości do 8m, z bogatym zarybieniem i malowniczym otoczeniem.",
    "W czystych wodach łowiska spotkamy różnorodne gatunki ryb: karp (do 15kg), amur, leszcz, lin, sum (do 2 metrów długości), sandacz, jesiotr (okazy około półtora metrowe), szczupak, tołpyga (ostatnia wyciągnięta sztuka ważyła 25kg) i inne.",
    "W naszej ofercie znajduje się również sklep wędkarski przy stawie, w którym wędkarze znajdą wszystkie potrzebne akcesoria.",
    "Łowisko czynne jest w okresie od 1 kwietnia do 31 listopada lub pierwszego lodu. Poza wyznaczonymi terminami obowiązuje całkowity zakaz wejścia na łowisko bez wiedzy właściciela.",
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Łowisko Zgoda</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://www.lowiskozgoda.pl/')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Strona Łowiska Zgoda</Text>
        </TouchableOpacity>

        <Text style={styles.subtitle}>Największa ryba: 25 kg tołpyga</Text>

        <Text style={styles.subtitle}>Regulamin łowiska:</Text>
        {regulations.map((rule, index) => (
          <View key={index} style={styles.infoBox}>
            <Text style={styles.infoText}>{rule}</Text>
          </View>
        ))}

        <Text style={styles.subtitle}>Adres: Zgoda 50B, 37-541 Zgoda</Text>

        <TouchableOpacity
          onPress={() => navigation.navigate('Map', {
            initialLocation: { lat: 49.791939, lng: 22.880383 },
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
    color: 'white',
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

export default Zgoda;
