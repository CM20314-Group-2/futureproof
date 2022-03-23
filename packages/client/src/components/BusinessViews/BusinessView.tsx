import BusinessViewMap from '@components/BusinessViews/BusinessViewMap'
import ImagesCarousel from '@components/BusinessViews/ImagesCarousel'
import DescriptionView from '@components/BusinessViews/DescriptionView'
import RatingsView from '@components/BusinessViews/RatingsView'
import TitleView from '@components/BusinessViews/TitleView'
import { DisplayableBusiness, Location } from '@futureproof/typings'
import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import openMap from 'react-native-open-maps'
import { StackScreenProps } from '@react-navigation/stack'

// PLACEHOLDER BUSINESS LOCATION -> Update to fetch graphQL
export type ExampleLocationType = Pick<
  Location,
  'id' | 'address' | 'latitude' | 'longitude'
>

const ExampleBusinessLocation : ExampleLocationType = {
  id: '1',
  address: 'Unit B Strahan House, Avon St, Bath BA1 1UN',
  latitude: 51.37758520597919,
  longitude: -2.3572347659685513,
}

type RootStackParamList = {
  BusinessView : { businessToDisplay : DisplayableBusiness }
}

type Props = StackScreenProps<RootStackParamList>

const BusinessView = ({ route } : Props) => {
  return (
    <View>
      <SafeAreaView style={styles.businessViewStyle}>
        <ScrollView
          contentContainerStyle={styles.businessViewScrollStyle}
          contentInsetAdjustmentBehavior='automatic'
        >
          <TitleView
            name={route.params.businessToDisplay.name}
            profilePicture={
              route.params.businessToDisplay.profilePicture == null
                ? ''
                : route.params.businessToDisplay.profilePicture
            }
            businessAddress={ExampleBusinessLocation.address}
          />
          <DescriptionView
            profileText={route.params.businessToDisplay.profileText}
          />
          <RatingsView
            customerScore={route.params.businessToDisplay.customerScore}
            sustainabilityScore={
              route.params.businessToDisplay.sustainabilityScore
            }
          />
          <BusinessViewMap businessLocation={ExampleBusinessLocation} />
          <ImagesCarousel Images={route.params.businessToDisplay.images} />
        </ScrollView>
      </SafeAreaView>
      <TouchableOpacity
        onPress={() => openMap({ end: ExampleBusinessLocation.address })}
        style={styles.directionsButtonContainer}
      >
        <Text style={styles.directionsButtonText}>Get Directions</Text>
      </TouchableOpacity>
    </View>
  )
}

export const styles = StyleSheet.create({
  businessViewScrollStyle: {
    flexGrow: 1,
    height: '150%',
  },
  businessViewStyle: {
    marginHorizontal: 30,
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
    zIndex: 0,
  },
  directionsButtonText: {
    color: 'white',
    fontSize: 16,
  },
})

export default BusinessView
