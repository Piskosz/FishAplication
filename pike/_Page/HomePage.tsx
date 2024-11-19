import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome'; 

type RootStackParamList = {
  Home: undefined;
  Callendar: undefined;
  Maps: undefined;
  Notes: undefined;
  Wetter: undefined;
  Profile: undefined;
};

type HomePageNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomePageNavigationProp;
};

const HomePage: React.FC<Props> = ({ navigation }) => {
  return (
    <ImageBackground source={require('./ryba2.jpg')} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>START</Text>
          <Text style={styles.subHeaderText}>Fishing</Text>
        </View>

        <View style={styles.buttonContainer}>
          <View style={styles.iconRow}>
            <TouchableOpacity 
              style={styles.iconButton}
              onPress={() => navigation.navigate('Home')}>
              <Icon name="home" size={40} color="white" />
              <Text style={styles.iconText}>Home Fishing</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.iconButton}
              onPress={() => navigation.navigate('Wetter')}>
              <Icon name="cloud" size={40} color="white" />
              <Text style={styles.iconText}>Pogoda</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => navigation.navigate('Callendar')}>
              <Icon name="calendar" size={40} color="white" />
              <Text style={styles.iconText}>Kalendarz brań</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.iconRow}>
            <TouchableOpacity 
               style={styles.iconButton}
               onPress={() => navigation.navigate('Notes')}>
              <Icon name="sticky-note" size={40} color="white" />
              <Text style={styles.iconText}>Notatki</Text>
            </TouchableOpacity>
            <TouchableOpacity 
               style={styles.iconButton}
               onPress={() => navigation.navigate('Profile')}>
              <Icon name="user" size={40} color="white" />
              <Text style={styles.iconText}>Profil</Text>
            </TouchableOpacity>
            <TouchableOpacity 
               style={styles.iconButton}
               onPress={() => navigation.navigate('Maps')}>
              <Icon name="map" size={40} color="white" />
              <Text style={styles.iconText}>Mapy łowisk</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 50,
    paddingBottom: 20,
  },
  headerContainer: {
    alignItems: 'center',
  },
  headerText: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  subHeaderText: {
    fontSize: 50,
    color: 'white',
    fontWeight: 'bold',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 30,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  iconButton: {
    backgroundColor: 'rgba(0, 0, 255, 0.2)', 
    borderRadius: 50,
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 15,
  },
  iconText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 5, // Odstęp między ikoną a tekstem
  },
});

export default HomePage;
