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

const Sieradz = () => {
  const waters = [
    {
      name: 'Rzeka Warta nr 3',
      description: 'Obwód obejmuje rzekę Wartę od mostu kolejowego na trasie Zduńska Wola - Herby Nowe w miejscowości Lelity, do mostu drogowego w miejscowości Warta.',
      type: 'Rzeka',
      fishingBoat: 'tak',
      district: 'Sieradz',
      fishingRestrictions: '',
      dateRestrictions: '',
    },
    {
      name: 'Rzeka Oleśnica',
      description: 'Obwód obejmuje rzekę Oleśnicę od źródeł do ujścia.',
      type: 'Rzeka',
      fishingBoat: 'tak',
      district: 'Sieradz',
      fishingRestrictions: '',
      dateRestrictions: '',
    },
    {
      name: 'Zbiornik retencyjny „PRÓBA”',
      description: '',
      type: 'Zbiornik',
      fishingBoat: 'tak',
      district: 'Sieradz',
      fishingRestrictions: '',
      dateRestrictions: '',
    },
    {
      name: 'Zbiornik retencyjny „SMARDZEW”',
      description: '',
      type: 'Zbiornik',
      fishingBoat: 'tak',
      district: 'Sieradz',
      fishingRestrictions: '',
      dateRestrictions: '',
    },
    {
      name: 'Rzeka Grabia nr 2',
      description: 'Obwód obejmuje rzekę Grabię od jazu w miejscowości Jamborek, do ujścia do rzeki Widawka oraz Zbiornik MOSiR w Łasku i zbiornik w m. Barycz.',
      type: 'Rzeka',
      fishingBoat: 'tak',
      district: 'Sieradz',
      fishingRestrictions: '',
      dateRestrictions: '',
    },
    {
      name: 'Rzeka Widawka nr 2',
      description: 'Obwód obejmuje rzekę Widawkę od mostu drogowego w miejscowości Zagrodniki, do ujścia do rzeki Warta.',
      type: 'Rzeka',
      fishingBoat: 'tak',
      district: 'Sieradz',
      fishingRestrictions: '',
      dateRestrictions: '',
    },
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Obwód Rybacki Sieradz</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('http://www.pzwwsieradz.pl')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Strona główna Obwodu Rybackiego Sieradz</Text>
        </TouchableOpacity>
        {waters.map((water, index) => (
          <View key={index} style={styles.infoBox}>
            <Text style={styles.infoText}>
              <Text style={styles.bold}>Nazwa: </Text>{water.name}
            </Text>
            <Text style={styles.infoText}>
              <Text style={styles.bold}>Opis: </Text>{water.description}
            </Text>
            <Text style={styles.infoText}>
              <Text style={styles.bold}>Typ: </Text>{water.type}
            </Text>
            <Text style={styles.infoText}>
              <Text style={styles.bold}>Wędkowanie z łodzi: </Text>{water.fishingBoat}
            </Text>
            <Text style={styles.infoText}>
              <Text style={styles.bold}>Gmina: </Text>{water.district}
            </Text>
          </View>
        ))}
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
  linkText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
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
  bold: {
    fontWeight: 'bold',
  },
});

export default Sieradz;
