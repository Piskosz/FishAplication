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

const Elblag = () => {
  const waters = [
    { name: 'Jezioro Balewo (Baleweckie)', description: '', type: 'Jezioro', fishingBoat: 'tak', district: 'Elbląg', fishingRestrictions: '', dateRestrictions: '' },
    { name: 'Jezioro Barlewickie', description: '', type: 'Jezioro', fishingBoat: 'tak', district: 'Elbląg', fishingRestrictions: '', dateRestrictions: '' },
    { name: 'Jezioro Białe', description: '', type: 'Jezioro', fishingBoat: 'tak', district: 'Elbląg', fishingRestrictions: '', dateRestrictions: '' },
    { name: 'Jezioro Burgale (Bronowskie)', description: '', type: 'Jezioro', fishingBoat: 'tak', district: 'Elbląg', fishingRestrictions: '', dateRestrictions: '' },
    { name: 'Jezioro Dąbrówka Malborska', description: '', type: 'Jezioro', fishingBoat: 'tak', district: 'Malbork', fishingRestrictions: '', dateRestrictions: '' },
    { name: 'Jezioro Drużno', description: 'Rezerwat Przyrody - zasady wędkowania na stronie internetowej www.pzwelblag.pl', type: 'Jezioro', fishingBoat: 'tak', district: 'Elbląg', fishingRestrictions: '', dateRestrictions: '' },
    { name: 'Jezioro Głębock', description: '', type: 'Jezioro', fishingBoat: 'tak', district: 'Elbląg', fishingRestrictions: '', dateRestrictions: '' },
    { name: 'Jezioro Jerzewo (Brachlewo)', description: '', type: 'Jezioro', fishingBoat: 'tak', district: 'Elbląg', fishingRestrictions: '', dateRestrictions: '' },
    { name: 'Jezioro Kaniewo (Koniecwałd)', description: '', type: 'Jezioro', fishingBoat: 'tak', district: 'Elbląg', fishingRestrictions: '', dateRestrictions: '' },
    { name: 'Jezioro Kiersyty', description: '', type: 'Jezioro', fishingBoat: 'tak', district: 'Elbląg', fishingRestrictions: '', dateRestrictions: '' },
    { name: 'Jezioro Miejskie w Kisielicach', description: '', type: 'Jezioro', fishingBoat: 'tak', district: 'Elbląg', fishingRestrictions: '', dateRestrictions: '' },
    { name: 'Jezioro Kościeleczki', description: '', type: 'Jezioro', fishingBoat: 'tak', district: 'Elbląg', fishingRestrictions: '', dateRestrictions: '' },
    { name: 'Jezioro Krzykosy', description: '', type: 'Jezioro', fishingBoat: 'tak', district: 'Elbląg', fishingRestrictions: '', dateRestrictions: '' },
    { name: 'Jezioro Kucki – Klecewskie (Jaromierz, Klecewo)', description: '', type: 'Jezioro', fishingBoat: 'tak', district: 'Elbląg', fishingRestrictions: '', dateRestrictions: '' },
    { name: 'Jezioro Kuksy', description: '', type: 'Jezioro', fishingBoat: 'tak', district: 'Elbląg', fishingRestrictions: '', dateRestrictions: '' },
    { name: 'Jezioro Licze', description: '', type: 'Jezioro', fishingBoat: 'tak', district: 'Elbląg', fishingRestrictions: '', dateRestrictions: '' },
    { name: 'Jezioro Łukszyty', description: '', type: 'Jezioro', fishingBoat: 'tak', district: 'Elbląg', fishingRestrictions: '', dateRestrictions: '' },
    { name: 'Jezioro Martwe (Jelenia Dolina)', description: '', type: 'Jezioro', fishingBoat: 'tak', district: 'Elbląg', fishingRestrictions: '', dateRestrictions: '' },
    { name: 'Jezioro Mareza', description: '', type: 'Jezioro', fishingBoat: 'tak', district: 'Elbląg', fishingRestrictions: '', dateRestrictions: '' },
    { name: 'Jezioro Merynos', description: '', type: 'Jezioro', fishingBoat: 'tak', district: 'Elbląg', fishingRestrictions: '', dateRestrictions: '' },
    { name: 'Jezioro Orneckie (Mieczowe)', description: '', type: 'Jezioro', fishingBoat: 'tak', district: 'Elbląg', fishingRestrictions: '', dateRestrictions: '' },
    { name: 'Jezioro Parlety', description: '', type: 'Jezioro', fishingBoat: 'tak', district: 'Elbląg', fishingRestrictions: '', dateRestrictions: '' },
    { name: 'Jezioro Pasłęk', description: '', type: 'Jezioro', fishingBoat: 'tak', district: 'Pasłęk', fishingRestrictions: '', dateRestrictions: '' },
    { name: 'Jezioro Pastwa', description: '', type: 'Jezioro', fishingBoat: 'tak', district: 'Pasłęk', fishingRestrictions: '', dateRestrictions: '' },
    { name: 'Jezioro Piękne (Bakutil)', description: '', type: 'Jezioro', fishingBoat: 'tak', district: 'Elbląg', fishingRestrictions: '', dateRestrictions: '' },
    { name: 'Jezioro Pierzchały', description: 'Rezerwat Przyrody - zasady wędkowania na stronie internetowej www.pzwelblag.pl', type: 'Jezioro', fishingBoat: 'tak', district: 'Elbląg', fishingRestrictions: '', dateRestrictions: '' },
    { name: 'Jezioro Plińskie', description: '', type: 'Jezioro', fishingBoat: 'tak', district: 'Elbląg', fishingRestrictions: '', dateRestrictions: '' },
    { name: 'Jezioro Podgórz', description: '', type: 'Jezioro', fishingBoat: 'tak', district: 'Elbląg', fishingRestrictions: '', dateRestrictions: '' },
    { name: 'Jezioro Podzamcze', description: '', type: 'Jezioro', fishingBoat: 'tak', district: 'Elbląg', fishingRestrictions: '', dateRestrictions: '' },
    { name: 'Jezioro Rakowe', description: '', type: 'Jezioro', fishingBoat: 'tak', district: 'Elbląg', fishingRestrictions: '', dateRestrictions: '' },
    { name: 'Jezioro Rakowiec', description: '', type: 'Jezioro', fishingBoat: 'tak', district: 'Elbląg', fishingRestrictions: '', dateRestrictions: '' },
    { name: 'Jezioro Sowica (Mętne)', description: '', type: 'Jezioro', fishingBoat: 'tak', district: 'Elbląg', fishingRestrictions: '', dateRestrictions: '' },
    { name: 'Jezioro Stare', description: '', type: 'Jezioro', fishingBoat: 'tak', district: 'Elbląg', fishingRestrictions: '', dateRestrictions: '' },
    { name: 'Jezioro Sztumskie (Zajezierskie)', description: '', type: 'Jezioro', fishingBoat: 'tak', district: 'Sztum', fishingRestrictions: '', dateRestrictions: '' },
    { name: 'Jezioro Szyleny', description: '', type: 'Jezioro', fishingBoat: 'tak', district: 'Elbląg', fishingRestrictions: '', dateRestrictions: '' },
    { name: 'Jezioro Tywęzy', description: '', type: 'Jezioro', fishingBoat: 'tak', district: 'Elbląg', fishingRestrictions: '', dateRestrictions: '' },
    { name: 'Jezioro Wandowo', description: '', type: 'Jezioro', fishingBoat: 'tak', district: 'Elbląg', fishingRestrictions: '', dateRestrictions: '' },
    { name: 'Kanał Brajtery', description: '', type: 'Kanał', fishingBoat: 'tak', district: 'Elbląg', fishingRestrictions: '', dateRestrictions: '' },
    { name: 'Kanał Cieplicówka', description: '', type: 'Kanał', fishingBoat: 'tak', district: 'Elbląg', fishingRestrictions: '', dateRestrictions: '' },
    { name: 'Kanał Elbląski (od pochylni Całuny do wału czołowego j. Drużno)', description: '', type: 'Kanał', fishingBoat: 'tak', district: 'Elbląg', fishingRestrictions: '', dateRestrictions: '' },
    { name: 'Kanał Jagielłoński', description: '', type: 'Kanał', fishingBoat: 'tak', district: 'Elbląg', fishingRestrictions: '', dateRestrictions: '' },
    { name: 'Kanał Linawa', description: '', type: 'Kanał', fishingBoat: 'tak', district: 'Elbląg', fishingRestrictions: '', dateRestrictions: '' },
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Okręg Elbląg</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('http://www.pzwelblag.pl')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Strona główna Okręgu Elbląg</Text>
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

export default Elblag;
