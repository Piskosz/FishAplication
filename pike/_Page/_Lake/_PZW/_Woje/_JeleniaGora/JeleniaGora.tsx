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

const JeleniaGora = () => {
  const waters = [
    { name: 'Podkowa', description: 'N/A', type: 'Żwirownie', fishingBoat: 'nie', district: 'Bolesławiec', fishingRestrictions: 'N/A', dateRestrictions: '' },
    { name: 'PB Wojanów', description: 'N/A', type: 'Żwirownie', fishingBoat: 'tak', district: 'Jelenia Góra', fishingRestrictions: 'zakaz pobytu i amatorskiego połowu ryb wędką z wysp usytuowanych na zbiorniku', dateRestrictions: 'zakaz amatorskiego połowu ryb wędką na wschodnim i północnym brzegu zbiornika od 1 marca do 31 maja' },
    { name: 'P żwirownie Rakowice', description: 'N/A', type: 'Żwirownie', fishingBoat: 'tak', district: 'Lwówek Śląski', fishingRestrictions: 'zakaz amatorskiego połowu ryb wędką ze środków pływających', dateRestrictions: 'za wyjątkiem miejsc wyznaczonych' },
    { name: 'P1 Żarka n/Nysą', description: 'N/A', type: 'Żwirownie', fishingBoat: 'nie', district: 'Pieńsk', fishingRestrictions: 'zakaz pobytu i wędkowania z wysp usytuowanych na zbiorniku', dateRestrictions: '' },
    { name: 'P1 Trzebień Mały', description: 'N/A', type: 'Żwirownie', fishingBoat: 'nie', district: 'Bolesławiec', fishingRestrictions: 'zakaz biwakowania na cyplu oraz na zachodnim i północnym brzegu zbiornika', dateRestrictions: '' },
    { name: 'P1 Wizów – ul. Graniczna', description: 'N/A', type: 'Staw', fishingBoat: 'nie', district: 'Bolesławiec', fishingRestrictions: 'N/A', dateRestrictions: '' },
    { name: 'Stawy w Jeleniej Górze', description: 'N/A', type: 'Stawy', fishingBoat: 'nie', district: 'Jelenia Góra', fishingRestrictions: 'zakaz wjazdu i parkowania pojazdów silnikowych na groblach stawu, za wyjątkiem jednostek i osób uprawnionych', dateRestrictions: 'zakaz wędkowania od 01.01 do 30.06 w północno-zachodniej części zbiornika' },
    { name: 'Staw Balaton', description: 'N/A', type: 'Staw', fishingBoat: 'nie', district: 'Podgórzyn', fishingRestrictions: 'łowisko „Złów i wypuść”', dateRestrictions: 'Zezwolenia wymagane' },
    { name: 'Staw Cegielnia', description: 'N/A', type: 'Staw', fishingBoat: 'nie', district: 'Jelenia Góra', fishingRestrictions: 'zakaz wędkowania od 01.01 do 30.06 w północno-zachodniej części zbiornika', dateRestrictions: 'ze względu na tarlisko ryb i lęgowisko ptactwa wodnego' },
    { name: 'Zbiorniki Kamiennej Góry', description: 'N/A', type: 'Zbiornik', fishingBoat: 'tak', district: 'Kamienna Góra', fishingRestrictions: 'zakaz spinningowania od 01.01 do 31.05', dateRestrictions: '' },
    { name: 'Stawy w powiecie lubańskim', description: 'N/A', type: 'Stawy', fishingBoat: 'nie', district: 'Lubań', fishingRestrictions: 'wędkowanie dozwolone tylko w ciągu dnia', dateRestrictions: '' },
    { name: 'Zbiorniki w powiecie zgorzeleckim', description: 'N/A', type: 'Zbiornik', fishingBoat: 'tak', district: 'Zgorzelec', fishingRestrictions: 'N/A', dateRestrictions: '' },
    { name: 'Starorzecze Kwisy w Osieczowie', description: 'N/A', type: 'Starorzecze', fishingBoat: 'nie', district: 'Osiecznica', fishingRestrictions: 'N/A', dateRestrictions: '' },
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Okręg Jelenia Góra</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('http://www.pzwwg.pl/')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Strona główna Okręgu Jelenia Góra</Text>
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
            <Text style={styles.infoText}>
              <Text style={styles.bold}>Wędkowanie z łodzi: </Text>{water.fishingBoat}
            </Text>
            <Text style={styles.infoText}>
              <Text style={styles.bold}>Gmina: </Text>{water.district}
            </Text>
            <Text style={styles.infoText}>
              <Text style={styles.bold}>Ograniczenia: </Text>{water.fishingRestrictions}
            </Text>
            <Text style={styles.infoText}>
              <Text style={styles.bold}>Zanęty: </Text>{water.dateRestrictions}
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

export default JeleniaGora;
