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

type ParadiseCarpLakeProps = {
  navigation: NavigationProp<any, any>;
};

const ParadiseCarpLake: React.FC<ParadiseCarpLakeProps> = ({ navigation }) => {
  const regulations = [
    "Łowisko Paradise Carp Lake to stara żwirownia położona w województwie kujawsko-pomorskim, w miejscowości Wielki Głęboczek. Jest to idealne miejsce dla wędkarzy szukających ciszy, spokoju i pięknej przyrody.",
    "Na łowisku występują takie gatunki ryb jak karp, szczupak, leszcz, lin, sandacz, płoć, węgorz, okoń.",
    "Powierzchnia łowiska wynosi 4 ha, a do dyspozycji wędkarzy przygotowano dwa wygrodzone stanowiska, każde z maksymalnie 6 wędkami na stanowisku.",
    "Łowisko jest czynne całodobowo od 1 marca do 30 listopada. Rezerwacji należy dokonywać telefonicznie.",
    "Obowiązuje zasada 'no kill' (złów i wypuść). Wędkarze muszą przestrzegać innych zasad, jak używanie maty, podbieraka karpiowego, odkażacza, pontonu oraz akcesoriów do wyhaczania ryb.",
    "Dopuszczono niewielką ilość mniejszych ryb, w tym wyselekcjonowane „perełki” o niespotykanym wyglądzie, a także ghost karpie.",
    "Najczęściej poławiane karpie osiągają wagę powyżej 14 kg, a rekord łowiska to karp o wadze 27,4 kg.",
    "Woda ma głębokość maksymalną 4,8 m. W łowisku znajdują się powalone drzewa, górki, zatoczki, kamienie oraz miejsca z roślinnością, co sprawia, że łowienie tutaj jest wyzwaniem.",
    "Zakaz rozpalania ogniska oraz parkowanie aut tylko w wyznaczonych miejscach na stanowiskach.",
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Łowisko Paradise Carp Lake</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://www.facebook.com/profile.php?id=61561784605619')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Facebook Paradise Carp Lake</Text>
        </TouchableOpacity>

        <Text style={styles.subtitle}>Województwo: Kujawsko-Pomorskie</Text>
        <Text style={styles.subtitle}>Miejscowość: Wielki Głęboczek</Text>

        <Text style={styles.subtitle}>Regulamin łowiska:</Text>
        {regulations.map((rule, index) => (
          <View key={index} style={styles.infoBox}>
            <Text style={styles.infoText}>{rule}</Text>
          </View>
        ))}

        <TouchableOpacity
          onPress={() => navigation.navigate('Map', {
            initialLocation: { lat: 53.2911, lng: 19.1067 },
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

export default ParadiseCarpLake;
