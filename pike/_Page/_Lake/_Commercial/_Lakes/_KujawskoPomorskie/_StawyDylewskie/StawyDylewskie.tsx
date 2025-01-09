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

type StawyDylewskieProps = {
  navigation: NavigationProp<any, any>;
};

const StawyDylewskie: React.FC<StawyDylewskieProps> = ({ navigation }) => {
  const regulations = [
    "Łowisko podzielone jest na cztery stawy. Pierwszy z najmniejszymi karpiami i amurami, kolejny z większymi, trzeci z okazami powyżej 4-5 kg. Ostatni staw jest przeznaczony dla drapieżników.",
    "Na stawie nr 3 - wymagana jest rezerwacja stanowisk i znajduje się ich 13. Jest to typowy staw karpiowy. Obowiązuje na nim zasada 'no kill' (złów i wypuść).",
    "Na tym stawie wymagane jest od wędkarza posiadanie oraz używanie: maty karpiowej, podbieraka karpiowego, odkażacza, żyłki o średnicy 0,28 mm.",
    "W przypadku braku posiadania maty czy podbieraka, łowisko udostępnia możliwość wypożyczenia tego sprzętu.",
    "Na łowisku można korzystać z prądu.",
    "Akwen czynny 24h/dobę.",
    "Głębokość łowiska oscyluje w granicach 0,5 m-2 m.",
    "Karpie i amury powyżej 3,6 kg i poniżej 1 kg nie są na sprzedaż i muszą wrócić ponownie do wody. Inne gatunki i mniejsze sztuki można zakupić po cenach z cennika. Okoń, płoć i leszcz bez opłaty.",
    "Nie jest wymagane posiadanie karty wędkarskiej.",
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Stawy Dylewskie</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://www.facebook.com/Stawy-Dylewskie-wwwstawydylewskiepl-295674600558960/')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Facebook Stawy Dylewskie</Text>
        </TouchableOpacity>

        <Text style={styles.subtitle}>Wojewodztwo: Kujawsko-Pomorskie</Text>
        <Text style={styles.subtitle}>Miejscowosc: Dylewo</Text>

        <Text style={styles.subtitle}>Regulamin lowiska:</Text>
        {regulations.map((rule, index) => (
          <View key={index} style={styles.infoBox}>
            <Text style={styles.infoText}>{rule}</Text>
          </View>
        ))}

        <TouchableOpacity
          onPress={() => navigation.navigate('Map', {
            initialLocation: { lat: 53.3300, lng: 19.5733 },  // Update coordinates if needed
          })}
          style={styles.mapButton}
        >
          <Text style={styles.linkText}>Otworz mape lowiska</Text>
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

export default StawyDylewskie;
