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

type JudzikiProps = {
  navigation: NavigationProp<any, any>;
};

const Judziki: React.FC<JudzikiProps> = ({ navigation }) => {
  const regulations = [
    "Łowisko położone niedaleko Ełku.",
    "Akwen czynny codziennie w godzinach 7:00-18:00.",
    "Możliwość nocnego wędkowania jedynie po wcześniejszym ustaleniu z właścicielem.",
    "Możliwość wędkowania następującymi metodami: spławik oraz grunt.",
    "Możliwość zakupu złowionych ryb.",
    "Nie jest wymagane posiadanie karty wędkarskiej.",
    "Możliwość przyjazdu z przyczepą campingową: nie.",
    "Brak noclegów w pobliżu.",
    "Spinning: brak danych.",
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Łowisko Judziki</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://znajdzlowisko.pl/lowisko-judziki/')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Strona internetowa Łowiska Judziki</Text>
        </TouchableOpacity>

        <Text style={styles.subtitle}>Województwo: Warmińsko-Mazurskie</Text>
        <Text style={styles.subtitle}>Miejscowość: Judziki</Text>

        <Text style={styles.subtitle}>Dodatkowe informacje:</Text>
        {regulations.map((rule, index) => (
          <View key={index} style={styles.infoBox}>
            <Text style={styles.infoText}>{rule}</Text>
          </View>
        ))}

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Map', {
              initialLocation: { lat: 53.7000, lng: 22.0000 }, // Przykładowe współrzędne dla Łowiska Judziki
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

export default Judziki;
