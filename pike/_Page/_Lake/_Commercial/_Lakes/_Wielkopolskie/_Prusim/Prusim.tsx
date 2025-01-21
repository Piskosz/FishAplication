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

type PrusimProps = {
  navigation: NavigationProp<any, any>;
};

const Prusim: React.FC<PrusimProps> = ({ navigation }) => {
  const regulations = [
    "Łowisko czynne cały rok, poza okresem gdy pokrywa je lód.",
    "Pierwszy staw: 1,2 ha, głębokość 1-2 m, ryby od 1 do 15 kg.",
    "Drugi staw: 0,5 ha, głębokość około 1 m, ryby 1-3 kg.",
    "Brak roślinności podwodnej, tylko gdzieniegdzie kapelony.",
    "Obowiązkowe wyposażenie: podbierak, haczyki bezzadziorowe, mata.",
    "Można rozpalić ognisko lub grilla.",
    "Dostęp do prądu.",
    "Samochód zostawiamy na parkingu przy domostwach.",
    "Wędkarze mogą łowić w nocy po wcześniejszym uzgodnieniu.",
    "Na terenie znajduje się domek holenderski do wynajęcia.",
    "Dozwolone metody połowu: spławik, feeder, grunt. Zabronione spinningowanie.",
    "Ryby do 3 kg można zakupić, większe muszą wrócić do wody.",
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')} // Możesz zastąpić to odpowiednim zdjęciem
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Łowisko Prusim</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://znajdzlowisko.pl/lowisko-prusim/')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Strona internetowa Łowiska Prusim</Text>
        </TouchableOpacity>

        <Text style={styles.subtitle}>Województwo: Wielkopolskie</Text>
        <Text style={styles.subtitle}>Miejscowość: Prusim</Text>

        <Text style={styles.subtitle}>Dodatkowe informacje:</Text>
        {regulations.map((rule, index) => (
          <View key={index} style={styles.infoBox}>
            <Text style={styles.infoText}>{rule}</Text>
          </View>
        ))}

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Map', {
              initialLocation: { lat: 52.567, lng: 15.871 }, // Przykładowe współrzędne dla Łowiska Prusim
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

export default Prusim;
