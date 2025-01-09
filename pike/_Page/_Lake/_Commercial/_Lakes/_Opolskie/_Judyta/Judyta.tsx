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

type JudytaProps = {
  navigation: NavigationProp<any, any>;
};

const Judyta: React.FC<JudytaProps> = ({ navigation }) => {
  const regulations = [
    "Łowisko komercyjne 'Judyta' znajduje się niedaleko miejscowości Nysa, Niemodlin, Krapkowice, Lubrza.",
    "Akwen czynny codziennie przez całą dobę.",
    "Stanowiska wędkarskie usytuowane są wzdłuż linii brzegowej liczącej 800 m.",
    "Średnia głębokość w zbiorniku wynosi 2,5 m.",
    "Możliwość połowu z łódek RC.",
    "Dozwolonymi metodami połowu są: spławik, grunt, feeder, metoda karpiowa.",
    "Wędkarze muszą posiadać matę, duży podbierak, odkażacz.",
    "Możliwość zakupu złowionych ryb, jednak obowiązują wymiary ochronne dla poszczególnych gatunków ryb.",
    "Na terenie istnieje możliwość wynajmu domków.",
    "Łowisko prowadzi sprzedaż karnetów jednodniowych oraz rocznych.",
    "Nie jest wymagane posiadanie kary wędkarskiej."
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Łowisko Komercyjne "Judyta"</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://www.lowisko-judyta.pl/')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Strona Łowisko Judyta</Text>
        </TouchableOpacity>

        <Text style={styles.subtitle}>Województwo: Opolskie</Text>
        <Text style={styles.subtitle}>Miejscowość: Korfantów</Text>


        <Text style={styles.subtitle}>Dodatkowe informacje:</Text>
        {regulations.map((rule, index) => (
          <View key={index} style={styles.infoBox}>
            <Text style={styles.infoText}>{rule}</Text>
          </View>
        ))}

        <TouchableOpacity
          onPress={() => navigation.navigate('Map', {
            initialLocation: { lat: 50.468, lng: 17.549 },
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

export default Judyta;
