import DescriptionView from '@components/DescriptionView'
import ImagesCarousel from '@components/ImagesCarousel'
import RatingsView from '@components/RatingsView'
import TitleView from '@components/TitleView'
import { BusinessType, DisplayableBusiness } from '@typings/types'
import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native'

// PLACEHOLDER BUSINESS -> Update to fetch graphQL
const ExampleBusiness: DisplayableBusiness =  {
  id: '1',
  name: 'Starbucks',
  profileText: 'This is a test business',
  sustainabilityScore: 100,
  customerScore: 65,
  type: BusinessType.Cafe,
  profilePicture: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png'
}

const BusinessView = () => {
  return (
    <SafeAreaView style={styles.businessViewStyle}>
      <ScrollView>
        <TitleView name={ExampleBusiness.name} profilePicture={ExampleBusiness.profilePicture}/>
        <DescriptionView descriptionText={ExampleBusiness.profileText || ''}/>
        <RatingsView futureProofRating={ExampleBusiness.sustainabilityScore || 0} userRating={ExampleBusiness.customerScore || 0}/>
        <ImagesCarousel/>
      </ScrollView>
    </SafeAreaView>
  )
}

export const styles = StyleSheet.create({
  businessViewStyle: {
    alignSelf: 'center',
    marginHorizontal: 30
  }
})

export default BusinessView