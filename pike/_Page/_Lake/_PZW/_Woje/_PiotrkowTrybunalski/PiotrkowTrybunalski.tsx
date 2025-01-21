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

const PiotrkowTrybunalski = () => {
  const lakes = [
    { name: 'Zb. Wawrzkowizna', description: '16,60 Powiat belchatowski' },
    { name: 'Zb. Przedborz', description: '11,00 Powiat radomszczanski' },
    { name: 'Zb. Starzyce', description: '7,80 Tomaszow Mazowiecki' },
    { name: 'Zb. Alejny', description: '7,80 Powiat piotrkowski' },
    { name: 'Zb. Kodrab', description: 'Lowisko specjalne 5.30 Powiat radomszczanski' },
    { name: 'Zb. Patyki', description: '5,20 Powiat belchatowski' },
    { name: 'Zb. Gorny Mlyn', description: '5,50 Powiat konecki' },
    { name: 'Zb. Spala', description: '3,50 Powiat tomaszowski' },
    { name: 'Zb. Browary I i II', description: '3,75 Powiat konecki' },
    { name: 'Zb. Pila', description: '3,75 Powiat konecki' },
    { name: 'Zb. Stary Mlyn', description: '2,80 Powiat konecki' },
    { name: 'Zb. Stara Kuznica', description: '2,10 Powiat konecki' },
    { name: 'Zb. Drutarnia', description: '2,00 Powiat konecki' },
    { name: 'Zb. Szabelnia', description: '2,00 Powiat konecki' },
    { name: 'Zb. Szczercow', description: '1,60 Powiat belchatowski' },
    { name: 'Zb. Swirca Dol', description: '1,00 Powiat przysuski' },
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Obwody Rybackie Piotrków Trybunalski</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('http://www.pzw.piotrkowtrybunalski.pl')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Strona główna PZW Piotrków Trybunalski</Text>
        </TouchableOpacity>
        {lakes.map((lake, index) => (
          <View key={index} style={styles.infoBox}>
            <Text style={styles.infoText}>
              <Text style={styles.bold}>Nazwa: </Text>{lake.name}
            </Text>
            <Text style={styles.infoText}>
              <Text style={styles.bold}>Opis: </Text>{lake.description}
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

export default PiotrkowTrybunalski;
