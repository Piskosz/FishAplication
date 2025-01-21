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

const ZielonaGora = () => {
  const waters = [
    { name: 'Bagier (Zalany)-glinian.', description: '3,8 ha', type: 'Wymiarki' },
    { name: 'Betonówka - wyrobisko', description: '2,8 ha', type: 'Tuplice' },
    { name: 'Betony Duże – 2 zb.', description: '2,6 ha', type: 'Nowogród Bob.' },
    { name: 'Białe – jezioro', description: '2,9 ha', type: 'Świebodzin' },
    { name: 'Bliźniaki – 2 wyrobiska', description: '2,0 ha', type: 'Trzebiel' },
    { name: 'Bobrze (Poźrzadło)-jez.', description: '8,3 ha', type: 'Łagów' },
    { name: 'Borek (Kosarzyn) – jez.', description: '64,3 ha', type: 'Gubin' },
    { name: 'Brodzkie – jezioro', description: '39,5 ha', type: 'Brody' },
    { name: 'Buczek I Staw-żwir.', description: '4,0 ha', type: 'Szprotawa' },
    { name: 'Buczek II Staw 3-żwir.', description: '2,1 ha', type: 'Szprotawa' },
    { name: 'Buczek Policyjny- żwir.', description: '4,3 ha', type: 'Szprotawa' },
    { name: 'Buczek Wojskowy- żwir.', description: '5,1 ha', type: 'Szprotawa' },
    { name: 'Buczyna - wyrobisko', description: '2,8 ha', type: 'Lubrza' },
    { name: 'Ciche (Majątkowe)- jez.', description: '3,2 ha', type: 'Łagów' },
    { name: 'Cegielnia Żagań', description: '3,0 ha', type: 'Żagań' },
    { name: 'Czarna Woda-jezioro', description: '7,6 ha', type: 'Łagów' },
    { name: 'Czyżykowo (Cisek)-jez.', description: '24,8 ha', type: 'Krosno Odrz.' },
    { name: 'Dąbie Duże-jezioro', description: '31,8 ha', type: 'Dąbie' },
    { name: 'Dąbie Małe-jezioro', description: '8,7 ha', type: 'Dąbie' },
    { name: 'Dęby Wielobłota-starorz.', description: '1,9 ha', type: 'Zabór' },
    { name: 'Dziarg-jezioro', description: '9,4 ha', type: 'Łagów' },
    { name: 'Dzika Ochla-zalew', description: '3,8 ha', type: 'Zielona Góra' },
    { name: 'Fadom I – żwirownia', description: '7,5 ha', type: 'Nowogród Bob.' },
    { name: 'Fadom II - żwirownia', description: '8,0 ha', type: 'Nowogród Bob.' },
    { name: 'Garbicz (Wielkie)-jez.', description: '34,2 ha', type: 'Torzym' },
    { name: 'Gądkowskie Duże – jez.', description: '102,2 ha', type: 'Torzym' },
    { name: 'Gęstowice Glin- 2 wyr.', description: '1,6 ha', type: 'Maszewo' },
    { name: 'Glibiel (Łochowice)- jez.', description: '21,7 ha', type: 'Krosno Odrz.' },
    { name: 'Głębokie k. Brodów-jez.', description: '5,8 ha', type: 'Brody Żarskie' },
    { name: 'Goszcza- jezioro', description: '54,1 ha', type: 'Lubrza' },
    { name: 'Grabinek- jez.', description: '7,7 ha', type: 'Bytnica' },
    { name: 'Graniczne- jez.', description: '42,8 ha', type: 'Maszewo' },
    { name: 'Grobla Tuplice- wyrob.', description: '5,8 ha', type: 'Tuplice' },
    { name: 'Gryżyce I- Staw 1 – żwir.', description: '3,9 ha', type: 'Żagań' },
    { name: 'Gryżyce I- Staw 2 – żwir.', description: '2,0 ha', type: 'Żagań' },
    { name: 'Gryżyce I- Staw 3 – żwir.', description: '3,9 ha', type: 'Żagań' },
    { name: 'Gryżyce II- Staw 4 – żwir.', description: '7,3 ha', type: 'Żagań' },
    { name: 'Gryżyce II- Staw 5 – żwir.', description: '15,7 ha', type: 'Żagań' },
    { name: 'Ilno (Torzymskie)- jez.', description: '11,8 ha', type: 'Torzym' },
    { name: 'Jańsko (Stróża)-jezioro', description: '99,9 ha', type: 'Bobrowice' },
    { name: 'Jatnik (Spalone)- jezioro', description: '9,0 ha', type: 'Czerwieńsk' },
    { name: 'Jasień Glinianka- 1 wyr.', description: '2,5 ha', type: 'Jasień' },
    { name: 'Jelito (Giełt) - jezioro', description: '50,5 ha', type: 'Krosno Odrz.' },
    { name: 'Jeziorko (Dzikie)-jez.', description: '4,8 ha', type: 'Torzym' },
    { name: 'Jeziorno-jez.', description: '9,4 ha', type: 'Nowa Sól' },
    { name: 'Kacza Górka- zalew', description: '3,4 ha', type: 'Nowa Sól' },
    { name: 'Karasienko -jez.', description: '19,0 ha', type: 'Torzym' },
    { name: 'Karaś - zalew', description: '12,6 ha', type: 'Lubsko' },
    { name: 'Klenica-starorzecze', description: '2,7 ha', type: 'Bojadła' },
    { name: 'Kochanowo- jezioro', description: '14,9 ha', type: 'Now' },
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Okręg Zielona Góra</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('http://www.pzwwg.pl/')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Strona główna Okręgu Zielona Góra</Text>
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
    subtitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white',
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
    bold: {
      fontWeight: 'bold',
    },
  });

export default ZielonaGora;
