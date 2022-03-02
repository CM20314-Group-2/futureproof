import DescriptionView from '@components/BusinessViews/DescriptionView'
import ImagesCarousel from '@components/BusinessViews/ImagesCarousel'
import RatingsView from '@components/BusinessViews/RatingsView'
import TitleView from '@components/BusinessViews/TitleView'
import { BusinessType, DisplayableBusiness } from '@futureproof/typings'
import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native'

// PLACEHOLDER BUSINESS -> Update to fetch graphQL
const ExampleBusiness: DisplayableBusiness = {
  id: '1',
  name: 'Starbucks',
  profileText: 'This is a test business',
  sustainabilityScore: 100,
  customerScore: 65,
  type: BusinessType.Cafe,
  profilePicture:
    'https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png',
}

const Image1 =
  'https://cdn.vox-cdn.com/thumbor/VAkim2EiaKiIq4pUi295wH99Ces=/0x0:1100x729/1200x800/filters:focal(341x230:517x406)/cdn.vox-cdn.com/uploads/chorus_image/image/67717391/STARBUCKS.0.jpeg'
const Image2 =
  'https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-42658.jpg'
const Image3 =
  'https://cdn.vox-cdn.com/thumbor/1WVT8VSapMXbHPvsTEPxZp2gUrk=/0x0:1347x897/1200x800/filters:focal(567x342:781x556)/cdn.vox-cdn.com/uploads/chorus_image/image/62192379/starbucksredcups2015.1541431580.jpg'
const Image4 =
  'https://cdn.vox-cdn.com/thumbor/bSoWzne8VZvz8tavhebsL7DNik0=/0x0:5860x4008/1200x800/filters:focal(3243x1967:4179x2903)/cdn.vox-cdn.com/uploads/chorus_image/image/67132574/shutterstock_1410002591.0.jpg'

const BusinessView = () => {
  return (
    <SafeAreaView style={styles.businessViewStyle}>
      <ScrollView>
        <TitleView
          name={ExampleBusiness.name}
          profilePicture={ExampleBusiness.profilePicture}
        />
        <DescriptionView profileText={ExampleBusiness.profileText} />
        <RatingsView
          customerScore={ExampleBusiness.customerScore}
          sustainabilityScore={ExampleBusiness.sustainabilityScore}
        />
        <ImagesCarousel
          Image1={Image1}
          Image2={Image2}
          Image3={Image3}
          Image4={Image4}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export const styles = StyleSheet.create({
  businessViewStyle: {
    marginHorizontal: 30,
  },
})

export default BusinessView
