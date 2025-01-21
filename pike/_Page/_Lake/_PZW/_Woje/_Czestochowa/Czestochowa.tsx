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

const Czestochowa = () => {
  const waters = [
    { name: 'C-01 - rz. Mała Panew', description: 'od źródeł do ujścia rzeki Lublinicy.' },
    { name: 'C-02 - zb. Zielona (Górny i Dolny)', description: '51,8 ha, gm. Kalety.' },
    { name: 'C-03 - zb. Droniowiczki', description: '3,8 ha, Lubliniec.' },
    { name: 'C-04 - Kanał Grunwaldzki', description: '2,0 ha, Lubliniec.' },
    { name: 'C-05 - zb. Dąbrowa', description: '2,5 ha, gm. Koszęcin.' },
    { name: 'C-10 - rz. Warta', description: 'od źródeł do mostu w m. Poraj wraz z dopływami.' },
    { name: 'C-11 - zb. Poraj', description: '496 ha, gm. Poraj.' },
    { name: 'C-20 - rz. Warta', description: 'od mostu w m. Poraj do mostu kolejowego w Działoszynie oraz zb. Jankowice w Zakrzówku Szlacheckim.' },
    { name: 'C-21 - zb. Widawa', description: '5,0 ha, gm. Woźniki.' },
    { name: 'C-22 - zb. Pająk', description: '6,0 ha, gm. Konopiska.' },
    { name: 'C-23 - zb. Blachownia', description: '40,0 ha, gm. Blachownia.' },
    { name: 'C-24 - zb. Amerykan', description: '4,4 ha, gm. Janów.' },
    { name: 'C-25 - zb. Guców', description: '3,5 ha, gm. Janów.' },
    { name: 'C-26 - zb. Julianka', description: '7,0 ha, gm. Przyrów.' },
    { name: 'C-30 - rz. Liswarta', description: 'od źródeł do ujścia wraz z dopływami.' },
    { name: 'C-31 - zb. Hadra', description: '40,0 ha, gm. Herby.' },
    { name: 'C-32 - zb. Lisów', description: '7,5 ha, gm. Lisów.' },
    { name: 'C-33 - zb. Borki', description: '6,45 ha, gm. Olesno.' },
    { name: 'C-34 - zb. Kucoby', description: '10,0 ha, gm. Olesno.' },
    { name: 'C-35 - zb. Zakrzew', description: '9,6 ha, gm. Kłobuck.' },
    { name: 'C-36 - zb. Ostrowy', description: '38,0 ha, gm. Miedźno (tylko zb. Dolny).' },
    { name: 'C-37 - zb. Panki', description: '3,8 ha, gm. Panki.' },
    { name: 'C-40 - rz. Pilica', description: 'od źródeł do ujścia rzeki Czarna Włoszczowska wraz z dopływami na tym odcinku.' },
    { name: 'C-41 - zb. Siamoszyce', description: '25,0 ha, gm. Kroczyce.' },
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Wody Nizinne Czestochowa</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('http://www.pzw-czestochowa.pl/')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Strona główna Okręgu Czestochowa</Text>
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

export default Czestochowa;
