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

const Kielce = () => {
  const waters = [
    { name: 'Obwód rybacki rzeki Nidzica nr 1', district: 'Kazimierza Wielka', area: 'N/G - Rzeka Nidzica od źródeł do ujścia do Wisły wraz z dopływami' },
    { name: 'Obwód rybacki rzeki Mierzawa nr 1', district: 'Pińczów, Jędrzejów', area: 'G - Rzeka Mierzawa od źródeł do ujścia do rzeki Nida wraz z dopływami' },
    { name: 'Obwód rybacki rzeki Nida nr 1', district: 'Jędrzejów, Kielce', area: 'N/G - Rzeka Nida od źródeł do ujścia do rzeki Czarna Nida' },
    { name: 'Obwód rybacki rzeki Nida nr 2', district: 'Pińczów, Jędrzejów', area: 'N - Rzeka Nida od połączenia rzek Białej Nidy i Czarnej Nidy do ujścia rzeki Mierzawa' },
    { name: 'Obwód rybacki rzeki Nida nr 3', district: 'Busko-Zdrój, Kazimierza-Wielka, Pińczów', area: 'N - Rzeka Nida od ujścia rzeki Mierzawa do ujścia do rzeki Wisły' },
    { name: 'Obwód rybacki rzeki Czarna Nida nr 1', district: 'Kielce', area: 'N/G - Rzeka Czarna Nida wraz z rzekami: Lubrzanka, Warkocz, Belnianka, Pierzchnianka oraz zbiornikami' },
    { name: 'Obwód rybacki zbiornika Chańcza na rzece Czarna Staszowska nr 1', district: 'Kielce, Staszów', area: 'N/G - Zbiornik Chańcza oraz dopływy na tym odcinku' },
    { name: 'Obwód rybacki zbiornika Brody Iłżeckie na rzece Kamienna nr 1', district: 'Starachowice, Skarżysko', area: 'N/G - Rzeka Kamienna od źródeł do tamy zb. w Brodach Iłżeckich oraz dopływy' },
    { name: 'Obwód rybacki rzeki Kamienna nr 2', district: 'Starachowice, Ostrowiec, Opatów, Sandomierz', area: 'N - Rzeka Kamienna od tamy zb. w Brodach Iłżeckich do ujścia do Wisły' },
    { name: 'Obwód rybacki zbiornika Wióry na rzece Świślina nr 1', district: 'Kielce, Starachowice', area: 'N/G - Rzeka Świślinę oraz zbiornik Wióry' },
    { name: 'Obwód rybacki rzeki Czarna Konecka nr 1', district: 'Końskie, Opoczno, Piotrków Tryb.', area: 'N - Rzeka Czarna Konecka od źródeł do ujścia do Pilicy oraz dopływy' },
    { name: 'Obwód rybacki rzeki Czarna Włoszczowska nr 1', district: 'Włoszczowa', area: 'N - Rzeka Czarna Włoszczowska od źródeł do ujścia do Pilicy' },
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Wody Nizinne - Kielce</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('http://www.pzwradom.pl')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Strona główna Okręgu Kielce</Text>
        </TouchableOpacity>
        {waters.map((water, index) => (
          <View key={index} style={styles.infoBox}>
            <Text style={styles.infoText}>
              <Text style={styles.bold}>Nazwa: </Text>{water.name}
            </Text>
            <Text style={styles.infoText}>
              <Text style={styles.bold}>Powiat: </Text>{water.district}
            </Text>
            <Text style={styles.infoText}>
              <Text style={styles.bold}>Powierzchnia: </Text>{water.area}
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

export default Kielce;
