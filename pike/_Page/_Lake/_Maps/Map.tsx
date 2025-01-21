import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { LeafletView } from 'react-native-leaflet-view';
import { useRoute } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const Maps = () => {
  const route = useRoute();
  const { initialLocation } = route.params || { initialLocation: { lat: 52.2297, lng: 21.0122 } };

  const [center, setCenter] = useState(initialLocation);

  const [markers, setMarkers] = useState([
    {
      position: { lat: 52.2297, lng: 21.0122 },
      icon: '📍',
    },
    { 
      position: { lat: 50.137, lng: 21.758833 },
      icon: '📍',
    },
  ]);

  useEffect(() => {
    // Ustawienie centrum mapy na podstawie przekazanych parametrów
    setCenter(initialLocation);
  }, [initialLocation]);

  return (
    <View style={styles.container}>
      <LeafletView
        style={styles.map}
        mapCenterPosition={center}
        mapMarkers={markers}
        zoom={15}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    width: width,
    height: height - 100,
  },
});

export default Maps;
