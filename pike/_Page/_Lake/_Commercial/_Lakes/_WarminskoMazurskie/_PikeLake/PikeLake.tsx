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

type PikeLakeProps = {
  navigation: NavigationProp<any, any>;
};

const PikeLake: React.FC<PikeLakeProps> = ({ navigation }) => {
  const regulations = [
    "Akwen położony niedaleko Giżycka.",
    "Łowisko szczupakowe.",
    "Łowisko maksymalnie do 3,8 m głębokości.",
    "Dno mało urozmaicone, a linia brzegowa słabo rozwinięta.",
    "Jezioro użytkowane jedynie pod połowy wędkarskie.",
    "Wędkowanie jedynie z łodzi właściciela.",
    "Spinning dozwolony.",
    "Możliwość rozbicia namiotu: tak.",
    "Możliwość przyjazdu z przyczepą campingową: tak.",
    "Noclegi dostępne w ośrodku obok łowiska.",
    "Możliwość łowienia w nocy: nie.",
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Łowisko Szczupaka Dziewiszewo</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://znajdzlowisko.pl/lowisko-szczupaka-dziewiszewo-mazury/')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Strona internetowa Łowiska Szczupaka Dziewiszewo</Text>
        </TouchableOpacity>

        <Text style={styles.subtitle}>Województwo: Warmińsko-Mazurskie</Text>
        <Text style={styles.subtitle}>Miejscowość: Dziewiszewo</Text>

        <Text style={styles.subtitle}>Dodatkowe informacje:</Text>
        {regulations.map((rule, index) => (
          <View key={index} style={styles.infoBox}>
            <Text style={styles.infoText}>{rule}</Text>
          </View>
        ))}

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Map', {
              initialLocation: { lat: 53.7910, lng: 21.7450 }, // Example coordinates for Pike Lake
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

export default PikeLake;
