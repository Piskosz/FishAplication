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

const Mazowieckie = () => {
  const rivers = [
    { name: 'Warszawa Śródmieście', description: 'Jez. Góra' },
    { name: 'Warszawa Żoliborz', description: 'Wisła 3 od Mostu Śląsko – Dąbrowskiego do Łomianek (lewy brzeg)' },
    { name: 'Warszawa Mokotów', description: 'Narew 7 od mostu w Wierzbicy do ujścia Niestępówki, Wisła 3 od Mostu Śląsko - Dąbrowskiego do Siekierek (lewy brzeg)' },
    { name: 'Warszawa Praga Południe', description: 'Wisła 3 od m. Błota do Mostu Śląsko - Dąbrowskiego (prawy brzeg), Narew 7 od mostu w Zegrzu do Dębego, jez. Kamionkowskie' },
    { name: 'Warszawa Praga Północ', description: 'Wisła 3 od Mostu Śląsko - Dąbrowskiego do Jabłonnej (prawy brzeg), Jez. Pomocnia' },
    { name: 'Warszawa Wola', description: 'Narew 7 od mostu w Wierzbicy do ujścia Bugu oraz cofka Bugu do Barcic.' },
    { name: 'Warszawa Ochota', description: 'Jezioro Szczęśliwickie, stawy Koziorożca' },
    { name: 'Warszawa Wilanów', description: 'Wisła 3 od m. Zawady do m. Gasy (lewy brzeg), jez. Wilanowskie' },
    { name: 'Błonie', description: 'Glinianki w Błoniu, Utrata od m. Błonie do ujścia.' },
    { name: 'Góra Kalwaria', description: 'Jeziorka od m. Chylice (od mostu w m. Chylice) do rz. Wisła, Wisła 3 od mostu w Górze Kalwarii do m. Gassy (do ujścia Jeziorki w Obórkach) – lewy brzeg' },
    { name: 'Grodzisk Mazowiecki', description: 'Glinianki w Grodzisku.' },
    { name: 'Konstancin Jeziorna', description: 'Jeziorka od m. Chylice do ujścia do rz. Wisła, Wisła 3 od mostu w Górze Kalwarii do m. Gasy (do ujścia Jeziorki w Obórkach - lewy brzeg)' },
    { name: 'Legionowo', description: 'Narew 7 czasza zbiornika - od mostu w Nieporęcie do mostu w Zegrzu' },
    { name: 'Marki', description: 'Jezioro Głęboczek, Narew 7 - rz. Długa od m. Marki do ujścia' },
    { name: 'Nowy Dwór Mazowiecki', description: 'Narew 8 od m. Kikoły do ujścia, Wisła 3 od m. Skierdy do ujścia Narwi, Wisła 4 od ujścia Narwi do m. Smoszewo.' },
    { name: 'Otwock', description: 'Jez. Rokola, Wisła 3 od ujścia Pilicy do m. Góra Kalwaria (prawy brzeg), wspólnie z Kołem nr 96 Celestynów i k-25 Karczew' },
    { name: 'Piaseczno', description: 'Zalew AMO, stawy w Głoskowie, Jeziorka od m. Głuchów do m. Piaseczno (do mostu w m. Chylice)' },
    { name: 'Pruszków', description: 'Stawy Miejskie w Parku, Utrata 1 od źródeł do m. Błonie' },
    { name: 'Radzymin', description: 'Rządza 1 od m. Klembów do ujścia' },
    { name: 'Wołomin', description: 'Rzeka Rządza od mostu kolejowego na trasie Mińsk Mazowiecki – Tłuszcz do mostu drogowego w miejscowości Kraszew gm. Radzymin.' },
    { name: 'Zegrze Południe', description: 'Narew 7 czasza zbiornika od mostu w Zegrzu do ujścia Kanału Żerańskiego' },
    { name: 'Zielonka', description: 'Glinianki Zielonka' },
    { name: 'Pomiechówek', description: 'Narew 8 od Kikoł do ujścia' },
    { name: 'Karczew', description: 'Jezioro Moczydło i Jeziorko, Wisła 3 od mostu w m. Góra Kalwaria do Tamy Karczewskiej.' },
    { name: 'Józefów', description: 'Wisła 3 od Tamy Karczewskiej do granic Warszawy (prawy brzeg), Łacha Nowowiejska, Świder 1 od m. Wólka Mlądzka do ujścia.' },
    { name: 'Warszawa Ursynów', description: 'Wisła 3 od m. Zawady do Siekierek (lewy brzeg)' },
    { name: 'Kobyłka', description: 'Długa od m. Zielonka do m. Marki oraz Glinianki Zielonka (wspólnie z Kołem nr 23 w Zielonce)' },
    { name: 'Białobrzegi', description: 'Narew 7 czasza zbiornika od ujścia rz. Rządza do mostu w Nieporęcie' },
    { name: 'KGP "Okoń" Warszawa', description: 'Narew 6 od ujścia rz. Orzyc do m. Pułtusk wraz ze starorzeczem Gnojno.' },
    { name: 'Szt. Gen. WP Warszawa', description: 'Kanał Żerański od ujścia rz. Czarna do starorzecza Samica (wschodni brzeg)' },
    { name: 'AON Rembertów', description: 'Wisła 3 od Mostu Siekierkowskiego do Mostu Grota (prawa strona).' },
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Obwody Rybackie Mazowieckie</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('http://www.pzw.mazowieckie.pl')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Strona główna PZW Mazowieckie</Text>
        </TouchableOpacity>
        {rivers.map((river, index) => (
          <View key={index} style={styles.infoBox}>
            <Text style={styles.infoText}>
              <Text style={styles.bold}>Nazwa: </Text>{river.name}
            </Text>
            <Text style={styles.infoText}>
              <Text style={styles.bold}>Opis: </Text>{river.description}
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

export default Mazowieckie;
