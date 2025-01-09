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

type LowiskoProps = {
  navigation: NavigationProp<any, any>;
};

const LowiskoGrzesia: React.FC<LowiskoProps> = ({ navigation }) => {
  const regulations = [
    "Łowisko u Grzesia położone jest niedaleko Suwałk.",
    "Czynne całodobowo w weekendy (od piątku do niedzieli). W pozostałe dni tygodnia po wcześniejszym kontakcie telefonicznym.",
    "Dozwolone metody połowu: spławikowa i gruntowa.",
    "Wskazane jest posiadanie oraz używanie maty, odkażacza, wyhaczacza i podbieraka.",
    "Ognisko może być rozpalane jedynie w miejscu do tego wyznaczonym po wcześniejszym poinformowaniu opiekuna łowiska.",
    "Możliwość zakupu złowionych ryb zgodnie z obowiązującym cennikiem.",
    "Nie jest wymagane posiadanie karty wędkarskiej.",
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Łowisko u Grzesia</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://znajdzlowisko.pl/lowisko-u-grzesia/')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Strona internetowa Łowiska u Grzesia</Text>
        </TouchableOpacity>

        <Text style={styles.subtitle}>Województwo: Podlaskie</Text>
        <Text style={styles.subtitle}>Miejscowość: Marianka k/Wiżajn</Text>

        <Text style={styles.subtitle}>Dodatkowe informacje:</Text>
        {regulations.map((rule, index) => (
          <View key={index} style={styles.infoBox}>
            <Text style={styles.infoText}>{rule}</Text>
          </View>
        ))}

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Map', {
              initialLocation: { lat: 54.35, lng: 22.9 }, // Współrzędne dla Marianka k/Wiżajn
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

export default LowiskoGrzesia;
