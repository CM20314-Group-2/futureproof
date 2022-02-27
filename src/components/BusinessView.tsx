import DescriptionView from '@components/DescriptionView'
import RatingsView from '@components/RatingsView'
import TitleView from '@components/TitleView'
import BusinessViewMap from '@components/BusinessViewMap'
import { DisplayableBusiness, Location } from '@futureproof/typings'
import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import openMap from 'react-native-open-maps'
import ImagesCarousel from '@components/ImagesCarousel'

// PLACEHOLDER BUSINESS LOCATION -> Update to fetch graphQL
export type ExampleLocationType = Pick<Location, 'id' | 'address' | 'latitude' | 'longitude'>

const ExampleBusinessLocation : ExampleLocationType = {
  id: '1',
  address: 'Unit B Strahan House, Avon St, Bath BA1 1UN',
  latitude: 51.37758520597919,
  longitude: -2.3572347659685513
}

const BusinessView = ({ businessToDisplay } : { businessToDisplay : DisplayableBusiness}) => {
  return (
    <View>
      <ScrollView contentContainerStyle={styles.businessViewScrollStyle} contentInsetAdjustmentBehavior='automatic'>
        <SafeAreaView style={styles.businessViewStyle}>
          <TitleView
            name={businessToDisplay.name}
            profilePicture={businessToDisplay.profilePicture == null ? '' : businessToDisplay.profilePicture}
            businessAddress={ExampleBusinessLocation.address}
          />
          <DescriptionView
            profileText={businessToDisplay.profileText}
          />
          <RatingsView
            customerScore={businessToDisplay.customerScore}
            sustainabilityScore={businessToDisplay.sustainabilityScore}/>
          <BusinessViewMap
            businessLocation={ExampleBusinessLocation}
          />
          <ImagesCarousel/>
        </SafeAreaView>
      </ScrollView>
      <TouchableOpacity onPress={() => openMap({ end: ExampleBusinessLocation.address })} style={styles.DirectionsButtonContainer}>
        <Text style={styles.DirectionsButtonText}>Get Directions</Text>
      </TouchableOpacity>
    </View>
  )
}

export const styles = StyleSheet.create({
  DirectionsButtonContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#1EA853',
    borderRadius: 10,
    bottom: 40,
    justifyContent: 'center',
    padding: 18,
    position: 'absolute',
    width: '90%',
    zIndex: 0
  },
  DirectionsButtonText: {
    color: 'white',
    fontSize: 16
  },
  businessViewScrollStyle: {
    flexGrow: 1,
    height: '100%'
  },
  businessViewStyle: {
    marginHorizontal: 30
  }
})

export default BusinessView
