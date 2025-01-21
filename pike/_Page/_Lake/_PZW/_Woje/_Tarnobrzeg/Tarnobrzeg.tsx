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

const Tarnobrzeg = () => {
  const reservoirs = [
    { id: 1, name: 'Zalew Szymanowice', area: '50,6 ha', location: 'Klimontów', caretaker: 'Klimontów - 27' },
    { id: 2, name: 'Zalew Janów Lubelski', area: '28,19 ha', location: 'Janów Lubelski', caretaker: 'Janów Lubelski - 55' },
    { id: 3, name: 'Zalew Koprzywnica', area: '17,0 ha', location: 'Koprzywnica', caretaker: 'Koprzywnica - 37' },
    { id: 4, name: 'Zbiornik "Wysoki Wał"', area: '9,98 ha', location: 'Zaleszany', caretaker: 'Zaleszany - 19' },
    { id: 5, name: 'Stawy "Zwierzyniec"', area: '6,62 ha', location: 'Tarnobrzeg', caretaker: 'Tarnobrzeg - 2' },
    { id: 6, name: 'Zalew BUCZYNA', area: '5,0 ha', location: 'Bogoria', caretaker: 'Bogoria - 26' },
    { id: 7, name: 'Stawy w Jeziórku 2,3 i 5', area: '52,37 ha', location: 'Grębów', caretaker: 'Tarnobrzeg 42, 29 i 2' },
    { id: 8, name: 'Zalew Klonowe', area: '6,0 ha', location: 'Grębów', caretaker: 'Grębów - 51' },
    { id: 26, name: 'Jezioro Tarnobrzeskie', area: '455,00 ha', location: 'Tarnobrzeg', caretaker: 'Tarnobrzeg - 39' },
    { id: 29, name: 'Zalew Wilcza Wola', area: '160,00 ha', location: 'Raniżów', caretaker: 'Stalowa Wola - 3' },
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Okręg Tarnobrzeg</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('http://www.pzwtarnobrzeg.pl/')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Strona główna Okręgu Tarnobrzeg</Text>
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

export default Tarnobrzeg;
