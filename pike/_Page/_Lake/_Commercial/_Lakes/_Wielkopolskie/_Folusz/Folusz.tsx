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

type FoluszProps = {
  navigation: NavigationProp<any, any>;
};

const Folusz: React.FC<FoluszProps> = ({ navigation }) => {
  const regulations = [
    "Łowisko czynne codziennie od 7:00 do 22:00.",
    "Brak roślinności podwodnej.",
    "Możliwość zakupu złowionych ryb.",
    "Na terenie znajdują się ławeczki, stoliki, grill.",
    "Najczęściej łowione ryby ważą 0,5-4 kg, ale można spotkać okazy do 10 kg.",
    "Czasami organizowane są zawody wędkarskie.",
    "Nie jest wymagane posiadanie karty wędkarskiej.",
    "Możliwość rozpalenia ogniska.",
    "Brak noclegów, namiotów i przyczep campingowych.",
    "Brak spinningowania.",
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')} // Możesz zastąpić to odpowiednim zdjęciem
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Łowisko Folusz</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://znajdzlowisko.pl/lowisko-folusz/')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Strona internetowa Łowiska Folusz</Text>
        </TouchableOpacity>

        <Text style={styles.subtitle}>Województwo: Wielkopolskie</Text>
        <Text style={styles.subtitle}>Miejscowość: Folusz</Text>


        <Text style={styles.subtitle}>Dodatkowe informacje:</Text>
        {regulations.map((rule, index) => (
          <View key={index} style={styles.infoBox}>
            <Text style={styles.infoText}>{rule}</Text>
          </View>
        ))}

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Map', {
              initialLocation: { lat: 51.943, lng: 17.626 }, // Przykładowe współrzędne dla Łowiska Folusz
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

export default Folusz;
