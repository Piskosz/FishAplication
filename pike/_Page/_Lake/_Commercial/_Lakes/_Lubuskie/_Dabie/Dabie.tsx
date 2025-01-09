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

type DabieProps = {
  navigation: NavigationProp<any, any>;
};

const Dabie: React.FC<DabieProps> = ({ navigation }) => {
  const regulations = [
    "Łowisko Dąbie (Admar) czynne od 1.04 do połowy października (codziennie).",
    "Akwen w otoczeniu lasów oraz pól, na wodzie wyspy.",
    "Na łowisku dostępne pomosty dla wędkarzy.",
    "Możliwość zakupu ryb lub wypuszczenia ich ponownie do wody.",
    "Występujące gatunki ryb: Karp, Amur, Sum, Szczupak, Sandacz, Kleń, Leszcz, Płoć, Okoń, Węgorz, Lin.",
    "Na łowisku można wypożyczyć sprzęt wędkarski.",
    "Dla dzieci dostępne atrakcje: plac zabaw, kąpielisko, boisko, trampolina.",
    "Na terenie znajdują się miejsca na ognisko i możliwość rozpalenia grilla.",
    "Łowisko oferuje wynajem domków oraz smażalnię.",
    "Na łowisku realizowany jest Bon turystyczny.",
    "Nie jest wymagana karta wędkarska.",
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Łowisko Dąbie (Admar)</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://www.facebook.com/%C5%81owisko-rodzinne-Admar-305826872835993/')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Facebook Łowisko Dąbie</Text>
        </TouchableOpacity>

        <Text style={styles.subtitle}>Województwo: Lubelskie</Text>
        <Text style={styles.subtitle}>Miejscowość: Admar</Text>

        <Text style={styles.subtitle}>Regulamin łowiska:</Text>
        {regulations.map((rule, index) => (
          <View key={index} style={styles.infoBox}>
            <Text style={styles.infoText}>{rule}</Text>
          </View>
        ))}

        <TouchableOpacity
          onPress={() => navigation.navigate('Map', {
            initialLocation: { lat: 51.4161, lng: 19.1777 },
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

export default Dabie;
