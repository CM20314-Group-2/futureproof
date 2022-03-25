import Pin from '@components/maps/Pin'
import { LocationTypeWithRating } from 'App'
import * as CurrentLocation from 'expo-location'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text } from 'react-native'
import Map, { Circle, Marker } from 'react-native-maps'

interface ComponentProps {
  showRadius : boolean,
  radiusSize ?: number,
  businesses : { locations : LocationTypeWithRating[] } | undefined
}

const MapView = ({ showRadius, radiusSize, businesses } : ComponentProps) => {
  const [location, setLocation] = useState<CurrentLocation.LocationObject | null>(null)

  useEffect(() => {
    (async () => {
      const { status } = await CurrentLocation.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        console.log('Failed to get permissions.')
        return
      }

      const location = await CurrentLocation.getCurrentPositionAsync({})
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
          { showRadius ?
            <Circle
              center={location.coords}
              radius={radiusSize ? radiusSize : 500}
              strokeColor={'#188441'}
              strokeWidth={1}
              lineDashPhase={1}
              lineDashPattern={[4, 2]}
              testID='circle'
            /> : null
          }
          { businesses?.locations.map((marker) => (
            <Marker
              key = {marker.id}
              coordinate = {marker}
            >
              <Pin onPress = {() => {return}} rating = {marker.business.sustainabilityScore || 0}/>
            </Marker>
          ))}
        </Map> : <Text> Error: Could not find location </Text>
      }
    </React.Fragment>
  )
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
})

export default MapView
