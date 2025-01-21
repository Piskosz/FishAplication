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

type PieczarkiProps = {
  navigation: NavigationProp<any, any>;
};

const Pieczarki: React.FC<PieczarkiProps> = ({ navigation }) => {
  const regulations = [
    "Łowisko położone niedaleko Węgorzewa, Kętrzyna i Giżycka.",
    "Składa się z dwóch akwenów: stawu i jeziora Osiek.",
    "Staw o maksymalnej głębokości 4 m, dno twarde i jednolite.",
    "Brak roślinności podwodnej w stawie.",
    "Woda zawiera takie gatunki jak: szczupak (do 10 kg), okoń (do 1,5 kg), amur (do 7 kg), karp (do 10 kg), karaś, płoć, lin (do 3 kg).",
    "Można łowić wszystkimi konwencjonalnymi metodami.",
    "Dojazd do stanowisk łatwy, brak wyznaczonych miejsc, można usiąść wszędzie.",
    "Okazy powyżej 5 kg muszą bezwzględnie wrócić do wody.",
    "Możliwość rozbicia namiotu: tak.",
    "Noclegi: apartamenty dostępne w pobliżu stawu oraz jeziora.",
    "Spinning dozwolony.",
    "Możliwość łowienia w nocy: tak.",
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Łowisko Pieczarki</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://znajdzlowisko.pl/lowisko-pieczarki/')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Strona internetowa Łowiska Pieczarki</Text>
        </TouchableOpacity>

        <Text style={styles.subtitle}>Województwo: Warmińsko-Mazurskie</Text>
        <Text style={styles.subtitle}>Miejscowości: Pieczarki oraz Marszałki</Text>

        <Text style={styles.subtitle}>Dodatkowe informacje:</Text>
        {regulations.map((rule, index) => (
          <View key={index} style={styles.infoBox}>
            <Text style={styles.infoText}>{rule}</Text>
          </View>
        ))}

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Map', {
              initialLocation: { lat: 53.7985, lng: 21.7592 }, // Example coordinates for Pieczarki
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

export default Pieczarki;
