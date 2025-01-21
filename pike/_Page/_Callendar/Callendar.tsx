import React from 'react';
import { View, Text, ScrollView, StyleSheet, ImageBackground } from 'react-native';

const days = [
  'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'
];

const data = [
  { day: 1, sunrise: '07:51', sunset: '15:29', phase: 'Wzrastający sierp', fishing: 'Branie dobre' },
  { day: 2, sunrise: '07:51', sunset: '15:30', phase: 'Wzrastający sierp', fishing: 'Branie dobre'},
  { day: 3, sunrise: '07:51', sunset: '15:31', phase: 'Wzrastający sierp', fishing: 'Branie dobre'},
  { day: 4, sunrise: '07:50', sunset: '15:32', phase: 'Wzrastający sierp', fishing: 'Branie dobre'},
  { day: 5, sunrise: '07:50', sunset: '15:34', phase: 'Wzrastający sierp', fishing: 'Branie dobre' },
  { day: 6, sunrise: '07:50', sunset: '15:35', phase: 'Pierwsza kwadra', fishing: 'Branie bardzo dobre'},
  { day: 7, sunrise: '07:49', sunset: '15:36', phase: 'Pierwsza kwadra', fishing: 'Branie bardzo dobre'},
  { day: 8, sunrise: '07:49', sunset: '15:38', phase: 'Pierwsza kwadra', fishing: 'Branie bardzo dobre'},
  { day: 9, sunrise: '07:48', sunset: '15:39', phase: 'Pierwsza kwadra', fishing: 'Branie bardzo dobre'},
  { day: 10, sunrise: '07:47', sunset: '15:40', phase: 'Pierwsza kwadra', fishing: 'Branie bardzo dobre'},
  { day: 11, sunrise: '07:47', sunset: '15:42', phase: 'Poszerzony księżyc', fishing: 'Branie złe'},
  { day: 12, sunrise: '07:46', sunset: '15:43', phase: 'Poszerzony księżyc', fishing: 'Branie złe'},
  { day: 13, sunrise: '07:45', sunset: '15:45', phase: 'Poszerzony księżyc', fishing: 'Branie złe'},
  { day: 14, sunrise: '07:44', sunset: '15:47', phase: 'Pełnia', fishing: 'Branie dobre'},
  { day: 15, sunrise: '07:43', sunset: '15:48', phase: 'Garbaty księżyc', fishing: 'Branie średnie'},
  { day: 16, sunrise: '07:42', sunset: '15:50', phase: 'Garbaty księżyc', fishing: 'Branie średnie'},
  { day: 17, sunrise: '07:41', sunset: '15:51', phase: 'Garbaty księżyc', fishing: 'Branie średnie'},
  { day: 18, sunrise: '07:40', sunset: '15:53', phase: 'Garbaty księżyc', fishing: 'Branie średnie'},
  { day: 19, sunrise: '07:39', sunset: '15:55', phase: 'Garbaty księżyc', fishing: 'Branie średnie'},
  { day: 20, sunrise: '07:38', sunset: '15:57', phase: 'Trzecia kwadra', fishing: 'Branie bardzo złe'},
  { day: 21, sunrise: '07:37', sunset: '15:58', phase: 'Trzecia kwadra', fishing: 'Branie bardzo złe'},
  { day: 22, sunrise: '07:36', sunset: '16:00', phase: 'Trzecia kwadra', fishing: 'Branie bardzo złe'},
  { day: 23, sunrise: '07:34', sunset: '16:02', phase: 'Trzecia kwadra', fishing: 'Branie bardzo złe'},
  { day: 24, sunrise: '07:33', sunset: '16:04', phase: 'Trzecia kwadra', fishing: 'Branie bardzo złe'},
  { day: 25, sunrise: '07:32', sunset: '16:06', phase: 'Malejący sierp', fishing: 'Branie średnie'},
  { day: 26, sunrise: '07:30', sunset: '16:07', phase: 'Malejący sierp', fishing: 'Branie średnie'},
  { day: 27, sunrise: '07:29', sunset: '16:09', phase: 'Malejący sierp', fishing: 'Branie średnie'},
  { day: 28, sunrise: '07:27', sunset: '16:11', phase: 'Malejący sierp', fishing: 'Branie średnie'},
  { day: 29, sunrise: '07:26', sunset: '16:13', phase: 'Nów', fishing: 'Branie bardzo dobre'},
  { day: 30, sunrise: '07:24', sunset: '16:15', phase: 'Nów', fishing: 'Branie bardzo dobre'},
  { day: 31, sunrise: '07:23', sunset: '16:17', phase: 'Wzrastający sierp', fishing: 'Branie dobre'}
];

const Calendar = () => {
  return (
    <ImageBackground source={require('./ryba2.jpg')} style={styles.background}>
      <ScrollView style={styles.container}>
        {data.map((item, index) => (
          <View key={index} style={[ 
            styles.dayContainer,
            item.fishing === 'Branie bardzo dobre' && styles.veryGoodFishing,
            item.fishing === 'Branie dobre' && styles.goodFishing,
            (item.fishing === 'Branie złe' || item.fishing === 'Branie bardzo złe') && styles.badFishing,
            item.fishing === 'Branie średnie' && styles.averageFishing
          ]}>
            <Text style={styles.dayText}>Dzień: {item.day}</Text>
            <Text>Wschód: {item.sunrise}</Text>
            <Text>Zachód: {item.sunset}</Text>
            <Text>Faza: {item.phase}</Text>
            <Text>Branie: {item.fishing}</Text>
            <Text>Notatka: {item.note}</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.7)' // Przezroczyste tło, aby tekst był czytelny
  },
  dayContainer: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Dodajemy przezroczystość do kafelków
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3
  },
  dayText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  veryGoodFishing: {
    backgroundColor: 'rgba(212, 237, 218, 0.8)' // Zwiększenie przezroczystości w przypadku bardzo dobrego brania
  },
  goodFishing: {
    backgroundColor: 'rgba(195, 230, 203, 0.8)' // Zwiększenie przezroczystości w przypadku dobrego brania
  },
  averageFishing: {
    backgroundColor: 'rgba(255, 204, 0, 0.8)' // Zwiększenie przezroczystości w przypadku średniego brania
  },
  badFishing: {
    backgroundColor: 'rgba(248, 215, 218, 0.8)' // Zwiększenie przezroczystości w przypadku złego brania
  }
});

export default Calendar;
