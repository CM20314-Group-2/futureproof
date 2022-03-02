import BusinessViewMap from '@components/BusinessViewMap'
import ImagesCarousel from '@components/BusinessViews/ImagesCarousel'
import DescriptionView from '@components/DescriptionView'
import RatingsView from '@components/RatingsView'
import TitleView from '@components/TitleView'
import { DisplayableBusiness, Location } from '@futureproof/typings'
import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import openMap from 'react-native-open-maps'

// PLACEHOLDER BUSINESS LOCATION -> Update to fetch graphQL
export type ExampleLocationType = Pick<Location, 'id' | 'address' | 'latitude' | 'longitude'>

const ExampleBusinessLocation : ExampleLocationType = {
  id: '1',
  address: 'Unit B Strahan House, Avon St, Bath BA1 1UN',
  latitude: 51.37758520597919,
  longitude: -2.3572347659685513
}

const Image1 =
   'https://cdn.vox-cdn.com/thumbor/VAkim2EiaKiIq4pUi295wH99Ces=/0x0:1100x729/1200x800/filters:focal(341x230:517x406)/cdn.vox-cdn.com/uploads/chorus_image/image/67717391/STARBUCKS.0.jpeg'
const Image2 =
   'https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-42658.jpg'
const Image3 =
   'https://cdn.vox-cdn.com/thumbor/1WVT8VSapMXbHPvsTEPxZp2gUrk=/0x0:1347x897/1200x800/filters:focal(567x342:781x556)/cdn.vox-cdn.com/uploads/chorus_image/image/62192379/starbucksredcups2015.1541431580.jpg'
const Image4 =
   'https://cdn.vox-cdn.com/thumbor/bSoWzne8VZvz8tavhebsL7DNik0=/0x0:5860x4008/1200x800/filters:focal(3243x1967:4179x2903)/cdn.vox-cdn.com/uploads/chorus_image/image/67132574/shutterstock_1410002591.0.jpg'

const BusinessView = ({ businessToDisplay } : { businessToDisplay : DisplayableBusiness }) => {
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
          <ImagesCarousel
            Image1={Image1}
            Image2={Image2}
            Image3={Image3}
            Image4={Image4}
          />
        </SafeAreaView>
      </ScrollView>
      <TouchableOpacity onPress={() => openMap({ end: ExampleBusinessLocation.address })} style={styles.directionsButtonContainer}>
        <Text style={styles.directionsButtonText}>Get Directions</Text>
      </TouchableOpacity>
    </View>
  )
}

export const styles = StyleSheet.create({
  businessViewScrollStyle: {
    flexGrow: 1,
    height: '100%'
  },
  businessViewStyle: {
    marginHorizontal: 30
  },
  directionsButtonContainer: {
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
  directionsButtonText: {
    color: 'white',
    fontSize: 16
  }
})

export default BusinessView
