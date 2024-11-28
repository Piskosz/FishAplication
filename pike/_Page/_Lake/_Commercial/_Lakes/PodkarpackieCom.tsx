import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const PodkarpackieCom: React.FC = ({ navigation }) => {  // Dodajemy 'navigation' jako props
  const [selectedRegion, setSelectedRegion] = useState(null);

  const regions = [
    { name: 'Łowisko Czarna Sędziszowska', screen: 'CzarnaSedziszowska' },
    { name: 'Łowisko Stary San w Dynowie', screen: 'StarySanDynówCom' },
    { name: 'Łowisko Bobrowa Dolina', screen: 'BobrowaDolinaCom' },
    { name: 'Łowisko Rybackie Krzemienna', screen: 'KrzemiennaCom' },
    { name: 'Łowisko Rzemień', screen: 'RzemieńCom' },
    { name: 'Łowisko Łopuszka Wielka', screen: 'ŁopuszkaWielkaCom' },
    { name: 'Łowisko Sieniawa', screen: 'SieniawaCom' },
    { name: 'Łowisko Przeworsk', screen: 'PrzeworskCom' },
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Najlepsze Łowiska Komercyjne na Podkarpaciu</Text>
        </View>

        <ScrollView style={styles.buttonList}>
          {regions.map((region, index) => (
            <TouchableOpacity
              key={index}
              style={styles.button}
              onPress={() => navigation.navigate(region.screen)}  // Na kliknięcie nawigacja do ekranu
            >
              <Text style={styles.buttonText}>{region.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {selectedRegion && (
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>Wybrane łowisko: {selectedRegion.name}</Text>
          </View>
        )}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 50,
    paddingBottom: 20,
  },
  headerContainer: {
    alignItems: 'center',
  },
  headerText: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonList: {
    width: '100%',
    padding: 10,
  },
  button: {
    backgroundColor: 'rgba(0, 102, 0, 0.8)',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  infoBox: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  infoText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PodkarpackieCom;
