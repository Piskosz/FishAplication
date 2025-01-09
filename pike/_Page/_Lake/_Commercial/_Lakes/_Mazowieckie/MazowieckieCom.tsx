import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

// Typ nawigacji dla ekranu
type RootStackParamList = {
    Sokolow: undefined;
    Radlinia: undefined;
    Bunkrami: undefined;
    Cegielnia: undefined;
};

type MazowieckieComProps = {
  navigation: StackNavigationProp<RootStackParamList>;
};

const MazowieckieCom: React.FC<MazowieckieComProps> = ({ navigation }) => {  // Użycie typów props
  const [selectedRegion, setSelectedRegion] = useState(null);

  const regions = [
    { name: 'Łowisko Sokolow', screen: 'Sokolow' as keyof RootStackParamList },
    { name: 'Łowisko Radlinia', screen: 'Radlinia' as keyof RootStackParamList },
    { name: 'Łowisko pod Bunkrami', screen: 'Bunkrami' as keyof RootStackParamList },
    { name: 'Łowisko Cegielnia', screen: 'Cegielnia' as keyof RootStackParamList },
  ];
  
  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Najlepsze Łowiska Komercyjne w Mazowieckim</Text>
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

export default MazowieckieCom;
