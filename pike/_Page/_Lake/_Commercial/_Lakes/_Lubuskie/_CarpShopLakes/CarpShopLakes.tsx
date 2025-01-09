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

type CarpShopLakesProps = {
  navigation: NavigationProp<any, any>;
};

const CarpShopLakes: React.FC<CarpShopLakesProps> = ({ navigation }) => {
  const regulations = [
    "Łowisko CarpShop Lakes czynne przez cały rok.",
    "Łowisko składa się z dwóch zbiorników: większy (1,5 ha) i mniejszy (0,7 ha).",
    "Obowiązuje metoda karpiowa na większym zbiorniku, a na mniejszym można łowić na method feeder lub spławik.",
    "Łowisko oferuje 4 stanowiska na większym zbiorniku i 1 stanowisko na mniejszym.",
    "Woda otoczona jest drzewami, co daje cień nawet w upalne dni.",
    "Na wodzie znajdują się dwa półwyspy, sześć wysp i trzy zatoki.",
    "Na większym zbiorniku dostępne są dwa klimatyzowane domki (4-osobowy i 6-osobowy).",
    "Na mniejszym zbiorniku znajduje się camping z przyczepą, z dostępem do prądu.",
    "Wynajem sprzętu wędkarskiego w cenie: kołyska, podbierak, łódka, ponton, stojak do ważenia.",
    "Możliwość podglądania fauny za pomocą kamer podwodnych.",
    "Należy rezerwować pobyt, wynajem całego łowiska również możliwy.",
    "Nie jest wymagana karta wędkarska.",
    "Możliwość łowienia w nocy.",
    "Możliwość rozbicia namiotu oraz przyjazdu z przyczepą campingową.",
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Łowisko CarpShop Lakes</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://www.facebook.com/PatlewiczFishFarm')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Facebook Łowisko CarpShop Lakes</Text>
        </TouchableOpacity>

        <Text style={styles.subtitle}>Województwo: Lubuskie</Text>
        <Text style={styles.subtitle}>Miejscowość: Nowa Sól</Text>

        <Text style={styles.subtitle}>Regulamin łowiska:</Text>
        {regulations.map((rule, index) => (
          <View key={index} style={styles.infoBox}>
            <Text style={styles.infoText}>{rule}</Text>
          </View>
        ))}

        <TouchableOpacity
          onPress={() => navigation.navigate('Map', {
            initialLocation: { lat: 51.7644, lng: 15.5833 },
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

export default CarpShopLakes;
