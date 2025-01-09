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

const CastleLakes: React.FC<CastleLakesProps> = ({ navigation }) => {
  const regulations = [
    "Łowisko Castle Lakes to zbiornik wędkarstwa no kill położony w województwie dolnośląskim, w miejscowości Miłkowice. Jest to idealne miejsce dla wędkarzy poszukujących spokojnej okolicy i świetnych warunków do połowu.",
    "Na łowisku występują takie gatunki ryb jak karp, lin, amur, szczupak, okoń.",
    "Powierzchnia łowiska wynosi 11 ha, a do dyspozycji wędkarzy są stanowiska karpiowe oraz możliwość łowienia spinningowego.",
    "Na terenie łowiska znajduje się także możliwość wynajęcia apartamentów w zamku. Pokoje oferują pełny komfort z telewizorem, zmywarką i innymi udogodnieniami. Planowany jest także plac zabaw dla dzieci.",
    "Łowisko będzie otwarte w 2025 roku dla szerszego grona wędkarzy, a obecnie jest testowane przez zaprzyjaźnionych wędkarzy.",
    "Połów karpiowy na Castle Lakes dozwolony jest przy użyciu dwóch wędek przez jednego karpiarza, z obowiązkowym użyciem żyłki min. 0,35 mm i haków bezzadziorowych.",
    "Na łowisku obowiązuje zasada 'no kill' (złów i wypuść). Wędkarze muszą również przestrzegać innych zasad, jak używanie maty z bokami, podbieraka karpiowego, odkażacza i zakaz stosowania niektórych markerów oraz sprzętu.",
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Łowisko Castle Lakes</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://www.facebook.com/profile.php?id=100083498164869')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Facebook Castle Lakes</Text>
        </TouchableOpacity>

        <Text style={styles.subtitle}>Województwo: Dolnośląskie</Text>
        <Text style={styles.subtitle}>Miejscowość: Miłkowice</Text>

        <Text style={styles.subtitle}>Regulamin łowiska:</Text>
        {regulations.map((rule, index) => (
          <View key={index} style={styles.infoBox}>
            <Text style={styles.infoText}>{rule}</Text>
          </View>
        ))}

        <TouchableOpacity
          onPress={() => navigation.navigate('Map', {
            initialLocation: { lat: 51.2314, lng: 16.2483 },
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

export default CastleLakes;
