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

const RekreacyjnePrzemkow: React.FC<CastleLakesProps> = ({ navigation }) => {
  const regulations = [
    "Łowisko Rekreacyjne Przemków to zbiornik wędkarstwa rekreacyjnego położony w województwie dolnośląskim, w miejscowości Łężce. To idealne miejsce dla wędkarzy szukających spokojnej okolicy i świetnych warunków do połowu.",
    "Na łowisku występują takie gatunki ryb jak karp, amur, jesiotr, pstrąg, tołpyga, lin, karaś.",
    "Łowisko składa się z kilku stawów, w tym karpiowego i pstrągowego.",
    "Wędkarze mogą łowić zarówno w dzień, jak i w nocy w wybrane weekendy, po wcześniejszym kontakcie telefonicznym.",
    "Łowisko jest czynne codziennie w sezonie, a poza sezonem (od jesieni do wiosny) tylko w weekendy.",
    "Na terenie łowiska dostępne są zanęty, przynęty oraz swojskie wyroby, takie jak wędliny i wędzone ryby.",
    "Nie jest wymagane posiadanie karty wędkarskiej, co sprawia, że jest to idealne miejsce dla amatorów wędkarstwa.",
    "Kontakt telefoniczny: 606 702 515.",
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Łowisko Rekreacyjne Przemków</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://www.facebook.com/%C5%81owisko-rekreacyjne-Przemk%C3%B3w-1369155713171796')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Facebook Łowisko Rekreacyjne Przemków</Text>
        </TouchableOpacity>

        <Text style={styles.subtitle}>Województwo: Dolnośląskie</Text>
        <Text style={styles.subtitle}>Miejscowość: Łężce</Text>

        <Text style={styles.subtitle}>Regulamin łowiska:</Text>
        {regulations.map((rule, index) => (
          <View key={index} style={styles.infoBox}>
            <Text style={styles.infoText}>{rule}</Text>
          </View>
        ))}

        <TouchableOpacity
          onPress={() => navigation.navigate('Map', {
            initialLocation: { lat: 51.5190, lng: 15.7840 }, // Wprowadź odpowiednie współrzędne
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

export default RekreacyjnePrzemkow;
