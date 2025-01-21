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

type HarusFishingProps = {
  navigation: NavigationProp<any, any>;
};

const MalaOlza: React.FC<HarusFishingProps> = ({ navigation }) => {
  const regulations = [
    "Łowisko Mała Olza położone jest niedaleko Wodzisławia Śląskiego, Jastrzębia Zdroju.",
    "Akwen czynny przez całą dobę 7 dni w tygodniu. Doba zaczyna i kończy się o godzinie 10:00.",
    "Na łowisku należy rezerwować stanowiska pod telefonem: 692 243 945 lub 600 244 780.",
    "Zasada 'no kill' - złów i wypuść dla wszystkich gatunków ryb.",
    "Dozwolone metody połowu: gruntowo-włosowa, spławikowa oraz spinningowa.",
    "Wymagana obecność podbieraka o rozstawie ramion min. 80x100 cm, odkażacza, maty typu wanna lub kołyska karpiowa na stelażu, oraz bezpiecznych zestawów.",
    "Zakaz rozpalania ognisk, można rozpalać grilla.",
    "Dostępnych jest 6 stanowisk.",
    "Rekord łowiska na koniec 2022 roku wynosił 19 kg.",
    "Nie jest wymagane posiadanie karty wędkarskiej.",
    "W wodzie pływają również karpie koi.",
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Łowisko Mała Olza</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://znajdzlowisko.pl/lowisko-mala-olza/')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Strona internetowa Łowiska Mała Olza</Text>
        </TouchableOpacity>

        <Text style={styles.subtitle}>Województwo: Śląskie</Text>
        <Text style={styles.subtitle}>Miejscowość: Olza</Text>

        <Text style={styles.subtitle}>Dodatkowe informacje:</Text>
        {regulations.map((rule, index) => (
          <View key={index} style={styles.infoBox}>
            <Text style={styles.infoText}>{rule}</Text>
          </View>
        ))}

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Map', {
              initialLocation: { lat: 49.9600, lng: 18.4000 }, // Example coordinates for Mała Olza
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

export default MalaOlza;
