import React, { useState } from 'react';
import { View, Button, StyleSheet, Dimensions } from 'react-native';
import { LeafletView } from 'react-native-leaflet-view';

const { width, height } = Dimensions.get('window');

const Maps = () => {
  const [center, setCenter] = useState({
    lat: 52.2297, 
    lng: 21.0122,
  });

  const [markers, setMarkers] = useState([
    {
      position: { lat: 52.2297, lng: 21.0122 },
      icon: '📍',
    },
  ]);

  const moveToPin = () => {
    const newPosition = { lat: 50.0415, lng: 21.9991 };
    setCenter(newPosition);
    setMarkers([{ position: newPosition, icon: '📍' }]);
  };

  return (
    <View style={styles.container}>
      <LeafletView
        style={styles.map}
        mapCenterPosition={center} 
        mapMarkers={markers} 
        zoom={15}
      />
      <View style={styles.buttonContainer}>
        <Button title="Przenieś do Rzeszowa" onPress={moveToPin} />
      </View>
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
  buttonContainer: {
    width: '100%',
    padding: 10,
  },
});

export default Maps;
