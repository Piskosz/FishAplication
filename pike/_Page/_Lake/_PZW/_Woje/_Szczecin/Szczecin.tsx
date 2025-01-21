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

const Szczecin = () => {
    const waters = [
      {
        name: 'Rzeka Odra',
        description: 'Największa rzeka przepływająca przez Szczecin. Występują tu sandacze, sumy oraz szczupaki. Idealne miejsce do wędkowania spinningowego.',
        type: 'Zachodniopomorskie / Rzeki nizinne / Okręg PZW Szczecin / Rzeka Odra',
      },
      {
        name: 'Jezioro Dąbie',
        description: 'Duży akwen wodny o powierzchni ponad 50 km2, popularny wśród wędkarzy polujących na okonie, szczupaki i leszcze.',
        type: 'Zachodniopomorskie / Jeziora / Okręg PZW Szczecin / Jezioro Dąbie',
      },
      {
        name: 'Kanał Parnicki',
        description: 'Kanał o spokojnym nurcie, gdzie często można spotkać wędkarzy łowiących leszcze i okonie.',
        type: 'Zachodniopomorskie / Kanały / Okręg PZW Szczecin / Kanał Parnicki',
      },
      {
        name: 'Zalew Szczeciński',
        description: 'Rozległy zalew, w którym można łowić różne gatunki ryb, od płoci po sandacze. Popularne miejsce rekreacyjne.',
        type: 'Zachodniopomorskie / Zalewy / Okręg PZW Szczecin / Zalew Szczeciński',
      },
      {
        name: 'Stawy w Parku Kasprowicza',
        description: 'Małe stawy miejskie, gdzie można złowić karpie, liny i płocie. Idealne miejsce dla początkujących wędkarzy.',
        type: 'Zachodniopomorskie / Stawy miejskie / Okręg PZW Szczecin / Stawy miejskie',
      },
      {
        name: 'Rzeka Gowienica wraz z dopływami',
        description: '',
        type: 'Rzeki',
      },
      {
        name: 'Rzeka Gunica',
        description: '',
        type: 'Rzeki',
      },
      {
        name: 'Rzeka Ina od rozwidlenia z rzeką Pęzinka do jazu w miejscowości Recz',
        description: '',
        type: 'Rzeki',
      },
      {
        name: 'Rzeka Ina od jazu w miejscowości Recz do mostu kolejowego w Goleniowie wraz z dopływami',
        description: 'Mała Ina, Reczyca (Rzeczyca), Małka, Wiśniówka',
        type: 'Rzeki',
      },
      {
        name: 'Rzeka Ina od mostu kolejowego w Goleniowie do ujścia',
        description: '',
        type: 'Rzeki',
      },
      {
        name: 'Rzeka Krąpiel powiat stargardzki',
        description: '',
        type: 'Rzeki',
      },
      {
        name: 'Rzeka Krępa (Krampa) powiat goleniowski',
        description: '',
        type: 'Rzeki',
      },
      {
        name: 'Rzeka Łarpia + cieki Gręziniec, Skolwinka, Grzybnica, dopływ z polderu Policko',
        description: '',
        type: 'Rzeki',
      },
      {
        name: 'Rzeka Mołstowa wraz z dopływami',
        description: '',
        type: 'Rzeki',
      },
      {
        name: 'Rzeka Niemica od jeziora Okonie do ujścia do rzeki Świniec wraz z dopływami',
        description: '',
        type: 'Rzeki',
      },
      {
        name: 'Rzeka Piaskowa od jeziora Piaski do ujścia do rzeki Rega',
        description: '',
        type: 'Rzeki',
      },
      {
        name: 'Rzeka Płonia od jeziora Klasztorne do mostu przy ulicy Przestrzennej w Szczecinie',
        description: '',
        type: 'Rzeki',
      },
      {
        name: 'Rzeka Rega od Prusinowa do Reska + rzeka Brzeźnicka Węgorza',
        description: 'Od osi jazu młyna w miejscowości Węgorsko i Reska Węgorza',
        type: 'Rzeki',
      },
      {
        name: 'Rzeka Rega od Reska do elektrowni wodnej w Lisowie',
        description: 'Rzeka Ukleja, Sąpólna, Łosośnica, Dobra',
        type: 'Rzeki',
      },
      {
        name: 'Rzeka Rega od elektrowni Lisowo do mostu drogowego na trasie S6',
        description: 'Rzeka Rekowa, Gardominka',
        type: 'Rzeki',
      },
      {
        name: 'Rzeka Rega od elektrowni Rejowice do ujścia wraz z dopływami',
        description: 'Z wyłączeniem rzeki Mołstowa',
        type: 'Rzeki',
      },
      {
        name: 'Rzeka Słubia od jeziora Morzycko do Zbiornika Dolnego Moryń Dwór',
        description: '',
        type: 'Rzeki',
      },
      {
        name: 'Rzeka Stepnica wraz z dopływami',
        description: '',
        type: 'Rzeki',
      },
      {
        name: 'Rzeka Stobnica od jeziora Stobno do ujścia do rzeki Iny',
        description: 'Rzeka Wardynka',
        type: 'Rzeki',
      },
      {
        name: 'Rzeka Stuchowska Struga',
        description: '',
        type: 'Rzeki',
      },
      {
        name: 'Rzeka Świniec',
        description: '',
        type: 'Rzeki / Kanały',
      },
      {
        name: 'Rzeka Tywa od jazu w Trzaskach do mostu na trasie Gryfino – Widuchowa',
        description: '',
        type: 'Rzeki',
      },
      {
        name: 'Rzeka Wołczenica wraz z dopływami',
        description: '',
        type: 'Rzeki',
      },
      {
        name: 'Kanały Międzyodrza w granicach obwodu nr 5',
        description: '',
        type: 'Kanały',
      },
      {
        name: 'Kanał Gąsierzyński, Piaskowy, Świętowicki, Kopicki, Żarnowski, Czarnociński, Smięć, Okrężny, Łączyna oraz Koszewski',
        description: '',
        type: 'Kanały',
      },
      {
        name: 'Kanały Święta, gmina Goleniów',
        description: '',
        type: 'Kanały',
      },
      {
        name: 'Zbiornik Dolny Moryń Dwór, gmina Moryń',
        description: '',
        type: 'Zbiorniki',
      },
      {
        name: 'Zbiornik Likowo (Lisowo), gmina Płoty, powiat gryficki',
        description: '',
        type: 'Zbiorniki',
      },
      {
        name: 'Zbiornik Rejowice, gmina Gryfice, gmina Płoty, powiat gryficki',
        description: '',
        type: 'Zbiorniki',
      },
      {
        name: 'Zbiornik Sicina I*, gmina Pyrzyce',
        description: '',
        type: 'Zbiorniki',
      },
      {
        name: 'Jezioro Dąbie',
        description: 'Duży akwen wodny o powierzchni ponad 50 km2, popularny wśród wędkarzy polujących na okonie, szczupaki i leszcze.',
        type: 'Zachodniopomorskie / Jeziora / Okręg PZW Szczecin / Jezioro Dąbie',
      },
      {
        name: 'Kanał Parnicki',
        description: 'Kanał o spokojnym nurcie, gdzie często można spotkać wędkarzy łowiących leszcze i okonie.',
        type: 'Zachodniopomorskie / Kanały / Okręg PZW Szczecin / Kanał Parnicki',
      },
      {
        name: 'Zalew Szczeciński',
        description: 'Rozległy zalew, w którym można łowić różne gatunki ryb, od płoci po sandacze. Popularne miejsce rekreacyjne.',
        type: 'Zachodniopomorskie / Zalewy / Okręg PZW Szczecin / Zalew Szczeciński',
      },
      {
        name: 'Stawy w Parku Kasprowicza',
        description: 'Małe stawy miejskie, gdzie można złowić karpie, liny i płocie. Idealne miejsce dla początkujących wędkarzy.',
        type: 'Zachodniopomorskie / Stawy miejskie / Okręg PZW Szczecin / Stawy miejskie',
      },
      {
        name: 'Jezioro Barnkowskie',
        description: 'Jezioro położone w gminie Chojna.',
        type: 'Zachodniopomorskie / Jeziora / Okręg PZW Szczecin / Jezioro Barnkowskie',
      },
      {
        name: 'Jezioro Bartoszewo',
        description: 'Jezioro położone w gminie Police.',
        type: 'Zachodniopomorskie / Jeziora / Okręg PZW Szczecin / Jezioro Bartoszewo',
      },
      {
        name: 'Jezioro Białe (Kiczarowo)',
        description: 'Jezioro położone w gminie Stargard.',
        type: 'Zachodniopomorskie / Jeziora / Okręg PZW Szczecin / Jezioro Białe (Kiczarowo)',
      },
      {
        name: 'Jezioro Biały Zdrój (Strzemielskie)',
        description: 'Jezioro w gminie Łobez, wraz z Kanałem Radowo-Strzemiele.',
        type: 'Zachodniopomorskie / Jeziora / Okręg PZW Szczecin / Jezioro Biały Zdrój (Strzemielskie)',
      },
      {
        name: 'Jezioro Bielińskie Wielkie (Bielin Duży)',
        description: 'Jezioro położone w gminie Moryń.',
        type: 'Zachodniopomorskie / Jeziora / Okręg PZW Szczecin / Jezioro Bielińskie Wielkie (Bielin Duży)',
      },
      {
        name: 'Jezioro Bliźniaki',
        description: 'Jezioro położone w gminie Stargard.',
        type: 'Zachodniopomorskie / Jeziora / Okręg PZW Szczecin / Jezioro Bliźniaki',
      },
      {
        name: 'Jezioro Brzezina',
        description: 'Jezioro położone w gminie Dolice.',
        type: 'Zachodniopomorskie / Jeziora / Okręg PZW Szczecin / Jezioro Brzezina',
      },
    ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Okręg Szczecin</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('http://www.pzwszczecin.pl/')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Strona główna Okręgu Szczecin</Text>
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

export default Szczecin;
