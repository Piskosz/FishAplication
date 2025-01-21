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

const Torun = () => {
  const lakes = [
    { name: 'Bachotek', surface: 226.6, guardian: 'Polmo Brodnica', restrictions: 'Zakaz używania jednostek pływających o napędzie spalinowym.' },
    { name: 'Cielęta', surface: 18.8, guardian: 'KG Górzno', restrictions: 'Łowisko "No Kill - Złów i Wypuść" - dla ryb drapieżnych. Zakaz używania jednostek pływających o napędzie spalinowym.' },
    { name: 'Niskie Brodno', surface: 90.8, guardian: 'Rejon Brodnica', restrictions: 'Obręb ochronny na jeziorze Niskie Brodno: obręb obejmuje końcową część jeziora od strony północnej. Zakaz używania jednostek pływających o napędzie spalinowym.' },
    { name: 'Staw Ceglana', surface: 1.3, guardian: 'KM Brodnica', restrictions: 'Całorocznie wyłączone z wędkowania ze środków pływających. Zakaz przechowywania i zabierania amura z łowiska.' },
    { name: 'Staw (Ustronie)', surface: 1.2, guardian: 'KM Brodnica', restrictions: 'Całorocznie wyłączone z wędkowania ze środków pływających.' },
    { name: 'Szczuka', surface: 25.4, guardian: 'KM Brodnica', restrictions: 'Dopuszcza się wywożenie zanęt i przynęt do połowy szerokości jeziora. Zakaz używania jednostek pływających o napędzie spalinowym.' },
    { name: 'Jez. W M. Kominy', surface: 12.2, guardian: 'Brak', restrictions: 'Zakaz łowienia metodą trollingową.' },
    { name: 'Chojno', surface: 75.8, guardian: 'Brak', restrictions: 'Zakaz używania jednostek pływających o napędzie spalinowym. Zakaz łowienia metodą trollingową.' },
    { name: 'Czarne', surface: 11.9, guardian: 'Polmo Brodnica', restrictions: 'Zakaz używania jednostek pływających o napędzie spalinowym. Zakaz łowienia metodą trollingową.' },
    { name: 'Wichulec', surface: 6.1, guardian: 'Polmo Brodnica', restrictions: 'Całorocznie wyłączone z wędkowania ze środków pływających.' },
    { name: 'Grzywinek', surface: 21.5, guardian: 'Brak', restrictions: 'Zakaz używania jednostek pływających o napędzie spalinowym. Zakaz łowienia metodą trollingową.' },
    { name: 'Marek', surface: 8.0, guardian: 'Brak', restrictions: 'Zakaz używania jednostek pływających o napędzie spalinowym. Zakaz łowienia metodą trollingową.' },
    { name: 'Oleczno', surface: 32.0, guardian: 'Brak', restrictions: 'Zakaz używania jednostek pływających o napędzie spalinowym. Zakaz łowienia metodą trollingową.' },
    { name: 'Wądzyń', surface: 178.2, guardian: 'Brak', restrictions: 'Obręb ochronny na jeziorze Wądzyńskim: obręb obejmuje zachodnią część jeziora. Zakaz używania jednostek pływających o napędzie spalinowym.' },
    { name: 'Wysokie Brodno', surface: 90.1, guardian: 'Rejon Brodnica', restrictions: 'Obręb ochronny na jeziorze Wysokie Brodno: obręb obejmuje pas wody szerokości 100 m wokół wyspy. Zakaz używania jednostek pływających o napędzie spalinowym.' },
    { name: 'Ciche', surface: 112.5, guardian: 'Brak', restrictions: 'Zakaz używania jednostek pływających o napędzie spalinowym.' },
    { name: 'Dębno', surface: 63.5, guardian: 'Brak', restrictions: 'Zakaz używania jednostek pływających o napędzie spalinowym. Zakaz łowienia metodą trollingową.' },
    { name: 'Głowin', surface: 130.5, guardian: 'Brak', restrictions: 'Zakaz używania jednostek pływających o napędzie spalinowym.' },
    { name: 'Kochanka', surface: 4.6, guardian: 'Brak', restrictions: 'Zakaz używania jednostek pływających o napędzie spalinowym. Zakaz łowienia metodą trollingową.' },
    { name: 'Kurzyń', surface: 35.5, guardian: 'Brak', restrictions: 'Obręb ochronny dla szczupaka, karasia i lina na jeziorze Kurzyny. Zakaz używania jednostek pływających o napędzie spalinowym.' },
    { name: 'Łąki (Najmowo)', surface: 48.8, guardian: 'Przy Urzędzie Marszałkowskim Toruń', restrictions: 'Zakaz używania jednostek pływających o napędzie spalinowym. Zakaz łowienia metodą trollingową.' },
    { name: 'Małe Partęczyny', surface: 34.1, guardian: 'Brak', restrictions: 'Zakaz używania jednostek pływających o napędzie spalinowym. Zakaz łowienia metodą trollingową.' },
    { name: 'Mieliwo', surface: 81.8, guardian: 'Brak', restrictions: 'Obręb ochronny na jeziorze Mieliwo. Zakaz używania jednostek pływających o napędzie spalinowym.' },
    { name: 'Retno', surface: 22.7, guardian: 'Brak', restrictions: 'Łowisko „No Kill - Złów i Wypuść” - dla ryb drapieżnych. Zakaz używania jednostek pływających o napędzie spalinowym.' },
    { name: 'Robotno', surface: 55.4, guardian: 'Rejon Brodnica', restrictions: 'Zakaz używania jednostek pływających o napędzie spalinowym. Zakaz łowienia metodą trollingową.' }
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Okręg Toruń</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('http://www.pzw.torun.pl')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Strona główna Okręgu Toruń</Text>
        </TouchableOpacity>
        {lakes.map((lake, index) => (
          <View key={index} style={styles.infoBox}>
            <Text style={styles.infoText}>
              <Text style={styles.bold}>Nazwa: </Text>{lake.name}
            </Text>
            <Text style={styles.infoText}>
              <Text style={styles.bold}>Powierzchnia: </Text>{lake.surface} ha
            </Text>
            <Text style={styles.infoText}>
              <Text style={styles.bold}>Opiekun Wody: </Text>{lake.guardian}
            </Text>
            <Text style={styles.infoText}>
              <Text style={styles.bold}>Ograniczenia: </Text>{lake.restrictions}
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

export default Torun;