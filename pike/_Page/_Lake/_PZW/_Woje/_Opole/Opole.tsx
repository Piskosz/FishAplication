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

const Opole = () => {
  const waters = [
    { name: 'Raczyna', description: 'Od granicy państwa do ujścia wraz ze wszystkimi dopływami.', type: 'Rzeka', fishingBoat: 'tak', district: 'Otmuchów', fishingRestrictions: 'Przynęta sztuczna- dozwolone metody spinningowa i muchowa', dateRestrictions: '' },
    { name: 'Świdna', description: 'Od granicy państwa do ujścia wraz ze wszystkimi dopływami.', type: 'Rzeka', fishingBoat: 'tak', district: 'Otmuchów', fishingRestrictions: 'Przynęta sztuczna- dozwolone metody spinningowa i muchowa', dateRestrictions: '' },
    { name: 'Widna', description: 'Od granicy państwa do ujścia wraz ze wszystkimi dopływami.', type: 'Rzeka', fishingBoat: 'tak', district: 'Otmuchów', fishingRestrictions: 'Przynęta sztuczna- dozwolone metody spinningowa i muchowa', dateRestrictions: '' },
    { name: 'Kamienica', description: 'Od granicy państwa do ujścia wraz ze wszystkimi dopływami.', type: 'Rzeka', fishingBoat: 'tak', district: 'Otmuchów', fishingRestrictions: 'Przynęta sztuczna- dozwolone metody spinningowa i muchowa', dateRestrictions: '' },
    { name: 'Biała Głuchołaska', description: 'Od granicy państwa do ujścia potoku Mora.', type: 'Rzeka', fishingBoat: 'nie', district: 'Głuchołazy', fishingRestrictions: 'Łowisko złów i wypuść', dateRestrictions: 'Sztuczna mucha' },
    { name: 'Biała Głuchołaska (część 2)', description: 'Od ujścia potoku Mora do mostu drogowego Nysa-Kałków.', type: 'Rzeka', fishingBoat: 'nie', district: 'Nysa', fishingRestrictions: 'Przynęta sztuczna- dozwolone metody spinningowa i muchowa', dateRestrictions: '' },
    { name: 'Mora', description: 'Od granicy państwa do ujścia do rzeki Białej Głuchołaskiej wraz z dopływami.', type: 'Rzeka', fishingBoat: 'nie', district: 'Opole', fishingRestrictions: 'Dozwolone metody spinningowa i muchowa', dateRestrictions: '' },
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Okręg Opole</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('http://pzw.opole.pl/')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Strona główna Okręgu Opole</Text>
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

export default Opole;
