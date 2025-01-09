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

type KrzesimowProps = {
  navigation: NavigationProp<any, any>;
};

const Krzesimow: React.FC<KrzesimowProps> = ({ navigation }) => {
  const regulations = [
    "Łowisko Krzesimów to trzy stawy do dyspozycji wędkarzy.",
    "Akwen położony niedaleko miejscowości Lublin, Mełgiew, Łęczna.",
    "Możliwość zakupu ryb, ale są limity ochronne.",
    "Głębokość stawów wynosi średnio 1,5 m.",
    "W wodach występuje 34 gatunki ryb.",
    "Na łowisku dostępna jest gastronomia oraz przetwory z ryb.",
    "Na terenie znajdują się ławki.",
    "Od wędkarzy wymagane jest posiadanie wyhaczacza i podbieraka.",
    "Łowisko pozwala na łowienie bez karty wędkarskiej.",
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Łowisko Krzesimów</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://www.facebook.com/%C5%81owisko-W%C4%99dkarskie-Krzesim%C3%B3w-486659768156089/')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Facebook Łowisko Krzesimów</Text>
        </TouchableOpacity>

        <Text style={styles.subtitle}>Województwo: Lubelskie</Text>
        <Text style={styles.subtitle}>Miejscowość: Krzesimów</Text>

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

export default Krzesimow;
