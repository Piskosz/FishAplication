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

type LowiskoGolczewoProps = {
  navigation: NavigationProp<any, any>;
};

const Golczewo: React.FC<LowiskoGolczewoProps> = ({ navigation }) => {
  const regulations = [
    "Łowisko Golczewo położone między Gryficami a Goleniowem.",
    "Akwen czynny codziennie. Głębokość maksymalna do 1,5 m.",
    "Na terenie nowo wybudowana duża wiata, która nie tylko daje schronienie przed deszczem, ale może służyć podczas organizacji zawodów.",
    "W wodzie pływają okazy nawet do 20 kg, jesiotry do około 10 kg.",
    "Istnieje możliwość rozbicia namiotu, przyczepy itd. (za niewielką opłatą).",
    "Na łowisku znajduje się plac zabaw dla dzieci, można wypożyczyć sprzęt czy rozpalić grilla.",
    "Nie jest wymagane posiadanie karty wędkarskiej.",
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')} // Możesz zastąpić to odpowiednim zdjęciem
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Łowisko Golczewo</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://znajdzlowisko.pl/lowisko-golczewo/')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Strona internetowa Łowiska Golczewo</Text>
        </TouchableOpacity>

        <Text style={styles.subtitle}>Województwo: Zachodniopomorskie</Text>
        <Text style={styles.subtitle}>Miejscowość: Golczewo</Text>


        <Text style={styles.subtitle}>Dodatkowe informacje:</Text>
        {regulations.map((rule, index) => (
          <View key={index} style={styles.infoBox}>
            <Text style={styles.infoText}>{rule}</Text>
          </View>
        ))}

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Map', {
              initialLocation: { lat: 53.650, lng: 14.650 }, // Przykładowe współrzędne dla Łowiska Golczewo
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

export default Golczewo;
