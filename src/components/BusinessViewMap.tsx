import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ExampleLocationType } from '@components/BusinessView'
import Map from 'react-native-maps'

const BusinessViewMap = ({ businessLocation } : { businessLocation : ExampleLocationType }) => (
  <View style={styles.compoundStyle} pointerEvents="none">
    <Text style={styles.headingText}>LOCATION MAP</Text>
    <Map
      style={styles.mapStyle}
      region={{
        latitude: businessLocation.latitude,
        longitude: businessLocation.longitude,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1
      }}
      showsUserLocation
      showsCompass
    />
  </View>
)

const styles = StyleSheet.create({
  compoundStyle: {
    marginBottom: '8%'
  },
  headingText: {
    color: '#A0A0A0',
    fontSize: 12,
    marginBottom: '1%',
    marginLeft: '1%'
  },
  mapStyle: {
    borderRadius: 10,
    height: 300
  }
})
  
export default BusinessViewMap
