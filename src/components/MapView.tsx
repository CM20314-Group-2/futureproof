import * as Location from 'expo-location'
import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import Map from 'react-native-maps'

const MapView = () => {
  const [location, setLocation] = useState<Location.LocationObject | null>(null)

  useEffect(() => {
    (async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync()
        if (status !== 'granted') {
          return console.error('Permission to access location was denied.')
        }
      } catch (error) {
        return console.error('Failed to get permissions.', error)
      }

      const location = await Location.getCurrentPositionAsync({})
      setLocation(location)
    })()
  }, [])

  return (
    <React.Fragment>
      <Map
        style={styles.map}
        region={{
          latitude: location?.coords.latitude || 0,
          longitude: location?.coords.longitude || 0,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1
        }}
        showsUserLocation={location !== null}
        showsCompass  
        testID='map'
      />
    </React.Fragment>
  )
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject
  }
})

export default MapView