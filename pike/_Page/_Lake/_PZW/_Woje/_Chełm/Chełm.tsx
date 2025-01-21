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

const Chelm = () => {
  const waters = [
    { name: 'Sumin', description: '91,5 ha' },
    { name: 'Starosiele', description: '7,75 ha' },
    { name: 'Białe', description: '106,4 ha' },
    { name: 'Deusze', description: '2,65 ha' },
    { name: 'Glinki', description: '46,9 ha' },
    { name: 'Pompka', description: '3,0 ha' },
    { name: 'Rotcze', description: '42,7 ha' },
    { name: 'Dubeczyńskie (Hańskie)', description: '11,6 ha' },
    { name: 'Płotycze', description: '14,0 ha' },
    { name: 'Syczyn', description: '6,0 ha' },
    { name: 'Święte', description: '5,7 ha' },
    { name: 'Słone', description: '4,6 ha' },
    { name: 'Lipieniec', description: '4,1 ha' },
    { name: 'Berdyszcze', description: '2,5 ha' },
    { name: 'Wereszczyńskie', description: '5,2 ha' },
    { name: 'Krychowskie', description: '3,97 ha' },
    { name: 'Wytyczno', description: '487 ha (dodatkowa składka 120 zł)' },
    { name: 'Zahajki', description: '235 ha' },
    { name: 'Stańków', description: '41,7 ha' },
    { name: 'Żółtańce Duży', description: '46,9 ha' },
    { name: 'Żółtańce Mały', description: '9,0 ha' },
    { name: 'Staw', description: '14,8 ha' },
    { name: 'Tuligłowy', description: '15 ha' },
    { name: 'Tuligłowy kąpielisko', description: '1,5 ha' },
    { name: 'Niva I', description: '44,3 ha' },
    { name: 'Niva II', description: '8,5 ha' },
    { name: 'Zb.Husynne', description: '99 ha' },
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Jeziora i Zbiorniki Chełm</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('http://www.pzw-chelm.pl/')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Strona główna Okręgu Chełm</Text>
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

export default Chelm;
