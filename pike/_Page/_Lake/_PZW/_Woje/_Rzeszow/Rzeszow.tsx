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

const Rzeszow = () => {
  const reservoirs = [
    { id: 10, name: 'Zalew Rzeszów', area: '120,00 ha', location: 'Rzeszów', caretaker: 'Rzeszów - 10' },
    { id: 11, name: 'Zalew Nowy Dwór', area: '80,00 ha', location: 'Rzeszów', caretaker: 'Nowy Dwór - 15' },
    { id: 12, name: 'Stawy Rzeszowskie', area: '45,00 ha', location: 'Rzeszów', caretaker: 'Rzeszów - 18' },
    { id: 13, name: 'Zalew Lutcza', area: '60,00 ha', location: 'Rzeszów', caretaker: 'Lutcza - 12' },
    { id: 14, name: 'Błażkowa', area: '25,74 ha', location: 'Błażkowa', caretaker: 'Błażkowa' },
    { id: 15, name: 'Stawy Trzciana', area: '8,72 ha', location: 'Trzciana', caretaker: 'Trzciana' },
    { id: 16, name: 'Łętownia', area: '5,71 ha', location: 'Łętownia', caretaker: 'Łętownia' },
    { id: 17, name: 'Stawy Głogów Młp.', area: '3,20 ha', location: 'Głogów Młp.', caretaker: 'Głogów Młp.' },
    { id: 18, name: 'Rakszawa Brzeźnik', area: '2,30 ha', location: 'Rakszawa', caretaker: 'Rakszawa' },
    { id: 19, name: 'Otałęż', area: '22,34 ha', location: 'Otałęż', caretaker: 'Otałęż' },
    { id: 20, name: 'Czarna Sędziszowska', area: '44,79 ha', location: 'Czarna Sędziszowska', caretaker: 'Czarna Sędziszowska' },
    { id: 21, name: 'Lipie I', area: '10,00 ha', location: 'Lipie', caretaker: 'Lipie' },
    { id: 22, name: 'Glinianka Dobrzechów', area: '3,80 ha', location: 'Dobrzechów', caretaker: 'Dobrzechów' },
    { id: 23, name: 'Stawy Tarnawka', area: '6,33 ha', location: 'Tarnawka', caretaker: 'Tarnawka' },
    { id: 24, name: 'Mrowla - Lipie II', area: '11,20 ha', location: 'Mrowla', caretaker: 'Mrowla' },
    { id: 25, name: 'Strzegocice I i II', area: '53,11 ha', location: 'Strzegocice', caretaker: 'Strzegocice' },
    { id: 26, name: 'Zbiornik Floryda', area: '3,00 ha', location: 'Floryda', caretaker: 'Floryda' },
    { id: 27, name: 'Brzóza Stadnicka', area: '1,11 ha', location: 'Brzóza Stadnicka', caretaker: 'Brzóza Stadnicka' },
    { id: 28, name: 'Rakszawa Górna', area: '1,60 ha', location: 'Rakszawa', caretaker: 'Rakszawa' },
    { id: 29, name: 'Staw Browarny', area: '1,26 ha', location: 'Browarny', caretaker: 'Browarny' },
    { id: 30, name: 'Zwięczyca', area: '1,90 ha', location: 'Zwięczyca', caretaker: 'Zwięczyca' },
    { id: 31, name: 'Stawy Janda', area: '1,70 ha', location: 'Janda', caretaker: 'Janda' },
    { id: 32, name: 'Stawy w Weryni', area: '15,77 ha', location: 'Werynia', caretaker: 'Werynia' },
    { id: 33, name: 'Zbiornik Przychojec', area: '1,00 ha', location: 'Przychojec', caretaker: 'Przychojec' },
    { id: 34, name: 'Stawy TC Dębica', area: '3,00 ha', location: 'Dębica', caretaker: 'Dębica' },
    { id: 35, name: 'Zbiornik Rzeszów', area: '48,00 ha', location: 'Rzeszów', caretaker: 'Rzeszów' },
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Okręg Rzeszów</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('http://www.pzwrzeszow.pl/')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Strona główna Okręgu Rzeszów</Text>
        </TouchableOpacity>

        {reservoirs.map((reservoir) => (
          <View key={reservoir.id} style={styles.infoBox}>
            <Text style={styles.infoText}>
              <Text style={styles.bold}>Nazwa: </Text>{reservoir.name}
            </Text>
            <Text style={styles.infoText}>
              <Text style={styles.bold}>Powierzchnia: </Text>{reservoir.area}
            </Text>
            <Text style={styles.infoText}>
              <Text style={styles.bold}>Położenie: </Text>{reservoir.location}
            </Text>
            <Text style={styles.infoText}>
              <Text style={styles.bold}>Opiekun: </Text>{reservoir.caretaker}
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
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
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

export default Rzeszow;
