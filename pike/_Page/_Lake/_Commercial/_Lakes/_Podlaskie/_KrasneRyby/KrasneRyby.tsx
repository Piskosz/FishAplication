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

type KrasneRybyProps = {
  navigation: NavigationProp<any, any>;
};

const KrasneRyby: React.FC<KrasneRybyProps> = ({ navigation }) => {
  const regulations = [
    "Łowisko Krasne Ryby położone jest niedaleko takich miejscowości jak Białystok, Knyszyn i Czechowizna.",
    "Akwen czynny całą dobę.",
    "Nie jest wymagane posiadanie karty wędkarskiej.",
    "Na terenie znajduje się domek na wynajem oraz wiata ze stołem i ławeczkami.",
    "Możliwość łowienia w nocy.",
    "Możliwość rozbicia namiotu.",
    "Występujące gatunki ryb: Karp, Amur, Lin, Tołpyga, Okoń.",
    "Powierzchnia łowiska wynosi 0,5 ha.",
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Łowisko Krasne Ryby</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://znajdzlowisko.pl/lowisko-krasne-ryby/')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Strona internetowa Łowiska Krasne Ryby</Text>
        </TouchableOpacity>

        <Text style={styles.subtitle}>Województwo: Podlaskie</Text>
        <Text style={styles.subtitle}>Miejscowość: Kolonia Milewskie</Text>

        <Text style={styles.subtitle}>Dodatkowe informacje:</Text>
        {regulations.map((rule, index) => (
          <View key={index} style={styles.infoBox}>
            <Text style={styles.infoText}>{rule}</Text>
          </View>
        ))}

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Map', {
              initialLocation: { lat: 53.272, lng: 23.133 }, // Przykładowe współrzędne dla Kolonii Milewskie
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

export default KrasneRyby;
