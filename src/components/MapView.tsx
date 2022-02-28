import * as Location from 'expo-location'
import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import Map from 'react-native-maps'
import DistanceRadiusView from '@components/DistanceRadiusView'

const MapView = ({ showRadius } : { showRadius : boolean }) => {
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
      {location ?
          <Map
            style={styles.map}
            region={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              latitudeDelta: 0.025,
              longitudeDelta: 0.025
            }}
            showsUserLocation
            showsCompass
          >
            {showRadius ? <DistanceRadiusView location={location}/> : null}
          </Map>
       : null}
    </React.Fragment>
  )
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject
  }
})

export default MapView
