import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Dolnośląskie: undefined;
  'Kujawsko-Pomorskie': undefined;
  Lubelskie: undefined;
  Lubuskie: undefined;
  Łódzkie: undefined;
  Małopolskie: undefined;
  Mazowieckie: undefined;
  Opolskie: undefined;
  Podkarpackie: undefined;
  Podlaskie: undefined;
  Pomorskie: undefined;
  Śląskie: undefined;
  Świętokrzyskie: undefined;
  'Warmińsko-Mazurskie': undefined;
  Wielkopolskie: undefined;
  Zachodniopomorskie: undefined;
};

type FishingMapsNavigationProp = StackNavigationProp<RootStackParamList>;

type Props = {
  navigation: FishingMapsNavigationProp;
};

const PZWMaps: React.FC<Props> = ({ navigation }) => {
  const regions: { name: string; screen: keyof RootStackParamList }[] = [
    { name: 'Dolnośląskie', screen: 'Website' },
    { name: 'Kujawsko-Pomorskie', screen: 'Kujawsko-Pomorskie' },
    { name: 'Lubelskie', screen: 'Lubelskie' },
    { name: 'Lubuskie', screen: 'Lubuskie' },
    { name: 'Łódzkie', screen: 'Łódzkie' },
    { name: 'Małopolskie', screen: 'Małopolskie' },
    { name: 'Mazowieckie', screen: 'Mazowieckie' },
    { name: 'Opolskie', screen: 'Opolskie' },
    { name: 'Podkarpackie', screen: 'Podkarpackie' },
    { name: 'Podlaskie', screen: 'Podlaskie' },
    { name: 'Pomorskie', screen: 'Pomorskie' },
    { name: 'Śląskie', screen: 'Śląskie' },
    { name: 'Świętokrzyskie', screen: 'Świętokrzyskie' },
    { name: 'Warmińsko-Mazurskie', screen: 'Warmińsko-Mazurskie' },
    { name: 'Wielkopolskie', screen: 'Wielkopolskie' },
    { name: 'Zachodniopomorskie', screen: 'Zachodniopomorskie' },
  ];

  return (
    <ImageBackground source={require('./ryba2.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.headerText}>Wybierz Województwo</Text>

        <ScrollView style={styles.buttonList}>
          {regions.map((region, index) => (
            <TouchableOpacity
              key={index}
              style={styles.button}
              onPress={() => {
                navigation.navigate(region.screen);
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

export default PZWMaps;
