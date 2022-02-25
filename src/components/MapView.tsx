import * as CurrentLocation from 'expo-location'
import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Map from 'react-native-maps'
import SearchBar from '@components/SearchBarView'
import { Business, Location } from '@futureproof/typings'
import { Marker } from "react-native-maps"
import { gql, useQuery } from '@apollo/client'
import Pin from '@components/Pin'

type LocationType = Pick<Location, 'latitude' | 'longitude' | 'id'>

interface LocationTypewithRating extends LocationType {
  business: Pick<Business, 'sustainabilityScore'>
}

//Example locations, not from database
const ExampleLocationOne: LocationType = {
  //Starbucks
  id: '0',
  latitude: 51.3808,
  longitude: -2.3631

}
const ExampleLocationTwo: LocationType = {
  //Sainsburys
  id: '1',
  latitude: 51.3811,
  longitude: -2.3687
}
const ExampleLocationThree: LocationType = {
  //H&M
  id: '2',
  latitude: 51.37904,
  longitude: -2.35882
}
const ExampleLocations = [ExampleLocationOne, ExampleLocationTwo, ExampleLocationThree]

const GetCoordinates = gql `
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


const MapView = () => {
  const [location, setLocation] = useState<CurrentLocation.LocationObject | null>(null)
  const {data,  loading, error} = useQuery<{ locations: LocationTypewithRating[]}>(GetCoordinates)
  console.log(loading)
  console.log(error)
  console.log('data', data)
  

  //Function to populate the map with the customised pins
  function PopulateMap() {
    return data?.locations.map((marker) => (<Marker
      key = {marker.id}
      coordinate = {marker}
      >
      <Pin onPress = {() => {}} rating = {marker.business.sustainabilityScore || 0}
      ></Pin>
      </Marker>)
    )
  }

  useEffect(() => {
    (async () => {
      const {status} = await CurrentLocation.requestForegroundPermissionsAsync()
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
      {location ? <Map
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
        { PopulateMap() }
      </Map> :null}
    </React.Fragment>
  )
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject
  }
})

export default MapView