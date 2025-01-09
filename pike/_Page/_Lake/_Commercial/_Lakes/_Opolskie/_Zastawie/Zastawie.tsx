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

type ZastawieProps = {
  navigation: NavigationProp<any, any>;
};

const Zastawie: React.FC<ZastawieProps> = ({ navigation }) => {
  const regulations = [
    "Łowisko Zastawie znajduje się niedaleko miejscowości Opole i Olesno.",
    "Łowisko składa się z 5 stawów, z czego na dwóch obowiązuje zasada 'złów i wypuść'.",
    "Na pozostałych stawach istnieje możliwość zakupu ryby.",
    "Stawy są zróżnicowane pod względem wielkości, trudności, wielkości ryb oraz głębokości.",
    "Staw Tomek ma powierzchnię około 2 ha i głębokość od 2 do 5 m. Pływają w nim amury i karpie w przedziale 10-20 kg.",
    "Staw Piotrek ma głębokość od 50 cm do 6 m i pływają w nim karpie i amury o wadze 8-15 kg.",
    "Na każdym stawie wyznaczone jest 10 jednoosobowych stanowisk wędkarskich.",
    "Wędkarze muszą posiadać matę wanienkę lub kołyskę, żyłkę min. 0,30 mm, duży podbierak, odkażacz, wędki 2-3 składowe, hak min. nr 6.",
    "Obydwa stawy są czynne przez całą dobę i przez cały rok.",
    "Na pozostałych stawach obowiązują inne zasady, a łowienie możliwe jest od świtu do zmierzchu.",
    "Rekord karpia to 26 kg, a amura 24 kg."
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Łowisko Zastawie</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://www.facebook.com/pages/category/Landmark-Historical-Place/%C5%81owisko-zastawie-Karpiowo-Amurowe-322589137917370/')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Facebook Łowisko Zastawie</Text>
        </TouchableOpacity>

        <Text style={styles.subtitle}>Województwo: Opolskie</Text>
        <Text style={styles.subtitle}>Miejscowość: Ozimek Bistrzynnik</Text>

        <Text style={styles.subtitle}>Regulamin łowiska:</Text>
        {regulations.map((rule, index) => (
          <View key={index} style={styles.infoBox}>
            <Text style={styles.infoText}>{rule}</Text>
          </View>
        ))}

        <TouchableOpacity
          onPress={() => navigation.navigate('Map', {
            initialLocation: { lat: 50.4661, lng: 17.6177 },
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

export default Zastawie;
