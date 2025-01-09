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

type KarperLakeProps = {
  navigation: NavigationProp<any, any>;
};

const KarperLake: React.FC<KarperLakeProps> = ({ navigation }) => {
  const regulations = [
    "Lowisko komercyjne Karper Lake polozone jest niedaleko takich miejscowosci jak: Lodz, Rzgow, Piotrkow Trybunalski, Lask czy Tuszyn.",
    "Akwen czynny od poczatku lutego do konca roku (w zaleznosci od warunkow atmosferycznych umozliwiajacych polow).",
    "Na lowisku obowiazuje zasada 'no kill' (zlow i wypusc).",
    "Jest to nie za duza, ale bardzo urokliwa woda. Lowisko zostalo przygotowane w 'angielskim stylu' i jest woda typowo rzutowa.",
    "Glebokosc akwenu waha sie w przedziale od 0,5m do 2,40m. Dno jest zroznicowane, wystepuja miejsca piaszczyste oraz place pokryte roslinnoscia.",
    "Rybostan, ktory zamieszkuje wode znajduje sie w przedziale od 5kg do powyzej 10+ (karp i amur). Dodatkowymi mieszkancami sa niewielkie ilosci jesiotrow oraz karpi koi.",
    "Dla wedkarzy przygotowano 7 stanowisk dwuosobowych z mozliwoscia rozbicia namiotu.",
    "Na terenie do dyspozycji jest WC oraz parking. Teren ogrodzony i monitorowany.",
    "W cenie oplaty za lowienie wedkarze dostaja maty oraz podbierak na uzytek na lowisku.",
    "Mozliwosc polowu metoda karpiowa i method feeder.",
    "Ognisko oraz grill mozna rozpalac jedynie w miejscach do tego wyznaczonych.",
    "Auta musza byc odstawione na wyznaczone miejsce parkingowe.",
    "Wedkarze musza posiadac oraz uzywac na lowisku: odkazacz, zylke karpiowa o minimalnej srednicy 0,30 oraz wedke z zapasem mocy.",
    "Blisko infrastruktura pomocna: sklepy, apteka, stacja benzynowa.",
    "Mozliwosc zakupu licencji rocznej lub wynajecia akwenu dla grupy czy jednej osoby.",
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Lowisko Karper Lake</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://www.facebook.com/karperlake')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Facebook Karper Lake</Text>
        </TouchableOpacity>

        <Text style={styles.subtitle}>Wojewodztwo: Lodzkie</Text>
        <Text style={styles.subtitle}>Miejscowosc: Tuszynek Majoracki</Text>

        <Text style={styles.subtitle}>Regulamin lowiska:</Text>
        {regulations.map((rule, index) => (
          <View key={index} style={styles.infoBox}>
            <Text style={styles.infoText}>{rule}</Text>
          </View>
        ))}

        <TouchableOpacity
          onPress={() => navigation.navigate('Map', {
            initialLocation: { lat: 51.6384, lng: 19.5246 },
          })}
          style={styles.mapButton}
        >
          <Text style={styles.linkText}>Otworz mape lowiska</Text>
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
  contact: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 20,
    textAlign: 'center',
  },
});

export default KarperLake;
