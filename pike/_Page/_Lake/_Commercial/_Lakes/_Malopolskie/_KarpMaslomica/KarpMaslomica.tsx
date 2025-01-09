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

type KarpMaslomiacaProps = {
  navigation: NavigationProp<any, any>;
};

const KarpMaslomiaca: React.FC<KarpMaslomiacaProps> = ({ navigation }) => {
  const regulations = [
    "Łowisko Karp Masłomiąca czynne przez cały rok (z wyjątkiem okresu, gdy zbiornik jest skuty lodem).",
    "Łowisko znajduje się w miejscowości Masłomiąca, województwo Małopolskie.",
    "Występujące gatunki ryb: Amur, Karp, Lin, Jesiotr, Karaś, Szczupak, Okoń, Płoć, Wzdręga.",
    "Powierzchnia łowiska: 2 ha.",
    "Głębokość łowiska: 2,5-3,5 m, średnia głębokość 3 m, dno bez zaczepów.",
    "Łowisko posiada 35 stanowisk wędkarskich, z możliwością rozbicia namiotu i ustawienia przyczepy campingowej.",
    "Dostępne 6 miejsc do ustawienia przyczepy z możliwością korzystania z prądu.",
    "Na łowisku obowiązują limity dobowego oraz sezonowego połowu ryb.",
    "Wymagane akcesoria: mata karpiowa lub kołyska, podbierak o rozstawie ramion min. 80 cm, wyhaczacz.",
    "Metody połowu: spinning, feeder, spławik, grunt, metoda karpiowa.",
    "W łowisku pływają karpie i amury powyżej 10 kg, a także ryby powyżej 20 kg. Zaplanowane jest dorybienie okazami powyżej 30 kg.",
    "Łowisko oferuje możliwość zakupu karnetów rocznych z pierwszeństwem w rezerwacji terminów weekendowych.",
    "Nie jest wymagane posiadanie karty wędkarskiej.",
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Łowisko „Karp Masłomiąca”</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://znajdzlowisko.pl/lowisko-karp-maslomiaca')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Strona internetowa Łowisko Karp Masłomiąca</Text>
        </TouchableOpacity>

        <Text style={styles.subtitle}>Województwo: Małopolskie</Text>
        <Text style={styles.subtitle}>Miejscowość: Masłomiąca</Text>

        <Text style={styles.subtitle}>Regulamin łowiska:</Text>
        {regulations.map((rule, index) => (
          <View key={index} style={styles.infoBox}>
            <Text style={styles.infoText}>{rule}</Text>
          </View>
        ))}

        <TouchableOpacity
          onPress={() => navigation.navigate('Map', {
            initialLocation: { lat: 50.1, lng: 19.9 }, // Współrzędne dla Masłomiący
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

export default KarpMaslomiaca;
