import BusinessViewMap from '@components/business/BusinessViewMap'
import DescriptionView from '@components/business/DescriptionView'
import ImagesCarousel from '@components/business/ImageCarousel'
import TitleView from '@components/business/TitleView'
import RatingsView from '@components/ratings/RatingsView'
import { NavigationProps, RootStackParamList } from '@futureproof/client/App'
import { DisplayableBusiness, Location } from '@futureproof/typings'
import { RouteProp } from '@react-navigation/native'
import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import openMap from 'react-native-open-maps'


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

export interface ComponentProps {business : DisplayableBusiness}
interface Props extends NavigationProps{
  route : RouteProp<RootStackParamList, 'BusinessView'>
} 

const BusinessView = ({ navigation, route } : Props) => {
  const { params : { business } } = route
  return (
    <View>
      <SafeAreaView style={styles.businessViewStyle}>
        <ScrollView
          contentContainerStyle={styles.businessViewScrollStyle}
          contentInsetAdjustmentBehavior='automatic'
        >
          <TitleView
            name={business.name}
            profilePicture={
              business.profilePicture == null
                ? ''
                : business.profilePicture
            }
            businessAddress={ExampleBusinessLocation.address}
          />
          <DescriptionView
            profileText={business.profileText}
          />
          <RatingsView
            business={business}
            navigation={{ navigation, route }}
          />
          <BusinessViewMap businessLocation={ExampleBusinessLocation} />
          <ImagesCarousel Images={business.images as string[]} />
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
