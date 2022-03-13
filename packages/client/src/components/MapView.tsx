import { gql, useQuery } from '@apollo/client'
import Pin from '@components/Pin'
import { Business, Location } from '@futureproof/typings'
import * as CurrentLocation from 'expo-location'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text } from 'react-native'
import Map, { Circle, Marker } from 'react-native-maps'

type LocationType = Pick<Location, 'latitude' | 'longitude' | 'id'>

interface LocationTypeWithRating extends LocationType {
  business : Pick<Business, 'sustainabilityScore'>
}

const GET_COORDINATES = gql `
  query {
    locations {
      id
      latitude
      longitude
      business {
        sustainabilityScore
      }
    }
  }`

const MapView = ({ showRadius, radiusSize } : {showRadius : boolean, radiusSize? : number}) => {
  const [location, setLocation] = useState<CurrentLocation.LocationObject | null>(null)
  const { data } = useQuery<{ locations : LocationTypeWithRating[]}>(GET_COORDINATES)

  useEffect(() => {
    (async () => {
      const { status } = await CurrentLocation.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        console.error('Failed to get permissions.')
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
          { data?.locations.map((marker) => (
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
