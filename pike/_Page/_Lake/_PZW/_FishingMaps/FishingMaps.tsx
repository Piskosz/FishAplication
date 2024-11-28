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

const FishingMaps: React.FC<Props> = ({ navigation }) => {
  const regions = [
    { name: 'Dolnośląskie', screen: 'Website' },
    { name: 'Kujawsko-Pomorskie', screen: 'Website' },
    { name: 'Lubelskie', screen: 'Website' },
    { name: 'Lubuskie', screen: 'Website' },
    { name: 'Łódzkie', screen: 'Website' },
    { name: 'Małopolskie', screen: 'Website' },
    { name: 'Mazowieckie', screen: 'Website' },
    { name: 'Opolskie', screen: 'Website' },
    { name: 'Podkarpackie', screen: 'Podkarpackie' },
    { name: 'Podlaskie', screen: 'Website' },
    { name: 'Pomorskie', screen: 'Website' },
    { name: 'Śląskie', screen: 'Website' },
    { name: 'Świętokrzyskie', screen: 'Website' },
    { name: 'Warmińsko-Mazurskie', screen: 'Website' },
    { name: 'Wielkopolskie', screen: 'Website' },
    { name: 'Zachodniopomorskie', screen: 'Website' },
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

export default FishingMaps;
