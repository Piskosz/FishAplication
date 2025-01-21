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

type PraszczykiFishingProps = {
  navigation: NavigationProp<any, any>;
};

const Praszczyki: React.FC<PraszczykiFishingProps> = ({ navigation }) => {
  const regulations = [
    "Łowisko Praszczyki położone jest niedaleko miejscowości Praszczyki.",
    "Powierzchnia łowiska: 1,3 ha.",
    "Dozwolone metody łowienia: spinning, grunt, feeder, karpiowa.",
    "Możliwość łowienia w nocy.",
    "Na łowisku obowiązuje zasada 'no kill' dla karpia i lina, pozostałe gatunki można zabrać po wcześniejszym uzgodnieniu z właścicielem.",
    "Łowisko wyposażone w odpowiednie miejsca na brzegu.",
    "Możliwość rozbicia namiotu oraz przyjazdu z przyczepą campingową.",
    "Kontakt: tel. 533 447 983.",
    "Więcej informacji dostępnych na stronie: www.facebook.com/profile.php?id=100092339380021.",
    "Na łowisku można złowić: Karp, Jesiotr, Amur, Lin, Karaś, Płoć, Węgorz, Szczupak, Okoń, Sandacz.",
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Łowisko Praszczyki</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://znajdzlowisko.pl/lowisko-praszczyki/')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Strona internetowa Łowiska Praszczyki</Text>
        </TouchableOpacity>

        <Text style={styles.subtitle}>Województwo: Pomorskie</Text>
        <Text style={styles.subtitle}>Miejscowość: Praszczyki</Text>

        <Text style={styles.subtitle}>Dodatkowe informacje:</Text>
        {regulations.map((rule, index) => (
          <View key={index} style={styles.infoBox}>
            <Text style={styles.infoText}>{rule}</Text>
          </View>
        ))}

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Map', {
              initialLocation: { lat: 54.017, lng: 17.502 }, // Example coordinates for Praszczyki
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

export default Praszczyki;
