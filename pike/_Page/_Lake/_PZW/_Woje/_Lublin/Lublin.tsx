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

const Lublin = () => {
  const waters = [
    { name: 'Obwód rybacki rzeki Wisły Nr 1', description: 'Kraśnik, Opole Lubelskie, Puławy, Ryki - Od ujścia Sanny do ujścia rzeki Wieprz do Wisły' },
    { name: 'Obwód rybacki rzeki Wieprz Nr 4', description: 'Zamość, Krasnystaw, Świdnik, Łęczna - Rzeka Wieprz, Łabuńka, Wolica, Giełczew' },
    { name: 'Obwód rybacki rzeki Wieprz Nr 5', description: 'Łęczna, Lubartów, Ryki - Od ujścia Bystrzycy do ujścia Wieprza' },
    { name: 'Obwód rybacki rzeki Bystrzycy Nr 1', description: 'Lublin - Rzeka Bystrzyca, od źródeł do ujścia Krężniczanki' },
    { name: 'Obwód rybacki rzeki Bystrzycy Nr 2', description: 'Lublin - Bystrzyca, Krężniczanka, Zalew Zemborzycki' },
    { name: 'Obwód rybacki rzeki Bystrzycy Nr 3', description: 'Lublin - Bystrzyca, Ciemienga, do ujścia Wieprza' },
    { name: 'Obwód rybacki rzeki Bystrej Nr 1', description: 'Lublin, Puławy - Rzeka Bystrą, od źródeł do ujścia Wisły' },
    { name: 'Obwód rybacki rzeki Chodelki Nr 1', description: 'Kraśnik, Opole Lubelskie - Rzeka Chodelka, Urzędówka' },
    { name: 'Obwód rybacki rzeki Kurówka Nr 1', description: 'Lublin, Puławy - Rzeka Kurówka, od źródeł do ujścia Wisły' },
    { name: 'Obwód rybacki rzeki Tyśmienicy Nr 1', description: 'Parczew, Lubartów - Tyśmienica, Piwonia, Bystrzyca Północna' },
    { name: 'Obwód rybacki rzeki Wyżnicy Nr 1', description: 'Kraśnik, Opole Lubelskie - Rzeka Wyżnica, dopływy' },
    { name: 'Jezioro Białkowskie', description: 'Parczew, Pojezierze Łęczyńsko-Włodawskie' },
    { name: 'Jezioro Białe Uścimowskie', description: 'Lubartów, Pojezierze Łęczyńsko-Włodawskie' },
    { name: 'Jezioro Bikcze', description: 'Łęczna, Pojezierze Łęczyńsko-Włodawskie' },
    { name: 'Jezioro Dratów', description: 'Łęczna, Pojezierze Łęczyńsko-Włodawskie' },
    { name: 'Jezioro Maśluchowskie', description: 'Lubartów, Pojezierze Łęczyńsko-Włodawskie' },
    { name: 'Jezioro Piaseczno', description: 'Łęczna, Pojezierze Łęczyńsko-Włodawskie' },
    { name: 'Jezioro Uściwierz', description: 'Łęczna, Pojezierze Łęczyńsko-Włodawskie' },
    { name: 'Jezioro Krzcze', description: 'Łęczna, Pojezierze Łęczyńsko-Włodawskie' },
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Obwody Rybackie Lublin</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('http://www.pzw-lublin.com/')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Strona główna Okręgu Lublin</Text>
        </TouchableOpacity>
        {waters.map((water, index) => (
          <View key={index} style={styles.infoBox}>
            <Text style={styles.infoText}>
              <Text style={styles.bold}>Nazwa: </Text>{water.name}
            </Text>
            <Text style={styles.infoText}>
              <Text style={styles.bold}>Opis: </Text>{water.description}
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

export default Lublin;
