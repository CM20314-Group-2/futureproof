import * as Location from 'expo-location'
import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Map, { Circle, Marker } from 'react-native-maps'

const MapView = () => {
  const DISTANCE = 500

  const [location, setLocation] = useState<Location.LocationObject | null>(null)

  useEffect(() => {
    (async () => {
      const {status} = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        console.error('Failed to get permissions.')
        return
      }

      const location = await Location.getCurrentPositionAsync({})
      setLocation(location)
    })()
  }, [])

  return (
    <React.Fragment>
      {location ?
        <Map
          style={styles.map}
          region={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1
          }}
          showsUserLocation
          showsCompass
        >
          <View style={styles.dropdown}/>
          <Circle center={location.coords} radius={DISTANCE} strokeColor={'#1ea835'} strokeWidth={2}/>
        </Map>
       : null}
    </React.Fragment>
  )
}

const styles = StyleSheet.create({
  dropdown: {
    backgroundColor: 'red',
    width: 50,
    height: 50,
    margin: 'auto',
    top: 60,
    left: 30
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
})

export default MapView
