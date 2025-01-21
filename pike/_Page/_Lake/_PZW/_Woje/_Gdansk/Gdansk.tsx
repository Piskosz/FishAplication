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

const Gdansk = () => {
  const waters = [
    { name: 'Bagienko I', description: 'N/A', type: 'Żwirownie', fishingBoat: 'nie', district: 'Lubichowo Mermet', fishingRestrictions: 'N/A', dateRestrictions: '' },
    { name: 'Bagienko II', description: 'N/A', type: 'Żwirownie', fishingBoat: 'tak', district: 'Lubichowo Mermet', fishingRestrictions: 'N/A', dateRestrictions: '' },
    { name: 'Białe', description: 'N/A', type: 'Żwirownie', fishingBoat: 'nie', district: 'Kartuzy Grzybno, Prokowo', fishingRestrictions: 'N/A', dateRestrictions: '' },
    { name: 'Bieszkowice', description: 'N/A', type: 'Żwirownie', fishingBoat: 'nie', district: 'Wejherowo Bieszkowice', fishingRestrictions: 'N/A', dateRestrictions: '' },
    { name: 'Borówno Małe', description: 'N/A', type: 'Żwirownie', fishingBoat: 'nie', district: 'Skarszewy Skarszewy', fishingRestrictions: 'N/A', dateRestrictions: '' },
    { name: 'Borówno Wielkie', description: 'N/A', type: 'Żwirownie', fishingBoat: 'nie', district: 'Skarszewy Skarszewy', fishingRestrictions: 'N/A', dateRestrictions: '' },
    { name: 'Bukowskie', description: 'N/A', type: 'Żwirownie', fishingBoat: 'nie', district: 'Sierakowice Bukowo', fishingRestrictions: 'N/A', dateRestrictions: '' },
    { name: 'Bukowieńskie', description: 'N/A', type: 'Żwirownie', fishingBoat: 'nie', district: 'Cewice Bukowina', fishingRestrictions: 'N/A', dateRestrictions: '' },
    { name: 'Chojnackie', description: 'N/A', type: 'Żwirownie', fishingBoat: 'nie', district: 'Sulęczyno Chojna-Kistowo', fishingRestrictions: 'N/A', dateRestrictions: '' },
    { name: 'Czatkowy', description: 'N/A', type: 'Żwirownie', fishingBoat: 'nie', district: 'Tczew Czatkowy', fishingRestrictions: 'N/A', dateRestrictions: '' },
    { name: 'Czarne Pd.', description: 'N/A', type: 'Zbiornik', fishingBoat: 'tak', district: 'Osiek Osiek', fishingRestrictions: 'N/A', dateRestrictions: '' },
    { name: 'Czarnoleskie', description: 'N/A', type: 'Zbiornik', fishingBoat: 'tak', district: 'Skórcz Czarny Las', fishingRestrictions: 'N/A', dateRestrictions: '' },
    { name: 'Dobre', description: 'N/A', type: 'Zbiornik', fishingBoat: 'tak', district: 'Puck Tyłowo', fishingRestrictions: 'N/A', dateRestrictions: '' },
    { name: 'Gałęźne', description: 'N/A', type: 'Staw', fishingBoat: 'nie', district: 'Kościerzyna Kościerzyna', fishingRestrictions: 'N/A', dateRestrictions: '' },
    { name: 'Jabłowo', description: 'N/A', type: 'Staw', fishingBoat: 'nie', district: 'Starogard Gdański Jabłowo', fishingRestrictions: 'N/A', dateRestrictions: '' },
    { name: 'Jelonek', description: 'N/A', type: 'Staw', fishingBoat: 'nie', district: 'Lubichowo Wdecki Młyn', fishingRestrictions: 'N/A', dateRestrictions: '' },
    { name: 'Kamień', description: 'N/A', type: 'Zbiornik', fishingBoat: 'tak', district: 'Szemud Kamień', fishingRestrictions: 'N/A', dateRestrictions: '' },
    { name: 'Kamionka', description: 'N/A', type: 'Zbiornik', fishingBoat: 'tak', district: 'Stężyca N. i St. Czaple', fishingRestrictions: 'N/A', dateRestrictions: '' },
    { name: 'Kapliczne', description: 'N/A', type: 'Staw', fishingBoat: 'nie', district: 'Kościerzyna Kościerzyna', fishingRestrictions: 'N/A', dateRestrictions: '' },
    { name: 'Kazubskie', description: 'N/A', type: 'Staw', fishingBoat: 'nie', district: 'Kaliska Kazub', fishingRestrictions: 'N/A', dateRestrictions: '' },
    { name: 'Klasztorne D. i M.', description: 'N/A', type: 'Zbiornik', fishingBoat: 'tak', district: 'Kartuzy Kartuzy', fishingRestrictions: 'N/A', dateRestrictions: '' },
    { name: 'Krawusińskie', description: 'N/A', type: 'Zbiornik', fishingBoat: 'tak', district: 'Skarszewy Kamierowskie Piece', fishingRestrictions: 'N/A', dateRestrictions: '' },
    { name: 'Księże', description: 'N/A', type: 'Zbiornik', fishingBoat: 'tak', district: 'Kościerzyna Wierzysko', fishingRestrictions: 'N/A', dateRestrictions: '' },
    { name: 'Lichnowy', description: 'N/A', type: 'Staw', fishingBoat: 'nie', district: 'Chojnice Lichnowy', fishingRestrictions: 'N/A', dateRestrictions: '' },
    { name: 'Łapino Górne', description: 'N/A', type: 'Zbiornik', fishingBoat: 'tak', district: 'Żukowo Łapino Górne', fishingRestrictions: 'N/A', dateRestrictions: '' },
    { name: 'Łapalickie', description: 'N/A', type: 'Zbiornik', fishingBoat: 'tak', district: 'Łapalice Łapalice', fishingRestrictions: 'N/A', dateRestrictions: '' },
    { name: 'Małe Mierzeszyńskie', description: 'N/A', type: 'Zbiornik', fishingBoat: 'tak', district: 'Trąbki Wielkie Mierzeszyn', fishingRestrictions: 'N/A', dateRestrictions: '' },
    { name: 'Marchowo', description: 'N/A', type: 'Zbiornik', fishingBoat: 'tak', district: 'Szemud Kieleńska Huta', fishingRestrictions: 'N/A', dateRestrictions: '' },
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Okręg Gdańsk</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('http://www.pzwwg.pl/')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Strona główna Okręgu Gdańsk</Text>
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

export default Gdansk;
