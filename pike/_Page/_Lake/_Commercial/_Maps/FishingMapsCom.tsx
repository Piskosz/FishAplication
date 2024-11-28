import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  'DolnośląskieCom': undefined;
  'Kujawsko-PomorskieCom': undefined;
  'LubelskieCom': undefined;
  'LubuskieCom': undefined;
  'ŁódzkieCom': undefined;
  'MałopolskieCom': undefined;
  'MazowieckieCom': undefined;
  'OpolskieCom': undefined;
  'PodkarpackieCom': undefined;
  'PodlaskieCom': undefined;
  'PomorskieCom': undefined;
  'ŚląskieCom': undefined;
  'ŚwiętokrzyskieCom': undefined;
  'Warmińsko-MazurskieCom': undefined;
  'WielkopolskieCom': undefined;
  'ZachodniopomorskieCom': undefined;
};

type FishingMapsComNavigationProp = StackNavigationProp<RootStackParamList>;

type Props = {
  navigation: FishingMapsComNavigationProp;
};

const FishingMapsCom: React.FC<Props> = ({ navigation }) => {
  const regions = [
    { name: 'Dolnośląskie', screen: 'DolnośląskieCom' },
    { name: 'Kujawsko-Pomorskie', screen: 'Kujawsko-PomorskieCom' },
    { name: 'Lubelskie', screen: 'LubelskieCom' },
    { name: 'Lubuskie', screen: 'LubuskieCom' },
    { name: 'Łódzkie', screen: 'ŁódzkieCom' },
    { name: 'Małopolskie', screen: 'MałopolskieCom' },
    { name: 'Mazowieckie', screen: 'MazowieckieCom' },
    { name: 'Opolskie', screen: 'OpolskieCom' },
    { name: 'Podkarpackie', screen: 'PodkarpakieCom' },
    { name: 'Podlaskie', screen: 'PodlaskieCom' },
    { name: 'Pomorskie', screen: 'PomorskieCom' },
    { name: 'Śląskie', screen: 'ŚląskieCom' },
    { name: 'Świętokrzyskie', screen: 'ŚwiętokrzyskieCom' },
    { name: 'Warmińsko-Mazurskie', screen: 'Warmińsko-MazurskieCom' },
    { name: 'Wielkopolskie', screen: 'WielkopolskieCom' },
    { name: 'Zachodniopomorskie', screen: 'ZachodniopomorskieCom' },
  ];

  return (
    <ImageBackground source={require('./ryba2.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.headerText}>Wybierz Województwo (Łowiska Komercyjne)</Text>

        <ScrollView style={styles.buttonList}>
          {regions.map((region, index) => (
            <TouchableOpacity
              key={index}
              style={styles.button}
              onPress={() => {
                if (region.screen) {
                  navigation.navigate(region.screen);
                }
              }}
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
    paddingHorizontal: 20,
    paddingVertical: 40,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonList: {
    flex: 1,
    width: '100%',
  },
  button: {
    backgroundColor: 'rgba(0, 0, 255, 0.6)',
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
});

export default FishingMapsCom;
