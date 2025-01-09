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

type StarySanProps = {
  navigation: NavigationProp<any, any>; // Zmieniono 'any' na bardziej szczegółowy typ nawigacji w aplikacji
};

const StarySan = ({ navigation }) => {
  const regulations = [
    "Łowisko Stary San jest starorzeczem Sanu o powierzchni 20ha. Głębokość łowiska zmienia się od 1m przy trzcinach w części północnej do 4m w części południowej przy grobli. Na dnie zalega niewielka warstwa mułu, brzegi czyste, z dogodnym dojściem do wody. Zbiornik ma prostą linię brzegową. Na obu końcach łowiska znajdują się wyłączone z wędkowania zatoczki, w których ryby mogą odpocząć i odbyć tarło.",
    "W łowisku występuje liczna populacja lina, karasia, tołpygi, karpia (przedział wagowy 4-15 kg) i amura. Wędkarz wybierający się na spinning może liczyć na duże okonie i szczupaki dochodzące do 115cm.",
    "Łowisko czynne jest w okresie od 1 kwietnia do 31 listopada lub pierwszego lodu. Poza wyznaczonymi terminami obowiązuje całkowity zakaz wejścia na łowisko bez wiedzy właściciela.",
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Łowisko Stary San</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://hurko.pl/index.html')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Strona Łowiska Stary San</Text>
        </TouchableOpacity>

        <Text style={styles.subtitle}>Największa ryba: 15 kg karp</Text>

        <Text style={styles.subtitle}>Regulamin łowiska:</Text>
        {regulations.map((rule, index) => (
          <View key={index} style={styles.infoBox}>
            <Text style={styles.infoText}>{rule}</Text>
          </View>
        ))}

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

export default StarySan;
