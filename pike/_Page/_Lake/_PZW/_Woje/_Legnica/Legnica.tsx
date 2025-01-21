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

const Legnica = () => {
  const waters = [
    { name: 'Serby Stare Emerytów', description: '5,76 ha' },
    { name: 'Serby Stare II CPN', description: '2,64 ha' },
    { name: 'Serby Kapliczka', description: '1,44 ha' },
    { name: 'Klucze nowe', description: '10,38 ha' },
    { name: 'Klucze', description: '6,85 ha' },
    { name: 'Mileszyn', description: '4,98 ha' },
    { name: 'Zameczno', description: '3,28 ha' },
    { name: 'Zabłocie', description: '1 ha' },
    { name: 'Jurcz', description: '6,96 ha' },
    { name: 'Ręszów', description: '2,56 ha' },
    { name: 'Lasowice Przychowa', description: '13,93 ha' },
    { name: 'Staw Gaiki-Potoczek', description: '2,6 ha' },
    { name: 'Staw Chróstnik', description: '5,13 ha' },
    { name: 'Staw Pątnów', description: '1,64 ha' },
    { name: 'Szczytniki Duże', description: '5,94 ha' },
    { name: 'Żwirownia Spalona', description: '26,70 ha' },
    { name: 'Staw Biała', description: '3,58 ha' },
    { name: 'Staw Giełda', description: '0,48 ha' },
    { name: 'Żwirownia Rokitki Południowe', description: '16,96 ha' },
    { name: 'Staw Serby Nowe', description: '8,6 ha' },
    { name: 'Jarosław', description: '2,04 ha' },
    { name: 'Piekary', description: '10,71 ha' },
    { name: 'Pichorowice', description: '12,43 ha' },
    { name: 'Glinianki w Lasku Złotoryjskim – Legnica', description: '2,65 ha' },
    { name: 'Staw Przemków', description: '4,24 ha' },
    { name: 'Dziewiń', description: '10,69 ha' },
    { name: 'Staw Chocianów', description: '7,12 ha' },
    { name: 'Zbiornik Lena II', description: '38,25 ha' },
    { name: 'Grochownia', description: '3,44 ha' },
    { name: 'Bogomice', description: '9,53 ha' },
    { name: 'OSiR „Kormoran” Legnica', description: '5,89 ha' },
    { name: 'Zalew Jawornik', description: '4,10 ha' },
    { name: 'Staw Dolpakart', description: '1,22 ha' },
    { name: 'Tymowa', description: '24,40 ha' },
    { name: 'Staw Park Solidarności Lubin' },
    { name: 'Staw Chojnów Miasto', description: '0,68 ha' },
    { name: 'Staw w Buczynie', description: '0,2 ha' },
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Okręg Legnica</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('http://www.pzw-legnica.com/')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Strona główna Okręgu Legnica</Text>
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

export default Legnica;
