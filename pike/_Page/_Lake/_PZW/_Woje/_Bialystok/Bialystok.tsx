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

const Bialystok = () => {
  const waters = [
    { name: 'rz. Narew nr 1', details: 'Zbiornik Siemianówka obejmuje wody: a) zbiornika Siemianówka, b) rzeki Narew (od granicy Państwa do zbiornika), c) Cisówkę, d) Kołonną, e) Pszczółkę', location: 'Białystok, Hajnówka', surface: '3253 ha' },
    { name: 'rz. Narew nr 2', details: 'Obwód rybacki obejmuje wody: a) rzeki Narew wraz ze starorzeczami, b) rzeki Narewka, c) rzeki Łoknica, d) rzeki Orlanka, e) Zbiornika Dubicze Cerkiewne', location: 'Hajnówka, Bielsk Podlaski, Białystok', surface: '275 ha' },
    { name: 'rz. Narew nr 4', details: 'Obwód rybacki obejmuje wody: a) rzeki Narew, b) rzeki Nereśl, c) rzeka Ślina', location: 'Białystok, Mońki', surface: '285 ha' },
    { name: 'rz. Supraśl nr 1', details: 'Obwód rybacki obejmuje wody: a) rzeki Supraśl, b) rzeki Sokołda, c) Zbiornika Gródek, d) Zbiornika Sokółka, e) Zbiornika Wasilków', location: 'Białystok, Sokółka', surface: '166 ha' },
    { name: 'rz. Leśna nr 1', details: 'Obwód rybacki obejmuje wody: a) rzeki Leśna, b) Zbiornika Topiło', location: 'Hajnówka', surface: '45 ha' },
    { name: 'rz. Kamianka nr 1', details: 'Obwód rybacki obejmuje wody: a) rzeki Kamianka, b) Zbiornika Siemiatycze dolny, c) Zbiornika Siemiatycze górny, d) Zbiornika Czartajew', location: 'Siemiatycze', surface: '42 ha' },
    { name: 'rz. Biebrza nr 2', details: 'Obwód rybacki obejmuje wody: a) rzeki Sidra, b) Zbiornika Sidra, c) rzeki Kamienna, d) Zbiornika Janów, e) Zbiornika Korycin', location: 'Sokółka, Augustów, Mońki', surface: '100 ha' },
    { name: 'rz. Świsłocz nr 1', details: 'Obwód rybacki obejmuje wody: a) rzeki Świsłocz, b) Zbiornika Krynki', location: 'Białystok, Sokółka', surface: '55 ha' },
    { name: 'rz. Łosośna nr 1', details: 'Obwód rybacki obejmuje wody: a) Zbiornika Kuźnica Białostocka', location: 'Sokółka', surface: '5 ha' },
    { name: 'rz. Czarna Hańcza nr 7', details: 'Obwód rybacki obejmuje wody: a) rzeki Czarna Hańcza', location: 'Sokółka', surface: 'unknown' }
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Okręg Białystok</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('http://www.pzw.bialystok.pl')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Strona główna Okręgu Białystok</Text>
        </TouchableOpacity>
        {waters.map((water, index) => (
          <View key={index} style={styles.infoBox}>
            <Text style={styles.infoText}>
              <Text style={styles.bold}>Nazwa: </Text>{water.name}
            </Text>
            <Text style={styles.infoText}>
              <Text style={styles.bold}>Szczegóły: </Text>{water.details}
            </Text>
            <Text style={styles.infoText}>
              <Text style={styles.bold}>Lokalizacja: </Text>{water.location}
            </Text>
            <Text style={styles.infoText}>
              <Text style={styles.bold}>Powierzchnia: </Text>{water.surface} ha
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

export default Bialystok;
