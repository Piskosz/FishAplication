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

const Slupsk = () => {
  const waters = [
    { name: 'Borzytuchom', description: '9,28 ha' },
    { name: 'Okoniewskie', description: '9,33 ha' },
    { name: 'Bytów - Długie', description: '9,07 ha' },
    { name: 'Gubisz', description: '14,56 ha' },
    { name: 'Jeleń', description: '84,54 ha' },
    { name: 'Stawy przy jez. Jeleń obręb 98', description: '2,15 ha' },
    { name: 'Stawy w Bytowie przy ul. Jeziornej i W. Szymborskiej', description: '0,29 ha' },
    { name: 'Stawy w Bytowie pomiędzy ul. Naruszewicza, Małachowskiego, Kołłątaja', description: '0,619 ha' },
    { name: 'Cewice - Oskowo', description: '17,32 ha' },
    { name: 'Brody - Żurawie', description: '11,47 ha' },
    { name: 'Bochowo', description: '7,1366 ha' },
    { name: 'Czarne k. Unichowa', description: '18,94 ha' },
    { name: 'Kartkowo - Długie', description: '15,07 ha' },
    { name: 'Kopieniec Duży', description: '11,16 ha' },
    { name: 'Kopieniec Średni', description: '10,04 ha' },
    { name: 'Kopieniec Mały', description: '3,77 ha' },
    { name: 'Wiejskie k. Czarnej Dąbrówki', description: '4,97 ha' },
    { name: 'Człuchów - Buszewo', description: '8,64 ha' },
    { name: 'Biały Zdrój', description: '55,68 ha' },
    { name: 'Łazienkowskie', description: '38,27 ha' },
    { name: 'Miejskie Małe', description: '21,5 ha' },
    { name: 'Polnickie', description: '8,31 ha' },
    { name: 'Rychnowskie', description: '167,8 ha' },
    { name: 'Urzędowe', description: '72,8 ha' },
    { name: 'Długie', description: '26,06 ha' },
    { name: 'Gardzki', description: '16,05 ha' },
    { name: 'Główno', description: '20,32 ha' },
    { name: 'Jeziorno', description: '4,14 ha' },
    { name: 'Kaczy Staw', description: '1,38 ha' },
    { name: 'Ostrów Duży', description: '23,15 ha' },
    { name: 'Staw Miejski Debrzno', description: '26,37 ha' },
    { name: 'Żukowo', description: '50,66 ha' },
    { name: 'Dębnica Kaszubska - Gałęzów', description: '6,25 ha' },
    { name: 'Dobra', description: '22,36 ha' },
    { name: 'Kępice - Korzybie', description: '5,1 ha' },
    { name: 'Mzdowo', description: '8,79 ha' },
    { name: 'Nakło', description: '11,02 ha' },
    { name: 'Obłęże', description: '66,4 ha' },
    { name: 'Pałacowe', description: '3,27 ha' },
    { name: 'Płocko', description: '7,07 ha' },
    { name: 'Przyjezierze Małe', description: '2,03 ha' },
    { name: 'Przyjezierze Duże', description: '27 ha' },
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Okręg Słupsk</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('http://www.pzw-slupsk.com/')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Strona główna Okręgu Słupsk</Text>
        </TouchableOpacity>
        {waters.map((water, index) => (
          <View key={index} style={styles.infoBox}>
            <Text style={styles.infoText}>
              <Text style={styles.bold}>Nazwa: </Text>{water.name}
            </Text>
            <Text style={styles.infoText}>
              <Text style={styles.bold}>Opis: </Text>{water.description}
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

export default Slupsk;
