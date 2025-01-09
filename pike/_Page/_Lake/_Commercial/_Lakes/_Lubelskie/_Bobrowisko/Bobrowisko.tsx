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

type BobrowiskoProps = {
  navigation: NavigationProp<any, any>;
};

const Bobrowisko: React.FC<BobrowiskoProps> = ({ navigation }) => {
  const regulations = [
    "Łowisko Bobrowisko zostało udostępnione do wędkowania w okolicy Krasnegostawu oraz Chełmu.",
    "Akwen czynny przez całą dobę, przez cały rok.",
    "Na terenie łowiska znajduje się kilka stawów: pstrągowy, spinningowy oraz karpiowy.",
    "Łowisko oferuje wynajem domków i altanek.",
    "Na zbiorniku karpiowym o powierzchni 3,5 ha można złowić karpie do 20 kg.",
    "Zbiornik spinningowy o powierzchni 2,5 ha z szczupakami ponad metr i okoniami do 50 cm.",
    "Zbiornik pstrągowy oferuje świetne warunki do połowu pstrągów.",
    "Możliwość rezerwacji telefonicznej.",
    "Nie jest wymagana karta wędkarska.",
    "Na łowisku dostępne są pomosty i pontony do wynajęcia.",
    "Możliwość połowu z lodu.",
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Łowisko Bobrowisko</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://www.facebook.com/Kamil.Bobrowski91')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Facebook Łowisko Bobrowisko</Text>
        </TouchableOpacity>

        <Text style={styles.subtitle}>Województwo: Lubelskie</Text>
        <Text style={styles.subtitle}>Miejscowość: Siennica Różana</Text>

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
  contact: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 20,
    textAlign: 'center',
  },
});

export default Bobrowisko;
