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

const Krosno = () => {
    const waters = [
      {
        name: 'Rzeka Ropa',
        description: 'Typowa rzeka górska, najczęstszą zdobyczą jest kleń, pstrąg i lipień. Z bardziej pospolitych drapieżników dominuje okoń, którego najczęściej łowi się w rozmiarach 15-25 cm, ale także często może trafić.',
        type: 'Podkarpackie / Rzeki górskie / Okręg PZW Krosno / Rzeka Ropa',
      },
      {
        name: 'Jezioro Solińskie - Zalew Soliński',
        description: 'Łowisko położone w dogodnym i łatwo dostępnym miejscu z pozoru nie przypominającym nawet czegoś obiecującego a jednak. Z zatoki przy tamie, z.',
        type: 'Podkarpackie / Zbiorniki zaporowe / Okręg PZW Krosno / Zbiornik Solina',
      },
      {
        name: 'San od Zwierzynia po ujście Hoczewki',
        description: 'Najlepszą polską wodą muchową, a na pewno najlepszą rzeką lipieniowo-pstrągową kontynentalnej Europy jest odcinek Sanu od wypływu wody z elektrowni w Zwierzyniu.',
        type: 'Podkarpackie / Rzeki górskie / Okręg PZW Krosno / Rzeka San (:od źródeł do ujścia Baryczki)',
      },
      {
        name: 'Solina',
        description: 'W naszej ofercie nie mogło zabraknąć największego w Polsce sztucznego zbiornika wodnego - Zalewu Solińskiego. Jego pojemność przekracza 474 mln m3 wody, powierzchnia - 22 km2, linia brzegowa ponad.',
        type: 'Podkarpackie / Zbiorniki zaporowe / Okręg PZW Krosno / Zbiornik Solina',
      },
      {
        name: 'Starorzecze Jasiołki',
        description: 'Podczas ulewnych deszczów rzeka Jasiołka (tutaj woda górska) wylewała do "dziury". W końcu woda tam została. Urosło dużo roślinności, wylewała również pobliska żwirownia - Łowisko Specjalne Kamieniec.',
        type: 'Podkarpackie / Rzeki górskie / Okręg PZW Krosno / Rzeka Jasiołka',
      },
      {
        name: 'Rzeka Osława - Darów',
        description: 'Rzeka Osława w miejscowości Darów. Jest to woda górska. Jej dno pokrywają głównie kamienie. Na pierwszy rzut oka jest bardzo płytka. Natomiast podczas jej zwiedzania możemy znaleźć kilka ciekawych.',
        type: 'Podkarpackie / Rzeki górskie / Okręg PZW Krosno / Rzeka Darowski Potok',
      },
      {
        name: 'Lubatówka - Miejsce Piastowe',
        description: 'Lubatówka to rzeka nizinna. Występują tu: pstrągi potokowe, okonie, płocie, strzeble potokowe, klenie, świnki i brzany. Leży ona w Miejscu Piastowym.',
        type: 'Podkarpackie / Rzeki średnie nizinne / Okręg PZW Krosno / Rzeka Lubatówka',
      },
      {
        name: 'Glinianka Balaton',
        description: 'Glinianka zwana Balatonem powstała zaraz po wojnie. Z wybieranej gliny powstawały najlepsze cegły w okolicy, aż wreszcie na dnie wyrobiska wybiły źródła i wypełniły nieckę.',
        type: 'Podkarpackie / Stawy, wyrobiska, starorzecza / Okręg PZW Krosno / Staw Balaton k.Krosna',
      },
      {
        name: 'Ropa - kraina pstrąga i lipienia',
        description: 'Kraina pstrąga i lipienia a także w dolnym biegu również ładnego klenia. W tym roku mój rekord to okaz o długość 55 cm złowiony na chruścika. Rzeka o bardzo urozmaiconym charakterze. Od wartkich nurtów.',
        type: 'Podkarpackie / Rzeki górskie / Okręg PZW Krosno / Rzeka Ropa',
      },
      {
        name: 'Rzeka Jasiołka - Nowa Wieś',
        description: 'Rzeka Jasiołka w miejscowości Nowa Wieś jest wodą górską. Zazwyczaj niezbyt głęboką i z szybszym nurtem, lecz możemy też znaleźć miejsca o wolnej, głębokiej wodzie.',
        type: 'Podkarpackie / Rzeki górskie / Okręg PZW Krosno / Rzeka Jasiołka',
      },
      {
        name: 'Stawy El Coyote',
        description: 'Stawy przy domkach "El Coyote". Przy domkach są dostępne dla wędkarzy trzy stawy: staw nr. 1, staw nr. 2, oraz staw nr. 3.',
        type: 'Podkarpackie / Rzeki górskie / Okręg PZW Krosno / Rzeka Hoczewka',
      },
      {
        name: 'Zapora w Krępnej',
        description: 'Zbiornik zaporowy w miejscowości Krępna w województwie Podkarpackim, w powiecie jasielskim.',
        type: 'Podkarpackie / Rzeki górskie / Okręg PZW Krosno / Rzeka Wisłoka :od źródeł-do Bukowej',
      },
      {
        name: 'Iwonicki Potok',
        description: 'Należy do Okręgu PZW Krosno. Ma charakter małej rzeczki nizinnej.',
        type: 'Podkarpackie / Rzeki średnie nizinne / Okręg PZW Krosno / Rzeka Iwonicki Potok',
      },
      {
        name: 'Rzeka Hoczewka',
        description: 'Rzeka Hoczewka jest dopływem Sanu. Przy ujściu siedzą duże głowacice i pstrągi.',
        type: 'Podkarpackie / Rzeki górskie / Okręg PZW Krosno / Rzeka Hoczewka',
      },
    ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Okręg Krosno</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('http://www.pzwkrosno.pl/')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Strona główna Okręgu Krosno</Text>
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

export default Krosno;
