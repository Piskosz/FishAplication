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

type RadlniaProps = {
  navigation: NavigationProp<any, any>;
};

const Radlnia: React.FC<RadlniaProps> = ({ navigation }) => {
  const regulations = [
    "Łowisko Radlnia znajduje się niedaleko takich miejscowości jak Siedlce, Międzyrzecz Podlaski, Łosice, Biała Podlaska.",
    "Jest to łowisko TYPOWO KARPIOWE. Nie ma możliwości połowu innymi metodami!",
    "Akwen potorfowy składający się z trzech zbiorników.",
    "Do dyspozycji na ten moment jedynie 4 stanowiska karpiowe na jednym z trzech zbiorników, co gwarantuje ciszę, spokój.",
    "Łowisko karpiowe Radlnia jest dość trudne technicznie (kopane koparką, stąd duże nierówności).",
    "Spora część wody porośnięta roślinnością wodną: rogatek, moczarka i kilka innych roślin.",
    "Łowisko wędkarskie wymaga bezwzględnego przestrzegania zasady 'no kill' (złów i wypuść) dla wszystkich gatunków ryb!",
    "Każdy karpiarz musi posiadać na stanowisku oraz używać: maty karpiowej, podbieraka, haczyków bezzadziorowych lub z mikrozadziorem oraz odkażacza.",
    "Teren jest monitorowany.",
    "Istnieje możliwość zamówienia obiadu czy pizzy z dostawą na stanowisko.",
    "Nie jest wymagane posiadanie karty wędkarskiej.",
    "Do dyspozycji karpiarzy jest wiata, duża płaskodenna łódka, mata typu kołyska, worek do ważenia oraz możliwość naładowania urządzeń przez USB.",
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Łowisko Radlnia</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://znajdzlowisko.pl/lowisko-karpiowe-radlnia/')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Strona internetowa Łowisko Radlnia</Text>
        </TouchableOpacity>

        <Text style={styles.subtitle}>Województwo: Mazowieckie</Text>
        <Text style={styles.subtitle}>Miejscowość: Radlnia</Text>

        <Text style={styles.subtitle}>Regulamin łowiska:</Text>
        {regulations.map((rule, index) => (
          <View key={index} style={styles.infoBox}>
            <Text style={styles.infoText}>{rule}</Text>
          </View>
        ))}

        <TouchableOpacity
          onPress={() => navigation.navigate('Map', {
            initialLocation: { lat: 52.173, lng: 22.719 }, // Współrzędne dla Radlni
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

export default Radlnia;
