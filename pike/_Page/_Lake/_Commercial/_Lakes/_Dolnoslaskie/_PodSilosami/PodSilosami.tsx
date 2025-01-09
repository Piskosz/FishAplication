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
import { NavigationProp } from '@react-navigation/native';

type CastleLakesProps = {
  navigation: NavigationProp<any, any>;
};

const PodSilosami: React.FC<CastleLakesProps> = ({ navigation }) => {
  const regulations = [
    "Łowisko 'Pod Silosami' to zbiornik wędkarstwa no kill położony w województwie dolnośląskim, w miejscowości Grzymalin. To idealne miejsce dla wędkarzy szukających spokojnej okolicy i świetnych warunków do połowu.",
    "Na łowisku występują takie gatunki ryb jak karp, jesiotr, lin, amur, okoń, szczupak, sandacz, leszcz, płoć.",
    "Powierzchnia łowiska wynosi 6,5 ha, a wędkarze mogą łowić metodami gruntowymi i spławikowymi.",
    "Wędkarze muszą posiadać większy podbierak, matę (najlepiej z bokami uniemożliwiającymi wysunięcie się ryb), odkażacz oraz haczyki bezzadziorowe.",
    "Łowisko jest otwarte od maja 2021 roku, a woda jest typu 'no kill' (złów i wypuść).",
    "Na łowisku można łowić w nocy w wybranych terminach, a także rozbić namiot lub przyjechać z przyczepą campingową.",
    "Po dojeździe do kompleksu stawów należy kierować się bezpośrednio do żółtego SILOSA.",
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Łowisko Pod Silosami</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://www.facebook.com/%C5%81owisko-Pod-Silosami-w-Grzymalinie-106952018246337')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Facebook Łowisko Pod Silosami</Text>
        </TouchableOpacity>

        <Text style={styles.subtitle}>Województwo: Dolnośląskie</Text>
        <Text style={styles.subtitle}>Miejscowość: Grzymalin</Text>

        <Text style={styles.subtitle}>Regulamin łowiska:</Text>
        {regulations.map((rule, index) => (
          <View key={index} style={styles.infoBox}>
            <Text style={styles.infoText}>{rule}</Text>
          </View>
        ))}

        <TouchableOpacity
          onPress={() => navigation.navigate('Map', {
            initialLocation: { lat: 51.2314, lng: 16.2483 },
          })}
          style={styles.mapButton}
        >
          <Text style={styles.linkText}>Otwórz mapę łowiska</Text>
        </TouchableOpacity>
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
  mapButton: {
    backgroundColor: 'rgba(34, 139, 34, 0.7)',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  linkText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
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
});

export default PodSilosami;
