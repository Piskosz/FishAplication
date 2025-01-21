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

const GorzowWielkopolski = () => {
  const waters = [
    { name: 'Mokre', description: '13,5 ha', type: 'Barlinek / Łowisko Mokre' },
    { name: 'Lubieszewko / Portki', description: '52,0 ha', type: 'Barlinek / Łowisko Lubieszewko' },
    { name: 'Moczydelskie', description: '27,8 ha', type: 'Barlinek / Łowisko Moczydelskie' },
    { name: 'Okunie / Okno', description: '39,5 ha', type: 'Barlinek / Łowisko Okunie' },
    { name: 'Zauklejowe', description: '4,8 ha', type: 'Barlinek / Łowisko Zauklejowe' },
    { name: 'Uklejowe', description: '12,9 ha', type: 'Barlinek / Łowisko Uklejowe' },
    { name: 'Barlineckie', description: '267,6 ha', type: 'Barlinek / Łowisko Barlineckie' },
    { name: 'Głębokie', description: '7,7 ha', type: 'Barlinek / Łowisko Głębokie' },
    { name: 'Lutówko', description: '9,8 ha', type: 'Barlinek / Łowisko Lutówko' },
    { name: 'Zdrojno', description: '20,7 ha', type: 'Bierzwnik / Łowisko Zdrojno' },
    { name: 'Zdroje', description: '20,3 ha', type: 'Bierzwnik / Łowisko Zdroje' },
    { name: 'Chłodnickie / Kile Mile', description: '13,8 ha', type: 'Bierzwnik / Łowisko Chłodnickie' },
    { name: 'Piaski', description: '72,6 ha', type: 'Bierzwnik / Łowisko Piaski' },
    { name: 'Bierzwnik / Kołecko', description: '202,9 ha', type: 'Bierzwnik / Łowisko Bierzwnik' },
    { name: 'Szypa', description: '17,8 ha', type: 'Bierzwnik / Łowisko Szypa' },
    { name: 'Chycina Duża', description: '73,0 ha', type: 'Bledzew / Łowisko Chycina Duża' },
    { name: 'Czyste / Cisie', description: '36,6 ha', type: 'Bledzew / Łowisko Czyste' },
    { name: 'Lipawki (Bledzewskie)', description: '23,3 ha', type: 'Bledzew / Łowisko Lipawki' },
    { name: 'Żwirownia Kaleńsko', description: '12,9 ha', type: 'Boleszkowice / Łowisko Żwirownia' },
    { name: 'Stradzewo', description: '8,3 ha', type: 'Choszczno / Łowisko Stradzewo' },
    { name: 'Sławęcin / Sulino', description: '21,9 ha', type: 'Choszczno / Łowisko Sławęcin' },
    { name: 'Klukom / Miejskie', description: '84,8 ha', type: 'Choszczno / Łowisko Klukom' },
    { name: 'Smoleń / Żeńsko', description: '29,6 ha', type: 'Choszczno / Łowisko Smoleń' },
    { name: 'Raduń', description: '93,6 ha', type: 'Choszczno / Łowisko Raduń' },
    { name: 'Glinik', description: '48,8 ha', type: 'Deszczno / Łowisko Glinik' },
    { name: 'Żwirownia Karnin', description: '17,0 ha', type: 'Deszczno / Łowisko Żwirownia' },
    { name: 'Ostrowieckie Duże', description: '107,4 ha', type: 'Dębno / Łowisko Ostrowieckie' },
    { name: 'Warnickie / Pomień', description: '33,2 ha', type: 'Dębno / Łowisko Warnickie' },
    { name: 'Smolnica / Czaple + Smolnica Mała', description: '30,7 ha', type: 'Dębno / Łowisko Smolnica' },
    { name: 'Miałkie', description: '17,7 ha', type: 'Dębno / Łowisko Miałkie' },
    { name: 'Lipowo / Miejskie', description: '13,7 ha', type: 'Dębno / Łowisko Lipowo' },
    { name: 'Duszatyń', description: '6,9 ha', type: 'Dębno / Łowisko Duszatyń' },
    { name: 'Słowin', description: '24,6 ha', type: 'Dobiegniew / Łowisko Słowin' },
    { name: 'Wołogoszcz Duży', description: '93,3 ha', type: 'Dobiegniew / Łowisko Wołogoszcz Duży' },
    { name: 'Wołogoszcz Średni', description: '16,1 ha', type: 'Dobiegniew / Łowisko Wołogoszcz Średni' },
    { name: 'Ostrowica Duża', description: '67,7 ha', type: 'Dobiegniew / Łowisko Ostrowica Duża' },
    { name: 'Dominikowo Wielkie', description: '70,9 ha', type: 'Drawno / Łowisko Dominikowo' },
    { name: 'Grażyna', description: '75,2 ha', type: 'Drawno / Łowisko Grażyna' },
    { name: 'Adamowo', description: '120,0 ha', type: 'Drawno / Łowisko Adamowo' },
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Okręg Gorzów Wielkopolski</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('http://www.pzwwg.pl/')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Strona główna Okręgu Gorzów Wielkopolski</Text>
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

export default GorzowWielkopolski;
