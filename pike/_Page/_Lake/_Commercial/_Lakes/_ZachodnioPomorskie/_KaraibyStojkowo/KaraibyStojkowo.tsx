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

type LowiskoKaraibyStojkowoProps = {
  navigation: NavigationProp<any, any>;
};

const KaraibyStojkowo: React.FC<LowiskoKaraibyStojkowoProps> = ({ navigation }) => {
  const regulations = [
    "Łowisko Karaiby Stojkowo znajduje się w pobliżu Kołobrzegu czy Ustroni Morskich.",
    "Składa się z dwóch zbiorników. Czynne 24 h/dobę, 7 dni w tygodniu.",
    "Przyjazd na łowisko możliwy tylko po wcześniejszej rezerwacji telefonicznej.",
    "Dopuszczalne metody połowu: spinning, grunt, spławik oraz na tzw. „żywca”.",
    "Istnieje możliwość zakupu złowionych ryb (po uzgodnieniu z opiekunami łowiska).",
    "Do dyspozycji wędkarzy: prąd, miejsce do biwakowania.",
    "Możliwość wynajęcia całego łowiska.",
    "Nie jest wymagana karta wędkarska.",
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Łowisko Karaiby Stojkowo</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://znajdzlowisko.pl/lowisko-karaiby-stojkowo/')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Strona internetowa Łowiska Karaiby Stojkowo</Text>
        </TouchableOpacity>

        <Text style={styles.subtitle}>Województwo: Zachodniopomorskie</Text>
        <Text style={styles.subtitle}>Miejscowość: Stojkowo/Dygowo</Text>


        <Text style={styles.subtitle}>Dodatkowe informacje:</Text>
        {regulations.map((rule, index) => (
          <View key={index} style={styles.infoBox}>
            <Text style={styles.infoText}>{rule}</Text>
          </View>
        ))}

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Map', {
              initialLocation: { lat: 54.050, lng: 15.550 }, // Przykładowe współrzędne dla Łowiska Karaiby Stojkowo
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

export default KaraibyStojkowo;
