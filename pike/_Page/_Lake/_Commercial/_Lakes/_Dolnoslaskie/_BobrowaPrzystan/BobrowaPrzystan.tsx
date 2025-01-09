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

type CastleLakesProps = {
  navigation: NavigationProp<any, any>;
};

const BobrowaPrzystan: React.FC<CastleLakesProps> = ({ navigation }) => {
  const regulations = [
    "Łowisko Bobrowa Przystań to dwa stawy po około 30 stanowisk na każdym. Łowisko pożwirowe. Każda z wód ma około 6-8 ha, a głębokość dochodzi do 25 m.",
    "Jeden akwen jest typowo karpiowy, drugi feederowy z rybą mieszaną.",
    "Na obydwu zbiornikach obowiązuje zasada „no kill” (złów i wypuść).",
    "Łowisko karpiowe jest czynne 7 dni w tygodniu, przez całą dobę, a łowisko feederowe od 6:00 do 22:00.",
    "Na łowisku można łowić karpie powyżej 20 kg.",
    "Możliwość połowu na spinning, feeder czy grunt.",
    "Ogniska można rozpalać jedynie w miejscach do tego wyznaczonych.",
    "Wędkarze muszą posiadać odkażacz, haczyki z mikrozadziorem, matę lub kołyskę, podbierak o rozstawie ramion min. 70 cm.",
    "Na terenie łowiska znajduje się KAMPEROWISKO z prysznicami, toaletami, prądem, miejscem na zrzut nieczystości oraz placem zabaw.",
    "Możliwość wynajęcia apartamentów i pokoi.",
    "Łowisko nie wymaga posiadania karty wędkarskiej.",
    "Kontakt telefoniczny: 533 860 205.",
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Łowisko Bobrowa Przystań</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://www.facebook.com/profile.php?id=100072377200090')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Facebook Łowisko Bobrowa Przystań</Text>
        </TouchableOpacity>

        <Text style={styles.subtitle}>Województwo: Dolnośląskie</Text>
        <Text style={styles.subtitle}>Miejscowość: Bolesławiec</Text>

        <Text style={styles.subtitle}>Regulamin łowiska:</Text>
        {regulations.map((rule, index) => (
          <View key={index} style={styles.infoBox}>
            <Text style={styles.infoText}>{rule}</Text>
          </View>
        ))}

        <TouchableOpacity
          onPress={() => navigation.navigate('Map', {
            initialLocation: { lat: 51.2465, lng: 15.5885 }, // Wprowadź odpowiednie współrzędne
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

export default BobrowaPrzystan;
