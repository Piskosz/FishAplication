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

const Suwalki = () => {
  const waters = [
    { name: 'Babka', surface: '67,16', district: 'Kruklanki' },
    { name: 'Bartelnik', surface: '8,54', district: 'Pozezdrze' },
    { name: 'Biała Kuta', surface: '26,63', district: 'Pozezdrze' },
    { name: 'Białe', surface: '130,37', district: 'Filipów' },
    { name: 'Białoławki', surface: '272', district: 'Pisz' },
    { name: 'Bitkowskie', surface: '99,77', district: 'Gołdap' },
    { name: 'Blizenko', surface: '39,12', district: 'Nowinka' },
    { name: 'Blizno', surface: '240,38', district: 'Nowinka' },
    { name: 'Błotniste', surface: '2,34', district: 'Kalinowo' },
    { name: 'Boczne', surface: '55,94', district: 'Przerośl' },
    { name: 'Bocznel', surface: '19,06', district: 'Jeleniewo' },
    { name: 'Boćki', surface: '8,28', district: 'Olecko' },
    { name: 'Bolesty', surface: '128,95', district: 'Raczki' },
    { name: 'Brożówka', surface: '61,04', district: 'Pozezdrze' },
    { name: 'Brzask', surface: '29,73', district: 'Pozezdrze' },
    { name: 'Brzozolasek', surface: '159,49', district: 'Pisz' },
    { name: 'Czarna Kuta', surface: '26,32', district: 'Pozezdrze' },
    { name: 'Czarne', surface: '183', district: 'Dubeninki' },
    { name: 'Czostków', surface: '21,87', district: 'Filipów' },
    { name: 'Dechłe', surface: '8,69', district: 'Krasnopol' },
    { name: 'Długie', surface: '36,38', district: 'Olecko' },
    { name: 'Długie Sejneńskie', surface: '106,81', district: 'Krasnopol' },
    { name: 'Długie', surface: '24,97', district: 'Filipów' },
    { name: 'Dobki', surface: '162,43', district: 'Olecko' },
    { name: 'Dowcień', surface: '83,57', district: 'Krasnopol' },
    { name: 'Dudeckie', surface: '144,89', district: 'Świętajno' },
    { name: 'Dworackie', surface: '90', district: 'Świętajno' },
    { name: 'Ełk + Barany + Herta Duża', surface: '400,93+5,12+7,46', district: 'Ełk' },
    { name: 'Gacne', surface: '7,70', district: 'Filipów' },
    { name: 'Gaładuś', surface: '592,16', district: 'Sejny' },
    { name: 'Garbaś', surface: '145,06', district: 'Filipów' },
    { name: 'Głęboka Kuta', surface: '17,35', district: 'Pozezdrze' },
    { name: 'Głębokie', surface: '5,74', district: 'Kalinowo' },
    { name: 'Głębokie', surface: '11,94', district: 'Olecko' },
    { name: 'Głębokie', surface: '9,08', district: 'Bakałarzewo' },
    { name: 'Gołdap', surface: '161,58', district: 'Gołdap' },
    { name: 'Gołdapiwo', surface: '840', district: 'Kruklanki' },
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Okręg Suwałki</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('http://www.pzw.suwalki.pl')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Strona główna Okręgu Suwałki</Text>
        </TouchableOpacity>
        {waters.map((water, index) => (
          <View key={index} style={styles.infoBox}>
            <Text style={styles.infoText}>
              <Text style={styles.bold}>Nazwa: </Text>{water.name}
            </Text>
            <Text style={styles.infoText}>
              <Text style={styles.bold}>Powierzchnia: </Text>{water.surface} ha
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

export default Suwalki;
