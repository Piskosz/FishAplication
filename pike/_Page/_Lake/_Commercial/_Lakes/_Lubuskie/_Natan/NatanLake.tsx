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

type NatanLakeProps = {
  navigation: NavigationProp<any, any>;
};

const NatanLake: React.FC<NatanLakeProps> = ({ navigation }) => {
  const regulations = [
    "Łowisko karpiowe „Natan” czynne przez cały rok.",
    "Łowisko znajduje się w miejscowości Droszków, województwo Lubuskie.",
    "Występujące gatunki ryb: Karp, Amur, Lin, Szczupak, Sandacz, Tołpyga, Węgorz, Płoć.",
    "Łowisko składa się z naturalnego akwenu wodnego, na którym obowiązuje zasada „no kill” (złów i wypuść).",
    "Na łowisku dostępnych jest 7 stanowisk.",
    "Brak możliwości rozpalenia grilla lub ogniska. Na jeziorze znajduje się plaża.",
    "Wędkarz musi posiadać: podbierak o rozstawie ramion ~1 metr, matę z bokami uniemożliwiającymi wysunięcie się ryby poza jej obręb, odkażacz.",
    "Na łowisku znajdują się toalety.",
    "Po wypakowaniu, samochód należy odstawić na parking.",
    "Łowisko Natan otoczone jest lasem.",
    "Ryby w przedziale wagowym od 3,5 do 24 kg. Największy okaz 24,700 kg.",
    "Nie jest wymagane posiadanie karty wędkarskiej.",
    "Możliwość łowienia w nocy.",
    "Możliwość rozbicia namiotu oraz przyjazdu z przyczepą campingową.",
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Łowisko karpiowe „Natan”</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://www.facebook.com/%C5%81owisko-karpiowe-Natan-161644987354438/')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Facebook Łowisko karpiowe „Natan”</Text>
        </TouchableOpacity>

        <Text style={styles.subtitle}>Województwo: Lubuskie</Text>
        <Text style={styles.subtitle}>Miejscowość: Droszków</Text>

        <Text style={styles.subtitle}>Regulamin łowiska:</Text>
        {regulations.map((rule, index) => (
          <View key={index} style={styles.infoBox}>
            <Text style={styles.infoText}>{rule}</Text>
          </View>
        ))}

        <TouchableOpacity
          onPress={() => navigation.navigate('Map', {
            initialLocation: { lat: 51.7644, lng: 15.5833 },
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

export default NatanLake;
