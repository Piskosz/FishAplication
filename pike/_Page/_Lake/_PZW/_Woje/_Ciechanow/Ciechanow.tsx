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

const Ciechanow = () => {
  const rivers = [
    { name: 'Wkra', description: 'Obwód rybacki obejmuje wody rzeki Wkra (Nida) od źródeł do jej ujścia do rzeki Narew, wraz z dopływami: Pierławka, Swojęcianka, Luta, Topielica, Struga, Rosica, Turka, Naruszewka, Nasielna.' },
    { name: 'Płonka', description: 'Obwód rybacki obejmuje wody rzeki Płonka od źródeł do ujścia do rzeki Wkra, wraz z dopływami: Dzierzążnica, Żurawianka.' },
    { name: 'Sona', description: 'Obwód rybacki obejmuje wody rzeki Sona od źródeł do ujścia do rzeki Wkra, wraz z dopływami: Kolnica, Tatarka oraz zbiornikiem Nowomiejskim.' },
    { name: 'Łydynia', description: 'Obwód rybacki obejmuje wody rzeki Łydynia od źródeł do jej ujścia do rzeki Wkra, wraz z dopływami: Giedniówka, Dunajczyk, Pławnica, Stawnica.' },
    { name: 'Raciążnica', description: 'Obwód rybacki obejmuje wody rzeki Raciążnica od źródeł do jej ujścia do rzeki Wkra, wraz z dopływami: Zadębie, Karsówka, Rokitnica, Dobrzyca.' },
    { name: 'Mławka', description: 'Obwód rybacki obejmuje wody rzeki Mławka od źródeł do jej ujścia do rzeki Wkra, z dopływami: Dwukolanaka, Krupionka, Seracz, Sewerynka, Przylepnica.' },
    { name: 'Wel', description: 'Obwód rybacki obejmuje wody rzeki Wel z wodami jej dopływów, od 50-ciu metrów poniżej wypływu z jeziora Pancer (Pancerz, Durąskie) do jeziora Rumian.' },
    { name: 'Zarybinek', description: 'Obwód rybacki obejmuje wody jeziora Zarybinek, jeziora Rybno, z wodami ich dopływów i wody łączącego je cieku, 50-cio metrowy odcinek rzeki Wel poniżej wypływu z jeziora Zarybinek.' },
    { name: 'Tarczyńskie', description: 'Obwód rybacki obejmuje wody jeziora Zakrocz, jeziora Gronowskie, jeziora Tarczyńskie, jeziora Grądy.' },
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Obwody Rybackie Ciechanów</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('http://www.pzw.ciechanow.pl')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Strona główna PZW Ciechanów</Text>
        </TouchableOpacity>
        {rivers.map((river, index) => (
          <View key={index} style={styles.infoBox}>
            <Text style={styles.infoText}>
              <Text style={styles.bold}>Nazwa: </Text>{river.name}
            </Text>
            <Text style={styles.infoText}>
              <Text style={styles.bold}>Opis: </Text>{river.description}
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

export default Ciechanow;
