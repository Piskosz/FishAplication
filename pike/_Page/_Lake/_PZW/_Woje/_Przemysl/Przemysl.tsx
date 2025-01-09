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

const Przemysl = () => {
    const waters = [
        {
            "name": "San-Powiat jarosławski",
            "description": "Rzeka San, kręta z plażami i głębokimi rynnami, o zmiennym nurcie.",
            "type": "Rzeka średnia nizinna"
          },
          {
            "name": "Mleczka w Gniewczynie Łańcuckiej",
            "description": "Rzeka Mleczka, prawy dopływ Wisłoka, z rybami takimi jak płoć, szczupak, okonie.",
            "type": "Rzeka średnia nizinna"
          },
          {
            "name": "ZEK w Radymnie",
            "description": "Zbiornik ZEK, sztuczny zbiornik wodny, powstały na miejscu dawnego wyrobiska.",
            "type": "Zbiornik zaporowy"
          },
          {
            "name": "Ostrów- żwirownia k. Przemyśla",
            "description": "Staw Ostrów, pięć sztucznych zbiorników wodnych w miejscowości Ostrów.",
            "type": "Stawy, wyrobiska, starorzecza"
          },
          {
            "name": "Stary San (Hurko)",
            "description": "Odcinek Starego Sanu, zachowany dzięki głębokości, z pozostałościami dawnego koryta.",
            "type": "Stawy, wyrobiska, starorzecza"
          },
          {
            "name": "Rzeka San (Okolice Przemyśla)",
            "description": "Rzeka San, jedna z większych karpackich rzek o dużym znaczeniu gospodarczym.",
            "type": "Rzeka średnia nizinna"
          },
          {
            "name": "Zbiornik Czyste",
            "description": "Zbiornik Czyste, 8-hektarowy zbiornik wodny w sosnowych lasach.",
            "type": "Zbiornik zaporowy"
          },
          {
            "name": "Zbiorniki zaporowe Pełnatycze",
            "description": "Staw Pełnatycze, odcinek Sanu o mulistym dnie i drobnym żwirze.",
            "type": "Stawy, wyrobiska, starorzecza"
          },
          {
            "name": "Łowisko Horyniec Zdrój",
            "description": "Zbiornik Horyniec Zdrój, łowisko zarządzane przez Stowarzyszenie Wędkarskie 'AMUR'.",
            "type": "Zbiornik zaporowy"
          },
          {
            "name": "Łowisko Stawki",
            "description": "Urokliwe łowisko otoczone lasami, spokojne miejsce z odgłosami natury.",
            "type": "Zbiornik zaporowy"
          },
          {
            "name": "Radymno ZEK",
            "description": "Zbiornik Radymno ZEK, dawny wyrobisko żwirowe przekształcone w ośrodek wypoczynkowy.",
            "type": "Zbiornik zaporowy"
          },
          {
            "name": "Łowisko Kopanka",
            "description": "Malowniczo położone łowisko z widokiem na lasy i pobliskie wioski.",
            "type": "Stawy, wyrobiska, starorzecza"
          },
          {
            "name": "Rzeka Lubaczówka",
            "description": "Rzeka Lubaczówka, znana z dopływów i zróżnicowanego łowiska.",
            "type": "Rzeka średnia nizinna"
          },
          {
            "name": "Zbiornik Deszczownia",
            "description": "Zbiornik wodny, pierwotnie stworzony dla urządzeń nawadniających, zajmujący dużą powierzchnię.",
            "type": "Zbiornik zaporowy"
          },
          {
            "name": "Zbiornik przy Młynie",
            "description": "Zbiornik Pod Młynem w Lubaczowie, powstały na starym korycie rzeki Sołotwa.",
            "type": "Zbiornik zaporowy"
          },
          {
            "name": "Żwirownia Ostrów",
            "description": "Żwirownia w miejscowości Ostrów, 5 sztucznych zbiorników wodnych.",
            "type": "Stawy, wyrobiska, starorzecza"
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
           <Text style={styles.linkText}>Strona główna Okręgu Przemysl</Text>
         </TouchableOpacity>
 
         <Text style={styles.subtitle}>Łowiska w okręgu Przemysl:</Text>
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
 
 export default Przemysl;
 