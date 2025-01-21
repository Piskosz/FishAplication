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

const Koszalin = () => {
  const waters = [
    {
      name: 'Rosnowskie',
      description: '189,1 ha, Zakaz używania silników spalinowych, w okresie od 1.04. do 30.09. Górny wymiar okonia – 45cm.',
      type: 'Manowo / Łowisko Rosnowskie',
    },
    {
      name: 'Hajka',
      description: '100,9 ha, Zakaz używania silników spalinowych, w okresie od 01.04. do 30.09.',
      type: 'Świeszyno / Łowisko Hajka',
    },
    {
      name: 'Czaple',
      description: '6,78 ha, Zakaz używania silników spalinowych.',
      type: 'Manowo / Łowisko Czaple',
    },
    {
      name: 'Buszynko',
      description: '1,96 ha, Zakaz używania silników spalinowych.',
      type: 'Manowo / Łowisko Buszynko',
    },
    {
      name: 'Wyszewo Duże',
      description: '4,41 ha, Zakaz używania silników spalinowych.',
      type: 'Manowo / Łowisko Wyszewo Duże',
    },
    {
      name: 'Wyszewo Małe',
      description: '1,7 ha, Zakaz używania silników spalinowych.',
      type: 'Manowo / Łowisko Wyszewo Małe',
    },
    {
      name: 'Rozworowskie',
      description: '2,14 ha, Zakaz używania silników spalinowych.',
      type: 'Manowo / Łowisko Rozworowskie',
    },
    {
      name: 'Ostrowiec',
      description: '47,76 ha, Zakaz używania silników spalinowych, Zakaz połowu ze środków pływających w okresie od 1.01 do 31.05.',
      type: 'Malechowo / Łowisko Ostrowiec',
    },
    {
      name: 'Cetuń (Wielkie)',
      description: '26,03 ha, Zakaz połowu ze środków pływających w okresie od 1 stycznia do 31 maja oraz w porze nocnej przez cały rok.',
      type: 'Polanów / Łowisko Cetuń (Wielkie)',
    },
    {
      name: 'Niedalino',
      description: '11,01 ha, Zakaz połowu ze środków pływających.',
      type: 'Świeszyno / Łowisko Niedalino',
    },
    {
      name: 'Jezioro II',
      description: '3,88 ha, Zakaz używania silników spalinowych.',
      type: 'Polanów / Łowisko Jezioro II',
    },
    {
      name: 'Jeziorko I',
      description: '4,9 ha, Zakaz używania silników spalinowych.',
      type: 'Polanów / Łowisko Jeziorko I',
    },
    {
      name: 'Płociszko',
      description: '14,21 ha, Zakaz używania silników spalinowych.',
      type: 'Polanów / Łowisko Płociszko',
    },
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Okręg Koszalin</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('http://www.pzwkoszalin.pl/')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Strona główna Okręgu Koszalin</Text>
        </TouchableOpacity>
        {waters.map((water, index) => (
          <View key={index} style={styles.infoBox}>
            <Text style={styles.infoText}>
              <Text style={styles.bold}>Nazwa: </Text>{water.name}
            </Text>
            <Text style={styles.infoText}>
              <Text style={styles.bold}>Opis: </Text>{water.description}
            </Text>
            <Text style={styles.infoText}>
              <Text style={styles.bold}>Typ: </Text>{water.type}
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

export default Koszalin;
