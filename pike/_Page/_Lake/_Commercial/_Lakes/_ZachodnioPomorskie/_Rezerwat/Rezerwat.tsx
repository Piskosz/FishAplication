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

type LowiskoRezerwatProps = {
  navigation: NavigationProp<any, any>;
};

const Rezerwat: React.FC<LowiskoRezerwatProps> = ({ navigation }) => {
  const regulations = [
    "Łowisko Rezerwat położone jest w niedalekiej odległości od takich miejscowości jak Koszalin, Białogard czy Bobolice.",
    "Akwen oficjalnie będzie dostępny od sezonu 2024 (najpewniej od kwietnia), ale kto wie, czy właściciel nie pozwoli na testowanie wody wcześniej śmiałkom.",
    "Czynny cały rok, poza okresami, kiedy wodę skuje lód.",
    "Jest to stare rozlewisko, malowniczo położone i dzikie. Wkoło drzewa, pola i cisza.",
    "Głębokość maksymalna sięga 2,5 m. Dno muliste - momentami nawet 1 metr w dół mułu.",
    "Występuje roślinność podwodna - m.in. moczarka, ale i powalone drzewa, które pomagają karpiom podczas ucieczki.",
    "Na łowisku obowiązuje bezwzględna zasada „no kill” (złów i wypuść). Kompletny zakaz przetrzymywania ryb w workach!",
    "Do dyspozycji wędkarzy będą cztery stanowiska dwuosobowe. Do dwóch z nich będzie trzeba się przeprawić, jednak gwarantuje to kompletny spokój.",
    "Od 2024 na parkingu dostępne będą worki i maty wędkarskie oraz odkażacz, które będą ponumerowane zgodnie z numerem stanowiska.",
    "Można rozpalić grilla, ognisko natomiast jest zabronione.",
    "Dozwolony jest połów z tzw. wywózki - zarówno modelami RC, jak i ze środków pływających.",
    "Dozwoloną metodą połowu jest metoda włosowa, inne metody połowu po wcześniejszym uzgodnieniu.",
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')} // Możesz zastąpić to odpowiednim zdjęciem
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Łowisko Rezerwat</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://znajdzlowisko.pl/lowisko-rezerwat-nowa-karpiowa-woda/')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Strona internetowa Łowiska Rezerwat</Text>
        </TouchableOpacity>

        <Text style={styles.subtitle}>Województwo: Zachodniopomorskie</Text>
        <Text style={styles.subtitle}>Miejscowość: Lutówko</Text>



        <Text style={styles.subtitle}>Dodatkowe informacje:</Text>
        {regulations.map((rule, index) => (
          <View key={index} style={styles.infoBox}>
            <Text style={styles.infoText}>{rule}</Text>
          </View>
        ))}

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Map', {
              initialLocation: { lat: 53.015, lng: 15.205 }, // Przykładowe współrzędne dla Łowiska Rezerwat
            })
          }
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

export default Rezerwat;
