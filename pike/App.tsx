import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomePage from './_Page/_Home/HomePage'; // Your home page component
import Callendar from './_Page/_Callendar/Callendar'; 
import Map from './_Page/_Lake/_Maps/Map'; 
import Notes from './_Page/_Notes/Notes';
import Profile from './_Page/_Profile/Profile';
import Wetter from './_Page/_Wetter/Wetter';
import Login from './_Page/_LoginRegistery/_Login/Login';
import Registry from './_Page/_LoginRegistery/_Registery/Registery';
import Fishing_Maps from './_Page/_Lake/_PZW/_PZWMaps/PZWMaps';
import WaterTypeChoice from './_Page/_Lake/WaterTypeChoice/WaterTypeChoice ';
import FishingMapsCom from './_Page/_Lake/_Commercial/_CommercialMaps/CommercialMaps';
import PodkarpackieCom from './_Page/_Lake/_Commercial/_Lakes/_Podkarpackie/PodkarpackieCom';
import CzarnaSedziszowska from './_Page/_Lake/_Commercial/_Lakes/_Podkarpackie/_CzarnaSedziszowska/CzarnaSedziszowska';
import RemindPassword from './_Page/_LoginRegistery/_Login/RemindPassword';
import Tarnobrzeg from './_Page/_Lake/_PZW/_Woje/_Tarnobrzeg/Tarnobrzeg';
import Krosno from './_Page/_Lake/_PZW/_Woje/_Krosno/Krosno';
import Rzeszow from './_Page/_Lake/_PZW/_Woje/_Rzeszow/Rzeszow';
import Przemysl from './_Page/_Lake/_PZW/_Woje/_Przemysl/Przemysl';
import Zgoda from './_Page/_Lake/_Commercial/_Lakes/_Podkarpackie/_Zgoda/Zgoda';
import Ranczo from './_Page/_Lake/_Commercial/_Lakes/_Podkarpackie/_RanczoNadJeziorem/Ranczo';
import StarySan from './_Page/_Lake/_Commercial/_Lakes/_Podkarpackie/_StarySan/StarySan';
import DolnoSlaskieCom from './_Page/_Lake/_Commercial/_Lakes/_Dolnoslaskie/DolnoSlaskieCom';
import CastleLakes from './_Page/_Lake/_Commercial/_Lakes/_Dolnoslaskie/_CastleLake/CasteLake';
import PodSilosami from './_Page/_Lake/_Commercial/_Lakes/_Dolnoslaskie/_PodSilosami/PodSilosami';
import RekreacyjnePrzemkow from './_Page/_Lake/_Commercial/_Lakes/_Dolnoslaskie/_RekreacyjnePrzemkow/RekreacyjnePrzemkow';
import BobrowaPrzystan from './_Page/_Lake/_Commercial/_Lakes/_Dolnoslaskie/_BobrowaPrzystan/BobrowaPrzystan';
import KujawskoPomorskieCom from './_Page/_Lake/_Commercial/_Lakes/_KujawskoPomorskie/KujawskoPomorskieCom';
import ParadiseCarpLake from './_Page/_Lake/_Commercial/_Lakes/_KujawskoPomorskie/_ParadiseCarpLake/ParadiseCarpLake';
import Niewiescin from './_Page/_Lake/_Commercial/_Lakes/_KujawskoPomorskie/_Niewiescin/Niewiescin';
import StawyDylewskie from './_Page/_Lake/_Commercial/_Lakes/_KujawskoPomorskie/_StawyDylewskie/StawyDylewskie';
import LodzkieCom from './_Page/_Lake/_Commercial/_Lakes/_Lodzkie/LodzkieCom';
import StrongCarpLake from './_Page/_Lake/_Commercial/_Lakes/_Lodzkie/_StrongCarpLake/StrongCarpLake';
import KarperLake from './_Page/_Lake/_Commercial/_Lakes/_Lodzkie/_KarperLake/KarperLake';
import MlynekTuszyn from './_Page/_Lake/_Commercial/_Lakes/_Lodzkie/_MlynekTuszyn/MlynekTuszyn';
import Makary from './_Page/_Lake/_Commercial/_Lakes/_Lodzkie/_Makary/Makary';
import LubelskieCom from './_Page/_Lake/_Commercial/_Lakes/_Lubelskie/LubelskieCom';
import Bobrowisko from './_Page/_Lake/_Commercial/_Lakes/_Lubelskie/_Bobrowisko/Bobrowisko';
import Jezow from './_Page/_Lake/_Commercial/_Lakes/_Lubelskie/_Jezow/Jezow';
import Moszczanka from './_Page/_Lake/_Commercial/_Lakes/_Lubelskie/_Moszczanka/Moszczanka';
import Krzesimow from './_Page/_Lake/_Commercial/_Lakes/_Lubelskie/_Krzesimow/Krzesimow';
import LubuskieCom from './_Page/_Lake/_Commercial/_Lakes/_Lubuskie/LubuskieCom';
import Dabie from './_Page/_Lake/_Commercial/_Lakes/_Lubuskie/_Dabie/Dabie';
import CarpShopLakes from './_Page/_Lake/_Commercial/_Lakes/_Lubuskie/_CarpShopLakes/CarpShopLakes';
import NatanLake from './_Page/_Lake/_Commercial/_Lakes/_Lubuskie/_Natan/NatanLake';
import ZaciszeLake from './_Page/_Lake/_Commercial/_Lakes/_Lubuskie/_ZaciszeLake/ZaciszeLake';
import MalopolskieCom from './_Page/_Lake/_Commercial/_Lakes/_Malopolskie/MalopolskieCom';
import FishZone from './_Page/_Lake/_Commercial/_Lakes/_Malopolskie/_FishZone/FishZone';
import KarpMaslomiaca from './_Page/_Lake/_Commercial/_Lakes/_Malopolskie/_KarpMaslomica/KarpMaslomica';
import EkoLakesWojcina from './_Page/_Lake/_Commercial/_Lakes/_Malopolskie/_EkoLakesWojcina/EkoLakesWojcina';
import Borowa from './_Page/_Lake/_Commercial/_Lakes/_Malopolskie/_Borowa/Borowa';
import MazowieckieCom from './_Page/_Lake/_Commercial/_Lakes/_Mazowieckie/MazowieckieCom';
import Sokolow from './_Page/_Lake/_Commercial/_Lakes/_Mazowieckie/_Sokolow/Sokolow';
import Radlnia from './_Page/_Lake/_Commercial/_Lakes/_Mazowieckie/_Radlnia/Radlnia';
import Bunkrami from './_Page/_Lake/_Commercial/_Lakes/_Mazowieckie/_Bunkrami/Bunkrami';
import Cegielnia from './_Page/_Lake/_Commercial/_Lakes/_Mazowieckie/_Cegielnia/Cegielnia';
import OpolskieCom from './_Page/_Lake/_Commercial/_Lakes/_Opolskie/OpolskieCom';
import Wyszkow from './_Page/_Lake/_Commercial/_Lakes/_Opolskie/_Wyszkow/Wyszkow';
import Zastawie from './_Page/_Lake/_Commercial/_Lakes/_Opolskie/_Zastawie/Zastawie';
import Judyta from './_Page/_Lake/_Commercial/_Lakes/_Opolskie/_Judyta/Judyta';
import RelaxPark from './_Page/_Lake/_Commercial/_Lakes/_Opolskie/_RelaxPark/RelaxPark';
import PodlaskieCom from './_Page/_Lake/_Commercial/_Lakes/_Podlaskie/PodlaskieCom';
import Selwa from './_Page/_Lake/_Commercial/_Lakes/_Podlaskie/_Selwa/Selwa';
import KrasneRyby from './_Page/_Lake/_Commercial/_Lakes/_Podlaskie/_KrasneRyby/KrasneRyby';
import LowiskoGrzesia from './_Page/_Lake/_Commercial/_Lakes/_Podlaskie/_LowiskoGrzesia/LowiskoGrzesia';
import LowiskoTopilec from './_Page/_Lake/_Commercial/_Lakes/_Podlaskie/_LowiskoTopiles/LowiskoTopilec';
import PomorskieCom from './_Page/_Lake/_Commercial/_Lakes/_Pomorskie/PomorskieCom';
import Glamka from './_Page/_Lake/_Commercial/_Lakes/_Pomorskie/_Glamka/Glamka';
import Trzebiatki from './_Page/_Lake/_Commercial/_Lakes/_Pomorskie/_Trzebiatki/Trzebiatki';
import Szuwarek from './_Page/_Lake/_Commercial/_Lakes/_Pomorskie/_Szuwarek/Szuwarek';
import CzarDa from './_Page/_Lake/_Commercial/_Lakes/_Pomorskie/_Czarda/Czarda';
import SlaskieCom from './_Page/_Lake/_Commercial/_Lakes/_Slaskie/SlaskieCom';
import Praszczyki from './_Page/_Lake/_Commercial/_Lakes/_Slaskie/_Praszczyki/Praszczyki';
import NowaOchaby from './_Page/_Lake/_Commercial/_Lakes/_Slaskie/_NowaOchaby/NowaOchaby';
import Harus from './_Page/_Lake/_Commercial/_Lakes/_Slaskie/_Harus/Harus';
import MalaOlza from './_Page/_Lake/_Commercial/_Lakes/_Slaskie/_MalaOlza/MalaOlza';
import SwietokrzyskieCom from './_Page/_Lake/_Commercial/_Lakes/_Swietokrzyskie/SwietokrzyskieCom';
import BigFishLake from './_Page/_Lake/_Commercial/_Lakes/_Swietokrzyskie/_BigFishLake/BigFishLake';
import Pstragal from './_Page/_Lake/_Commercial/_Lakes/_Swietokrzyskie/_Pstragal/Pstragal';
import Bilowka from './_Page/_Lake/_Commercial/_Lakes/_Swietokrzyskie/_Bilowka/Bilowka';
import Rytwiany from './_Page/_Lake/_Commercial/_Lakes/_Swietokrzyskie/_Rytwiany/Rytwiany';
import WarminskoMazurskieCom from './_Page/_Lake/_Commercial/_Lakes/_WarminskoMazurskie/WarminskoMazurskieCom';
import PikeLake from './_Page/_Lake/_Commercial/_Lakes/_WarminskoMazurskie/_PikeLake/PikeLake';
import Pieczarki from './_Page/_Lake/_Commercial/_Lakes/_WarminskoMazurskie/_Pieczarki/Pieczarki';
import Judziki from './_Page/_Lake/_Commercial/_Lakes/_WarminskoMazurskie/_Judziki/Judziki';
import Zakrzewko from './_Page/_Lake/_Commercial/_Lakes/_WarminskoMazurskie/_Zakrzewko/Zakrzewko';
import WielkopolskieCom from './_Page/_Lake/_Commercial/_Lakes/_Wielkopolskie/WielkopolskieCom';
import ZachodnioPomorskieCom from './_Page/_Lake/_Commercial/_Lakes/_ZachodnioPomorskie/ZachodnioPomorskieCom';
import Brynka from './_Page/_Lake/_Commercial/_Lakes/_Wielkopolskie/_Brynka/Brynka';
import Prusim from './_Page/_Lake/_Commercial/_Lakes/_Wielkopolskie/_Prusim/Prusim';
import Folusz from './_Page/_Lake/_Commercial/_Lakes/_Wielkopolskie/_Folusz/Folusz';
import Orle from './_Page/_Lake/_Commercial/_Lakes/_Wielkopolskie/_Orle/Orle';
import Lutowko from './_Page/_Lake/_Commercial/_Lakes/_ZachodnioPomorskie/_Lutowko/Lutowko';
import Rezerwat from './_Page/_Lake/_Commercial/_Lakes/_ZachodnioPomorskie/_Rezerwat/Rezerwat';
import Golczewo from './_Page/_Lake/_Commercial/_Lakes/_ZachodnioPomorskie/_Golczewo/Golczewo';
import KaraibyStojkowo from './_Page/_Lake/_Commercial/_Lakes/_ZachodnioPomorskie/_KaraibyStojkowo/KaraibyStojkowo';
import Szczecin from './_Page/_Lake/_PZW/_Woje/_Szczecin/Szczecin';
import Koszalin from './_Page/_Lake/_PZW/_Woje/_Koszalin/Koszalin';
import GorzowWielkopolski from './_Page/_Lake/_PZW/_Woje/GorzowWielkopolski/GorzowWielkopolski';
import ZielonaGora from './_Page/_Lake/_PZW/_Woje/_ZielonaGora/ZielonaGora';
import Poznan from './_Page/_Lake/_PZW/_Woje/_Poznan/Poznan';
import JeleniaGora from './_Page/_Lake/_PZW/_Woje/_JeleniaGora/JeleniaGora';
import Walbrzych from './_Page/_Lake/_PZW/_Woje/_Walbrzych/Walbrzych';
import Legnica from './_Page/_Lake/_PZW/_Woje/_Legnica/Legnica';
import Slupsk from './_Page/_Lake/_PZW/_Woje/_Slupsk/Slupsk';
import Gdansk from './_Page/_Lake/_PZW/_Woje/_Gdansk/Gdansk';
import Bydgoszcz from './_Page/_Lake/_PZW/_Woje/_Bydgoszcz/Bydgoszcz';
import Konin from './_Page/_Lake/_PZW/_Woje/_Konin/Konin';
import Kalisz from './_Page/_Lake/_PZW/_Woje/_Kalisz/Kalisz';
import Opole from './_Page/_Lake/_PZW/_Woje/_Opole/Opole';
import Elblag from './_Page/_Lake/_PZW/_Woje/_Elblag/Elblag';
import Olsztyn from './_Page/_Lake/_PZW/_Woje/_Olsztyn/Olsztyn';
import Suwalki from './_Page/_Lake/_PZW/_Woje/_Suwalki/Suwalki';
import Bialystok from './_Page/_Lake/_PZW/_Woje/_Bialystok/Bialystok';
import Torun from './_Page/_Lake/_PZW/_Woje/_Torun/Torun';
import Ciechanow from './_Page/_Lake/_PZW/_Woje/_Ciechanow/Ciechanow';
import Mazowieckie from './_Page/_Lake/_PZW/_Woje/_Mazowieckie/Mazowieckie';
import BialaPodlaska from './_Page/_Lake/_PZW/_Woje/_BialaPodlaska/BialaPodlaska';
import Siedlce from './_Page/_Lake/_PZW/_Woje/_Siedlce/Siedlce';
import Sieradz from './_Page/_Lake/_PZW/_Woje/_Sieradz/Sieradz';
import PiotrkowTrybunalski from './_Page/_Lake/_PZW/_Woje/_PiotrkowTrybunalski/PiotrkowTrybunalski';
import Radom from './_Page/_Lake/_PZW/_Woje/_Radom/Radom';
import Lublin from './_Page/_Lake/_PZW/_Woje/_Lublin/Lublin';
import Chelm from './_Page/_Lake/_PZW/_Woje/_Chełm/Chełm';
import Czestochowa from './_Page/_Lake/_PZW/_Woje/_Czestochowa/Czestochowa';
import Kielce from './_Page/_Lake/_PZW/_Woje/_Kielce/Kielca';
import Zamosc from './_Page/_Lake/_PZW/_Woje/_Zamosc/Zamosc';

