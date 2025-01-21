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

const Walbrzych = () => {
  const waters = [
    { name: 'Staw ul. Kolejowa', area: '0,6 ha', district: 'Bystrzyca Kłodzka' },
    { name: 'Stawy Bystrzyca Zamenhofa x 3', area: '2,1 ha', district: 'Bystrzyca Kłodzka' },
    { name: 'Stawy Wilkanów', area: '4,0 ha', district: 'Bystrzyca Kłodzka' },
    { name: 'Staw Szewska', area: '2,8 ha', district: 'Bielawa' },
    { name: 'Zbiornik Poniatów', area: '3,7 ha', district: 'Wałbrzych' },
    { name: 'Stawy pożwirowe Byczeń-Bartniki', area: '85,8 ha', district: 'Kamieniec Ząbkowicki' },
    { name: 'Staw nr 1 Byczeń', area: '5,3 ha', district: 'Kamieniec Ząbkowicki' },
    { name: 'Stawy pożwirowe Pilce', area: '24,8 ha', district: 'Kamieniec Ząbkowicki' },
    { name: 'Stawy Leśna w Radkowie', area: '2,5 ha', district: 'Radków' },
    { name: 'Staw Bukowa', area: '1,2 ha', district: 'Szczytna' },
    { name: 'Stawy Sierpnica', area: '2,7 ha', district: 'Głuszyca' },
    { name: 'Stawy Leśna', area: '2,8 ha', district: 'Głuszyca' },
    { name: 'Staw Imbramowice', area: '6,3 ha', district: 'Żarów' },
    { name: 'Staw Kalno', area: '2,0 ha', district: 'Żarów' },
    { name: 'Staw Miejski Żarów', area: '4,7 ha', district: 'Żarów' },
    { name: 'Staw Cegielnia', area: '0,6 ha', district: 'Bielawa' },
    { name: 'Zbiornik Bratoszów', area: '5,6 ha', district: 'Pieszyce' },
    { name: 'Stawy Kudowa Zakrze', area: '2,7 ha', district: 'Kudowa Zdrój' },
    { name: 'Zalew Kudowa Zakrze', area: '8,2 ha', district: 'Kudowa Zdrój' },
    { name: 'Szalejów Dolny (Syntetyka)', area: '0,5 ha', district: 'Kłodzko' },
    { name: 'Stawy Wojciechowice (Kolejarz i Rzemieślnik)', area: '2,1 ha', district: 'Kłodzko' },
    { name: 'Korytów', area: '4,2 ha', district: 'Kłodzko' },
    { name: 'Jaszkowa Górna - Gaj', area: '1,0 ha', district: 'Kłodzko' },
    { name: 'Staw Komunalna', area: '0,5 ha', district: 'Świdnica' },
    { name: 'Stawy Szklarnia 1,2,3,4,5', area: '7,2 ha', district: 'Międzylesie' },
    { name: 'Staw Międzylesie', area: '1,7 ha', district: 'Międzylesie' },
    { name: 'Staw Dolnik', area: '0,9 ha', district: 'Międzylesie' },
    { name: 'Staw Niemcza', area: '2,0 ha', district: 'Niemcza' },
    { name: 'Stawy Ścinawka', area: '1,8 ha', district: 'Radków' },
    { name: 'Zalew Radków', area: '5,0 ha', district: 'Radków' },
    { name: 'Stawy Rusko', area: '3,6 ha', district: 'Strzegom' },
    { name: 'Stawy Rusko', area: '7,7 ha', district: 'Strzegom' },
    { name: 'Warszawianka', area: '2,2 ha', district: 'Świebodzice' },
    { name: 'Staw PKP', area: '0,7 ha', district: 'Wałbrzych' },
    { name: 'Staw Kasztanowa', area: '1,4 ha', district: 'Świebodzice' },
    { name: 'Grzędy Staw nr 1', area: '1,5 ha', district: 'Czarny Bór' },
    { name: 'Grzędy Staw nr 2', area: '1,5 ha', district: 'Czarny Bór' },
    { name: 'Stawy Nowa Ruda', area: '0,9 ha', district: 'Nowa Ruda' },
    { name: 'Zbiornik Gogołów', area: '1,3 ha', district: 'Świdnica' },
    { name: 'Glinianka Zagórze', area: '2,3 ha', district: 'Walim' },
    { name: 'Staw w Golińsku', area: '1,5 ha', district: 'Mieroszów' },
    { name: 'Staw Ziębice', area: '1,6 ha', district: 'Ziębice' },
    { name: 'Staw Przeworno / Strużyna', area: '0,6 ha', district: 'Przeworno' },
    { name: 'Staw w Srebrnej Górze', area: '2,5 ha', district: 'Stoszowice' },
    { name: 'Zalew Kamyki w Głuszycy Górnej', area: '3,0 ha', district: 'Głuszyca' },
    { name: 'Staw Miejski w Dusznikach', area: '0,7 ha', district: 'Duszniki Zdrój' },
    { name: 'Dobrocin', area: '3,9 ha', district: 'Dzierżoniów' },
    { name: 'Staw Leśny', area: '2,0 ha', district: 'Pieszyce' },
    { name: 'Staw Złotno', area: '2,5 ha', district: 'Szczytna' },
    { name: 'Stawy Nadbrzeżna', area: '1,9 ha', district: 'Stronie Śląskie' },
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Okręg Wałbrzych</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('http://www.pzwwg.pl/')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Strona główna Okręgu Wałbrzych</Text>
        </TouchableOpacity>
        {waters.map((water, index) => (
          <View key={index} style={styles.infoBox}>
            <Text style={styles.infoText}>
              <Text style={styles.bold}>Nazwa: </Text>{water.name}
            </Text>
            <Text style={styles.infoText}>
              <Text style={styles.bold}>Powierzchnia: </Text>{water.area}
            </Text>
            <Text style={styles.infoText}>
              <Text style={styles.bold}>Gmina: </Text>{water.district}
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

export default Walbrzych;
