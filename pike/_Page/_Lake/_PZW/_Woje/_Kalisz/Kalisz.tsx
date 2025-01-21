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

const Kalisz = () => {
  const waters = [
    { name: 'Bolesławiec', description: 'N/A', type: 'Zbiornik zaporowy', fishingBoat: 'tak', district: 'Bolesławiec', fishingRestrictions: 'Umowa z RZGW Poznań', dateRestrictions: '' },
    { name: 'Piaski Szczygliczka', description: 'N/A', type: 'Zbiornik zaporowy', fishingBoat: 'tak', district: 'Ostrów Wlkp', fishingRestrictions: 'Umowa z RZGW Poznań', dateRestrictions: '' },
    { name: 'Szałe', description: 'N/A', type: 'Zbiornik zaporowy', fishingBoat: 'tak', district: 'Szałe', fishingRestrictions: 'Umowa z RZGW Poznań', dateRestrictions: '' },
    { name: 'Opatówek', description: 'N/A', type: 'Zbiornik zaporowy', fishingBoat: 'tak', district: 'Opatówek', fishingRestrictions: 'Umowa z RZGW Poznań', dateRestrictions: '' },
    { name: 'Gołuchów', description: 'N/A', type: 'Zbiornik zaporowy', fishingBoat: 'tak', district: 'Gołuchów', fishingRestrictions: 'Umowa z RZGW Poznań', dateRestrictions: '' },
    { name: 'Murowaniec', description: 'N/A', type: 'Zbiornik zaporowy', fishingBoat: 'tak', district: 'Murowaniec', fishingRestrictions: 'Umowa z RZGW Poznań', dateRestrictions: '' },
    { name: 'Roszków', description: 'N/A', type: 'Zbiornik zaporowy', fishingBoat: 'tak', district: 'Roszków', fishingRestrictions: 'Umowa z RZGW Poznań', dateRestrictions: '' },
    { name: 'Kobyla Góra', description: 'N/A', type: 'Zbiornik zaporowy', fishingBoat: 'tak', district: 'Kobyla Góra', fishingRestrictions: 'Umowa z RZGW Wrocław', dateRestrictions: '' },
    { name: 'Wróżewy', description: 'N/A', type: 'Staw', fishingBoat: 'nie', district: 'Krotoszyn', fishingRestrictions: 'Dzierżawa', dateRestrictions: '' },
    { name: 'Biadki', description: 'N/A', type: 'Glinianka', fishingBoat: 'nie', district: 'Krotoszyn', fishingRestrictions: 'Własność PZW Kalisz', dateRestrictions: '' },
    { name: 'Koźmin WUKO', description: 'N/A', type: 'Staw', fishingBoat: 'nie', district: 'Koźmin', fishingRestrictions: 'Dzierżawa', dateRestrictions: '' },
    { name: 'Skałów', description: 'N/A', type: 'Staw', fishingBoat: 'nie', district: 'Koźmin', fishingRestrictions: 'Dzierżawa', dateRestrictions: '' },
    { name: 'Ceramik Krotoszyn', description: 'N/A', type: 'Glinianka', fishingBoat: 'nie', district: 'Krotoszyn', fishingRestrictions: 'Własność PZW Kalisz', dateRestrictions: '' },
    { name: 'Kowalew', description: 'N/A', type: 'Glinianka', fishingBoat: 'nie', district: 'Pleszew', fishingRestrictions: 'Własność PZW Kalisz', dateRestrictions: '' },
    { name: 'Chachalnia', description: 'N/A', type: 'Staw', fishingBoat: 'nie', district: 'Zduny', fishingRestrictions: 'Dzierżawa', dateRestrictions: '' },
    { name: 'Rososzyca – Park', description: 'N/A', type: 'Staw', fishingBoat: 'nie', district: 'Sieroszewice', fishingRestrictions: 'Dzierżawa', dateRestrictions: '' },
    { name: 'Sieroszewice', description: 'N/A', type: 'Staw', fishingBoat: 'nie', district: 'Sieroszewice', fishingRestrictions: 'Dzierżawa', dateRestrictions: '' },
    { name: 'Koźminek', description: 'N/A', type: 'Glinianka', fishingBoat: 'nie', district: 'Koźminek', fishingRestrictions: 'Dzierżawa', dateRestrictions: '' },
    { name: 'Stara Kuźnica', description: 'N/A', type: 'Glinianka', fishingBoat: 'nie', district: 'Doruchów', fishingRestrictions: 'Własność PZW Kalisz', dateRestrictions: '' },
    { name: 'Tokarzew', description: 'N/A', type: 'Glinianka', fishingBoat: 'nie', district: 'Doruchów', fishingRestrictions: 'Dzierżawa', dateRestrictions: '' },
    { name: 'Ostrzeszów', description: 'N/A', type: 'Glinianka', fishingBoat: 'nie', district: 'Ostrzeszów', fishingRestrictions: 'Dzierżawa', dateRestrictions: '' },
    { name: 'Konradów', description: 'N/A', type: 'Staw', fishingBoat: 'nie', district: 'Sośnie', fishingRestrictions: 'Własność PZW Kalisz', dateRestrictions: '' },
    { name: 'Sośnie', description: 'N/A', type: 'Staw', fishingBoat: 'nie', district: 'Sośnie', fishingRestrictions: 'Dzierżawa', dateRestrictions: '' },
    { name: 'Radomskiego', description: 'N/A', type: 'Staw', fishingBoat: 'nie', district: 'Przygodzice', fishingRestrictions: 'Dzierżawa', dateRestrictions: '' },
    { name: 'Kępno', description: 'N/A', type: 'Glinianka', fishingBoat: 'nie', district: 'Kępno', fishingRestrictions: 'Dzierżawa', dateRestrictions: '' },
    { name: 'Słupia', description: 'N/A', type: 'Glinianka', fishingBoat: 'nie', district: 'Kępno', fishingRestrictions: 'Własność PZW Kalisz', dateRestrictions: '' },
    { name: 'Żółtków', description: 'N/A', type: 'Glinianka', fishingBoat: 'nie', district: 'Żerków', fishingRestrictions: 'Dzierżawa', dateRestrictions: '' },
    { name: 'Syców', description: 'N/A', type: 'Staw', fishingBoat: 'nie', district: 'Syców', fishingRestrictions: 'Dzierżawa', dateRestrictions: '' },
    { name: 'Góra', description: 'N/A', type: 'Glinianka', fishingBoat: 'nie', district: 'Jaraczewo', fishingRestrictions: 'Dzierżawa', dateRestrictions: '' },
    { name: 'Olszyna', description: 'N/A', type: 'Glinianka', fishingBoat: 'nie', district: 'Ostrzeszów', fishingRestrictions: 'Dzierżawa', dateRestrictions: '' },
    { name: 'Kotlin', description: 'N/A', type: 'Glinianka', fishingBoat: 'nie', district: 'Kotlin', fishingRestrictions: 'Własność PZW Kalisz', dateRestrictions: '' },
    { name: 'Zbiersk', description: 'N/A', type: 'Staw', fishingBoat: 'nie', district: 'Zbiersk', fishingRestrictions: 'Dzierżawa', dateRestrictions: '' },
    { name: 'Cieszyn I', description: 'N/A', type: 'Staw', fishingBoat: 'nie', district: 'Sośnie', fishingRestrictions: 'Własność PZW Kalisz', dateRestrictions: '' },
    { name: 'Dobrzyca', description: 'N/A', type: 'Staw', fishingBoat: 'nie', district: 'Dobrzyca', fishingRestrictions: 'Dzierżawa', dateRestrictions: '' },
    { name: 'Parczew', description: 'N/A', type: 'Staw', fishingBoat: 'nie', district: 'Sieroszewice', fishingRestrictions: 'Dzierżawa', dateRestrictions: '' },
    { name: 'Mleczarnia Kępno', description: 'N/A', type: 'Glinianka', fishingBoat: 'nie', district: 'Kępno', fishingRestrictions: 'Dzierżawa', dateRestrictions: '' },
    { name: 'Palaty-Staw Jankowskiego', description: 'N/A', type: 'Starorzecze', fishingBoat: 'nie', district: 'Grabów', fishingRestrictions: 'Dzierżawa', dateRestrictions: '' },
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Okręg Kalisz</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('http://pzw.kalisz.pl/')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Strona główna Okręgu Kalisz</Text>
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

export default Kalisz;
