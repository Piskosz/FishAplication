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

const Olsztyn = () => {
  const waters = [
    { name: 'Arklickie', description: '', type: 'Jezioro', fishingBoat: 'tak', district: 'Olsztyn', fishingRestrictions: '', dateRestrictions: '' },
    { name: 'Babieniec', description: '', type: 'Jezioro', fishingBoat: 'tak', district: 'Korsze', fishingRestrictions: '', dateRestrictions: '' },
    { name: 'Barbet', description: '', type: 'Jezioro', fishingBoat: 'tak', district: 'Bartoszyce', fishingRestrictions: '', dateRestrictions: '' },
    { name: 'Bartosz', description: '', type: 'Jezioro', fishingBoat: 'tak', district: 'Biskupiec', fishingRestrictions: '', dateRestrictions: '' },
    { name: 'Bartoszyce', description: '', type: 'Jezioro', fishingBoat: 'tak', district: 'Bartoszyce', fishingRestrictions: '', dateRestrictions: '' },
    { name: 'Białe Błota', description: '', type: 'Jezioro', fishingBoat: 'tak', district: 'Gietrzwałd', fishingRestrictions: '', dateRestrictions: '' },
    { name: 'Czarna', description: '', type: 'Jezioro', fishingBoat: 'tak', district: 'Olsztyn', fishingRestrictions: '', dateRestrictions: '' },
    { name: 'Długie', description: '', type: 'Jezioro', fishingBoat: 'tak', district: 'Olsztyn', fishingRestrictions: '', dateRestrictions: '' },
    { name: 'Długie*', description: '', type: 'Jezioro', fishingBoat: 'tak', district: 'Morąg', fishingRestrictions: '', dateRestrictions: '' },
    { name: 'Domowe Duże', description: '', type: 'Jezioro', fishingBoat: 'tak', district: 'Szczytno', fishingRestrictions: '', dateRestrictions: '' },
    { name: 'Domowe Małe', description: '', type: 'Jezioro', fishingBoat: 'tak', district: 'Szczytno', fishingRestrictions: '', dateRestrictions: '' },
    { name: 'Dost', description: '', type: 'Jezioro', fishingBoat: 'tak', district: 'Jeziorany', fishingRestrictions: '', dateRestrictions: '' },
    { name: 'Fryż', description: '', type: 'Jezioro', fishingBoat: 'tak', district: 'Bartoszyce', fishingRestrictions: '', dateRestrictions: '' },
    { name: 'Górne', description: '', type: 'Jezioro', fishingBoat: 'tak', district: 'Pieniężno', fishingRestrictions: '', dateRestrictions: '' },
    { name: 'Górne*', description: '', type: 'Jezioro', fishingBoat: 'tak', district: 'Szczytno', fishingRestrictions: '', dateRestrictions: '' },
    { name: 'Gulbin', description: '', type: 'Jezioro', fishingBoat: 'tak', district: 'Olsztyn', fishingRestrictions: '', dateRestrictions: '' },
    { name: 'Kalinówka', description: '', type: 'Jezioro', fishingBoat: 'tak', district: 'Bartoszyce', fishingRestrictions: '', dateRestrictions: '' },
    { name: 'Kąty', description: '', type: 'Jezioro', fishingBoat: 'tak', district: 'Kętrzyn', fishingRestrictions: '', dateRestrictions: '' },
    { name: 'Kiełbów', description: '', type: 'Jezioro', fishingBoat: 'tak', district: 'Szczytno', fishingRestrictions: '', dateRestrictions: '' },
    { name: 'Kołdy', description: '', type: 'Jezioro', fishingBoat: 'tak', district: 'Nidzica', fishingRestrictions: '', dateRestrictions: '' },
    { name: 'Kołdy*', description: '', type: 'Jezioro', fishingBoat: 'tak', district: 'Działdowo', fishingRestrictions: '', dateRestrictions: '' },
    { name: 'Kosianka', description: '', type: 'Jezioro', fishingBoat: 'tak', district: 'Jeziorany', fishingRestrictions: '', dateRestrictions: '' },
    { name: 'Krzywe', description: '', type: 'Jezioro', fishingBoat: 'tak', district: 'Mrągowo', fishingRestrictions: '', dateRestrictions: '' },
    { name: 'Księżyce', description: '', type: 'Jezioro', fishingBoat: 'tak', district: 'Szczytno', fishingRestrictions: '', dateRestrictions: '' },
    { name: 'Lubie', description: '', type: 'Jezioro', fishingBoat: 'tak', district: 'Olsztyn', fishingRestrictions: '', dateRestrictions: '' },
    { name: 'Lubianka', description: '', type: 'Jezioro', fishingBoat: 'tak', district: 'Szczytno', fishingRestrictions: '', dateRestrictions: '' },
    { name: 'Mikołajki', description: '', type: 'Jezioro', fishingBoat: 'tak', district: 'Mikołajki', fishingRestrictions: '', dateRestrictions: '' },
    { name: 'Młynowo', description: '', type: 'Jezioro', fishingBoat: 'tak', district: 'Biskupiec', fishingRestrictions: '', dateRestrictions: '' },
    { name: 'Mściwoj', description: '', type: 'Jezioro', fishingBoat: 'tak', district: 'Olsztyn', fishingRestrictions: '', dateRestrictions: '' },
    { name: 'Nidzica', description: '', type: 'Jezioro', fishingBoat: 'tak', district: 'Nidzica', fishingRestrictions: '', dateRestrictions: '' },
    { name: 'Niesłysz', description: '', type: 'Jezioro', fishingBoat: 'tak', district: 'Szczytno', fishingRestrictions: '', dateRestrictions: '' },
    { name: 'Osieki', description: '', type: 'Jezioro', fishingBoat: 'tak', district: 'Olsztyn', fishingRestrictions: '', dateRestrictions: '' },
    { name: 'Orzechówka', description: '', type: 'Jezioro', fishingBoat: 'tak', district: 'Mrągowo', fishingRestrictions: '', dateRestrictions: '' },
    { name: 'Piaseczno', description: '', type: 'Jezioro', fishingBoat: 'tak', district: 'Szczytno', fishingRestrictions: '', dateRestrictions: '' },
    { name: 'Pieszkowo', description: '', type: 'Jezioro', fishingBoat: 'tak', district: 'Gietrzwałd', fishingRestrictions: '', dateRestrictions: '' },
    { name: 'Pustelnik', description: '', type: 'Jezioro', fishingBoat: 'tak', district: 'Bartoszyce', fishingRestrictions: '', dateRestrictions: '' },
    { name: 'Skrzynki', description: '', type: 'Jezioro', fishingBoat: 'tak', district: 'Szczytno', fishingRestrictions: '', dateRestrictions: '' },
    { name: 'Staw Dębowski', description: '', type: 'Jezioro', fishingBoat: 'tak', district: 'Bartoszyce', fishingRestrictions: '', dateRestrictions: '' },
    { name: 'Szczepanowo', description: '', type: 'Jezioro', fishingBoat: 'tak', district: 'Olsztyn', fishingRestrictions: '', dateRestrictions: '' },
    { name: 'Szczytno', description: '', type: 'Jezioro', fishingBoat: 'tak', district: 'Szczytno', fishingRestrictions: '', dateRestrictions: '' },
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Okręg Olsztyn</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('http://www.pzwwolsztyn.pl')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Strona główna Okręgu Olsztyn</Text>
        </TouchableOpacity>
        {waters.map((water, index) => (
          <View key={index} style={styles.infoBox}>
            <Text style={styles.infoText}>
              <Text style={styles.bold}>Nazwa: </Text>{water.name}
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

export default Olsztyn;
