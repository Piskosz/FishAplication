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

type RelaxParkProps = {
  navigation: NavigationProp<any, any>;
};

const RelaxPark: React.FC<RelaxParkProps> = ({ navigation }) => {
  const regulations = [
    "Łowisko Relax Park znajduje się w miejscowości Turzak, województwo opolskie.",
    "Łowisko czynne od piątku do niedzieli oraz w święta i dni wolne.",
    "Otoczone lasem i polami.",
    "Możliwość wjazdu na stanowiska samochodem.",
    "Wędkarze obowiązuje limit połowów, wymiary ochronne oraz rejestr.",
    "Istnieje możliwość wykupienia licencji dziennej, kilkudniowej czy sezonowej.",
    "Możliwość łowienia w nocy dla osób z licencją roczną.",
    "Możliwość rozbicia namiotu.",
    "Możliwość przyjazdu z przyczepą campingową.",
    "Brak informacji o dostępnych noclegach."
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Łowisko Relax Park</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://www.lowisko-relax-park.pl/')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Strona Łowisko Relax Park</Text>
        </TouchableOpacity>

        <Text style={styles.subtitle}>Województwo: Opolskie</Text>
        <Text style={styles.subtitle}>Miejscowość: Turzak</Text>

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

export default RelaxPark;