const Stack = createStackNavigator();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const token = await AsyncStorage.getItem('token');
      setIsLoggedIn(!!token); // Set true if token exists
    };
    checkLoginStatus();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isLoggedIn ? 'Home' : 'Login'}>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Callendar" component={Callendar} />
        <Stack.Screen name="Maps" component={Fishing_Maps} />
        <Stack.Screen name="Notes" component={Notes} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Wetter" component={Wetter} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registry" component={Registry} />
        <Stack.Screen name="WaterType" component={WaterTypeChoice} />
        <Stack.Screen name="FishCom" component={FishingMapsCom} />
        <Stack.Screen name="PodkarpakieCom" component={PodkarpackieCom} />
        <Stack.Screen name="CzarnaSedziszowska" component={CzarnaSedziszowska} />
        <Stack.Screen name="RemindPassword" component={RemindPassword} />
        <Stack.Screen name="Tarnobrzeg" component={Tarnobrzeg} />
        <Stack.Screen name="Krosno" component={Krosno} />
        <Stack.Screen name="Rzeszow" component={Rzeszow} />
        <Stack.Screen name="Przemysl" component={Przemysl} />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="Zgoda" component={Zgoda} />
        <Stack.Screen name="Ranczo" component={Ranczo} />
        <Stack.Screen name="StarySan" component={StarySan} />
        <Stack.Screen name="DolnoSlaskie" component={DolnoSlaskieCom} />
        <Stack.Screen name="CastleLake" component={CastleLakes} />
        <Stack.Screen name="PodSilosami" component={PodSilosami} />
        <Stack.Screen name="RekreacyjnePrzemkow" component={RekreacyjnePrzemkow} />
        <Stack.Screen name="BobrowaPrzystan" component={BobrowaPrzystan} />
        <Stack.Screen name="KujawskoPomorskie" component={KujawskoPomorskieCom} />
        <Stack.Screen name="ParadiseCarpLake" component={ParadiseCarpLake} />
        <Stack.Screen name="Niewiescin" component={Niewiescin} />
        <Stack.Screen name="StawyDylewskie" component={StawyDylewskie} />
        <Stack.Screen name="LodzkieCom" component={LodzkieCom} />
        <Stack.Screen name="StrongCarpLake" component={StrongCarpLake} />
        <Stack.Screen name="KarperLake" component={KarperLake} />
        <Stack.Screen name="MlynekTuszyn" component={MlynekTuszyn} />
        <Stack.Screen name="Makary" component={Makary} />
        <Stack.Screen name="LubelskieCom" component={LubelskieCom} />
        <Stack.Screen name="Bobrowisko" component={Bobrowisko} />
        <Stack.Screen name="Jezow" component={Jezow} />
        <Stack.Screen name="Moszczanka" component={Moszczanka} />
        <Stack.Screen name="Krzesimow" component={Krzesimow} />
        <Stack.Screen name="LubuskieCom" component={LubuskieCom} />
        <Stack.Screen name="Dabie" component={Dabie} />
        <Stack.Screen name="CarpShopLakes" component={CarpShopLakes} />
        <Stack.Screen name="NatanLake" component={NatanLake} />
        <Stack.Screen name="ZaciszeLake" component={ZaciszeLake} />
        <Stack.Screen name="MalopolskieCom" component={MalopolskieCom} />
        <Stack.Screen name="FishZone" component={FishZone} />
        <Stack.Screen name="KarpMaslomica" component={KarpMaslomiaca} />
        <Stack.Screen name="EkoLakesWojcina" component={EkoLakesWojcina} />
        <Stack.Screen name="Borowa" component={Borowa} />
        <Stack.Screen name="MazowieckieCom" component={MazowieckieCom} />
        <Stack.Screen name="Sokolow" component={Sokolow} />
        <Stack.Screen name="Radlinia" component={Radlnia} />
        <Stack.Screen name="Bunkrami" component={Bunkrami} />
        <Stack.Screen name="Cegielnia" component={Cegielnia} />
        <Stack.Screen name="OpolskieCom" component={OpolskieCom} />
        <Stack.Screen name="Wyszkow" component={Wyszkow} />
        <Stack.Screen name="Zastawie" component={Zastawie} />
        <Stack.Screen name="Judyta" component={Judyta} />
        <Stack.Screen name="RelaxPark" component={RelaxPark} />
        <Stack.Screen name="PodlaskieCom" component={PodlaskieCom} />
        <Stack.Screen name="Selwa" component={Selwa} />
        <Stack.Screen name="KrasneRyby" component={KrasneRyby} />
        <Stack.Screen name="LowiskoGrzesia" component={LowiskoGrzesia} />
        <Stack.Screen name="LowiskoTopilec" component={LowiskoTopilec} />
        <Stack.Screen name="PomorskieCom" component={PomorskieCom} />
        <Stack.Screen name="Glamka" component={Glamka} />
        <Stack.Screen name="Trzebiatki" component={Trzebiatki} />
        <Stack.Screen name="Szuwarek" component={Szuwarek} />
        <Stack.Screen name="Czarda" component={CzarDa} />
        <Stack.Screen name="SlaskieCom" component={SlaskieCom} />
        <Stack.Screen name="Praszczyki" component={Praszczyki} />
        <Stack.Screen name="Harus" component={Harus} />
        <Stack.Screen name="NowaOchaby" component={NowaOchaby} />
        <Stack.Screen name="MalaOlza" component={MalaOlza} />
        <Stack.Screen name="SwietokrzyskieCom" component={SwietokrzyskieCom} />
        <Stack.Screen name="BigFishLake" component={BigFishLake} />
        <Stack.Screen name="Pstragal" component={Pstragal} />
        <Stack.Screen name="Bilowka" component={Bilowka} />
        <Stack.Screen name="Rytwiany" component={Rytwiany} />
        <Stack.Screen name="WarminskoMazurskieCom" component={WarminskoMazurskieCom} />
        <Stack.Screen name="PikeLake" component={PikeLake} />
        <Stack.Screen name="Pieczarki" component={Pieczarki} />
        <Stack.Screen name="Judziki" component={Judziki} />
        <Stack.Screen name="Zakrzewo" component={Zakrzewko} />
        <Stack.Screen name="WielkopolskieCom" component={WielkopolskieCom} />
        <Stack.Screen name="ZachodnioPomorskieCom" component={ZachodnioPomorskieCom} />
        <Stack.Screen name="Brynka" component={Brynka} />
        <Stack.Screen name="Prusim" component={Prusim} />
        <Stack.Screen name="Folusz" component={Folusz} />
        <Stack.Screen name="Orle" component={Orle} />
        <Stack.Screen name="Lutowko" component={Lutowko} />
        <Stack.Screen name="Rezerwat" component={Rezerwat} />
        <Stack.Screen name="Golczewo" component={Golczewo} />
        <Stack.Screen name="KaraibyStojkowo" component={KaraibyStojkowo} />
        <Stack.Screen name="Szczecin" component={Szczecin} />
        <Stack.Screen name="Koszalin" component={Koszalin} />
        <Stack.Screen name="GorzowWielkopolski" component={GorzowWielkopolski} />
        <Stack.Screen name="ZielonaGora" component={ZielonaGora} />
        <Stack.Screen name="Poznan" component={Poznan} />
        <Stack.Screen name="JeleniaGora" component={JeleniaGora} />
        <Stack.Screen name="Walbrzych" component={Walbrzych} />
        <Stack.Screen name="Legnica" component={Legnica} />
        <Stack.Screen name="Slupsk" component={Slupsk} />
        <Stack.Screen name="Gdansk" component={Gdansk} />
        <Stack.Screen name="Bydgoszcz" component={Bydgoszcz} />
        <Stack.Screen name="Konin" component={Konin} />
        <Stack.Screen name="Kalisz" component={Kalisz} />
        <Stack.Screen name="Opole" component={Opole} />
        <Stack.Screen name="Elblag" component={Elblag} />
        <Stack.Screen name="Olsztyn" component={Olsztyn} />
        <Stack.Screen name="Suwalki" component={Suwalki} />
        <Stack.Screen name="Bialystok" component={Bialystok} />
        <Stack.Screen name="Torun" component={Torun} />
        <Stack.Screen name="Ciechanow" component={Ciechanow} />
        <Stack.Screen name="Mazowieckie" component={Mazowieckie} />
        <Stack.Screen name="BialaPodlaska" component={BialaPodlaska} />
        <Stack.Screen name="Siedlce" component={Siedlce} />
        <Stack.Screen name="Sieradz" component={Sieradz} />
        <Stack.Screen name="PiotrkowTrybunalski" component={PiotrkowTrybunalski} />
        <Stack.Screen name="Radom" component={Radom} />
        <Stack.Screen name="Lublin" component={Lublin} />
        <Stack.Screen name="Chełm" component={Chelm} />
        <Stack.Screen name="Czestochowa" component={Czestochowa} />
        <Stack.Screen name="Kielce" component={Kielce} />
        <Stack.Screen name="Zamosc" component={Zamosc} />


        





      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
