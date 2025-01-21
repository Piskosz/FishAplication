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

type RytwianyProps = {
  navigation: NavigationProp<any, any>;
};

const Rytwiany: React.FC<RytwianyProps> = ({ navigation }) => {
  const regulations = [
    "Łowisko Rytwiany znajduje się na terenie stawów hodowlanych. Średnia głębokość stawów przeznaczonych do wędkowania wynosi 2 m, a maksymalna dochodzi do 5 m.",
    "Na łowisku od wędkarza wymagane jest posiadanie: haków bezzadziorowych, maty, podbieraka.",
    "Możliwość zakupu złowionych ryb.",
    "Łowisko nie wymaga posiadania karty wędkarskiej.",
    "Dozwolone metody połowu: spławik, grunt, spinning.",
    "Grill oraz ognisko dopuszczone jest jedynie w miejscach do tego wyznaczonych.",
    "Łowisko czynne od piątku do niedzieli.",
    "Istnieje możliwość noclegu - pokoje do wynajęcia.",
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')} // Zaktualizuj ścieżkę do zdjęcia
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Łowisko Rytwiany</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://znajdzlowisko.pl/lowisko-rytwiany/')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Strona internetowa Łowiska Rytwiany</Text>
        </TouchableOpacity>

        <Text style={styles.subtitle}>Województwo: Świętokrzyskie</Text>
        <Text style={styles.subtitle}>Miejscowość: Rytwiny</Text>

        <Text style={styles.subtitle}>Dodatkowe informacje:</Text>
        {regulations.map((rule, index) => (
          <View key={index} style={styles.infoBox}>
            <Text style={styles.infoText}>{rule}</Text>
          </View>
        ))}

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Map', {
              initialLocation: { lat: 50.4971, lng: 21.4270 }, // Przykładowe współrzędne dla Rytwian
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

export default Rytwiany;
