import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Krosno: undefined;
  Przemysl: undefined;
  Rzeszow: undefined;
  Tarnobrzeg: undefined;
  Szczecin: undefined;
  Koszalin: undefined;
  GorzowWielkopolski: undefined;
  ZielonaGora: undefined;
  Poznan: undefined;
  JeleniaGora: undefined;
  Walbrzych: undefined;
  Legnica: undefined;
  Slupsk: undefined;
  Gdansk: undefined;
  Bydgoszcz: undefined;
  Konin: undefined;
  Kalisz: undefined;
  Opole: undefined;
  Elblag: undefined;
  Olsztyn: undefined;
  Suwalki: undefined;
  Bialystok: undefined;
  Torun: undefined;
  Ciechanow: undefined;
  Mazowieckie: undefined;
  BialaPodlaska: undefined;
  Siedlce: undefined;
  Sieradz: undefined;
  PiotrkowTrybunalski: undefined;
  Radom: undefined;
  Lublin: undefined;
  Chełm: undefined;
  Czestochowa: undefined;
  Kielce: undefined;
  Zamosc: undefined;

};

type FishingMapsNavigationProp = StackNavigationProp<RootStackParamList>;

type Props = {
  navigation: FishingMapsNavigationProp;
};

const PZWMaps: React.FC<Props> = ({ navigation }) => {
  const regions: { name: string; screen: keyof RootStackParamList }[] = [
    { name: 'Krosno', screen: 'Krosno' },
    { name: 'Przemysl', screen: 'Przemysl' },
    { name: 'Rzeszow', screen: 'Rzeszow' },
    { name: 'Tarnobrzeg', screen: 'Tarnobrzeg' },
    { name: 'Szczecin', screen: 'Szczecin' },
    { name: 'Koszalin', screen: 'Koszalin' },
    { name: 'GorzowWielkopolski', screen: 'GorzowWielkopolski' },
    { name: 'ZielonaGora', screen: 'ZielonaGora' },
    { name: 'Poznan', screen: 'Poznan' },
    { name: 'JeleniaGora', screen: 'JeleniaGora' },
    { name: 'Walbrzych', screen: 'Walbrzych' },
    { name: 'Legnica', screen: 'Legnica' },
    { name: 'Slupsk', screen: 'Slupsk' },
    { name: 'Gdansk', screen: 'Gdansk' },
    { name: 'Bydgoszcz', screen: 'Bydgoszcz' },
    { name: 'Konin', screen: 'Konin' },
    { name: 'Kalisz', screen: 'Kalisz' },
    { name: 'Opole', screen: 'Opole' },
    { name: 'Elblag', screen: 'Elblag' },
    { name: 'Olsztyn', screen: 'Olsztyn' },
    { name: 'Suwalki', screen: 'Suwalki' },
    { name: 'Bialystok', screen: 'Bialystok' },
    { name: 'Torun', screen: 'Torun' },
    { name: 'Ciechanow', screen: 'Ciechanow' },
    { name: 'Mazowieckie', screen: 'Mazowieckie' },
    { name: 'BialaPodlaska', screen: 'BialaPodlaska' },
    { name: 'Siedlce', screen: 'Siedlce' },
    { name: 'Sieradz', screen: 'Sieradz' },
    { name: 'PiotrkowTrybunalski', screen: 'PiotrkowTrybunalski' },
    { name: 'Radom', screen: 'Radom' },
    { name: 'Lublin', screen: 'Lublin' },
    { name: 'Chełm', screen: 'Chełm' },
    { name: 'Czestochowa', screen: 'Czestochowa' },
    { name: 'Kielce', screen: 'Kielce' },
    { name: 'Zamosc', screen: 'Zamosc' },
  

  ];

  return (
    <ImageBackground source={require('./ryba2.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.headerText}>Wybierz Okręg</Text>

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
