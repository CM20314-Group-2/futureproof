import { useReactiveVar } from '@apollo/client'
import { globalData } from '@components/search/SeachBarView/SearchBarView'
import SearchResult from '@components/search/SearchResult' 
import { BusinessType, DisplayableBusiness } from '@futureproof/typings'
import React from 'react'
import { FlatList, ScrollView, StyleSheet } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { ExampleLocationType } from '@components/business/BusinessView'


const TEST_BUSINESSES_DATA1 : DisplayableBusiness[] = [
  {
    id: '1',
    name: 'Starbucks',
    profileText: 'Seattle-based coffeehouse chain known for its signature roasts, light bites and WiFi availability.',
    sustainabilityScore: 64,
    customerScore: 76,
    type: BusinessType.Cafe,
    profilePicture:
      'https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png',
    images: [
      'https://cdn.vox-cdn.com/thumbor/VAkim2EiaKiIq4pUi295wH99Ces=/0x0:1100x729/1200x800/filters:focal(341x230:517x406)/cdn.vox-cdn.com/uploads/chorus_image/image/67717391/STARBUCKS.0.jpeg',
      'https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-42658.jpg',
      'https://cdn.vox-cdn.com/thumbor/1WVT8VSapMXbHPvsTEPxZp2gUrk=/0x0:1347x897/1200x800/filters:focal(567x342:781x556)/cdn.vox-cdn.com/uploads/chorus_image/image/62192379/starbucksredcups2015.1541431580.jpg',
      'https://cdn.vox-cdn.com/thumbor/bSoWzne8VZvz8tavhebsL7DNik0=/0x0:5860x4008/1200x800/filters:focal(3243x1967:4179x2903)/cdn.vox-cdn.com/uploads/chorus_image/image/67132574/shutterstock_1410002591.0.jpg'
    ]
  },
]
const TEST_BUSINESSES_DATA2 : DisplayableBusiness[] = [
  {
    id: '2',
    name: 'Mokoko Coffee',
    profileText: 'Stylish hangout in a historic setting.',
    sustainabilityScore: 86,
    customerScore: 88,
    type: BusinessType.Cafe,
    profilePicture:
      'https://www.mokokocoffee.com/wp-content/uploads/2017/06/Mokoko-Bath-Southgate-01.jpg',
    images: [
      'https://www.mokokocoffee.com/wp-content/uploads/2017/10/Mokoko-Bath-Abbey-Court-19.jpg',
      'https://www.mokokocoffee.com/wp-content/uploads/2017/10/Mokoko-Bath-Abbey-Court-30.jpg',
      'https://www.mokokocoffee.com/wp-content/uploads/2017/10/Mokoko-Bath-Abbey-Court-22.jpg'
    ]
  },
]
const TEST_BUSINESSES_DATA3 : DisplayableBusiness[] = [
  {
    id: '3',
    name: 'Colonna & Smalls',
    profileText: 'Coffee shop with a bespoke bean menu.',
    sustainabilityScore: 79,
    customerScore: 96,
    type: BusinessType.Cafe,
    profilePicture:
      'https://beanthere.at/2017/03/06/Review-Colonna-smalls-Bath/ColonnaAndSmalls-Exterior.jpg',
    images: [
      'https://bathfoodanddrink.co.uk/wp-content/uploads/2010/09/colonna_smalls_02.jpg',
      'https://beanthere.at/2017/03/06/Review-Colonna-smalls-Bath/ColonnaAndSmalls-CoffeeBarMaxwell.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/18/7b/ef/70/the-inside-of-the-coffee.jpg'
    ]
  },
]

const TEST_BUSINESSES_DATA4 : DisplayableBusiness[] = [
  {
    id: '4',
    name: 'Caffé Nero',
    profileText: 'Casual coffee-shop chain with a menu of Italian-style light dishes and specially blended drinks.',
    sustainabilityScore: 43,
    customerScore: 80,
    type: BusinessType.Cafe,
    profilePicture:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAAsCAMAAABorteMAAAA81BMVEX///8AAAD/+/T///3elEW8YQAXAADcjDj/9eoXBgDxtX71y55UKQDYhRrssXhjMwBCHQBzOgDKeBf51LHxwI5oMwDEcwgtEwDlnVEdAACyWwDgjSnShCAhCQCLSAD738Pft4rGll0LAACMTgCbaTDx07TwplOjVgD70ak0CQBlPQC6jGA6HwDgr3376NF9PwDYoF+8h03LklQ1AAD87d2lZg92NQC6gD9aJwCXTwBkJgBtKwApAACzgU2TWQx8RwCjZh/pw5/Ghz3/zY+OXhzMhDP3tnM6FgBKEgCxdSTHbADkgADumjwgEwCqYwDRdwDLYwBWZ30IAAADv0lEQVRYhe3Ya3fSMAAG4FwGCwMGWAQGW4Mgg7EBwrohKk6mdsqt/v9fY24t0KbIbPX4wfcDJ02aPj1tkmYDIO686VEc+0UPyBBemaM0+uuuUSiXk7fF6BdCRAZvioRVu0WCvVrEKxHtsNDIrHWXE7mnAI1lMTeYATB6K8sTZLyTpfcGaPPKbrebq0d261DmAwWtW1WGrxF4pYovkaFKDQM03RNicXPD6XQ67oPWFbwYT68/uu7D9fX1dIyMBrwZ8RLl7ideOZ3F4RYIZgHcPTMAGHvucDhCGHD3cfjYxwBzdzjsARx9KglXFpn74TOt32095ymrZi5Ll52EmzE9ZOUiz01lkpv3m2tOetItT5qPWLoPX+76cbmnPRaLuxCevSu47kf5NJmbl/OGu19ns3q9F30ebY9nNq5sSrz321QuhE8bV6YX2aX3jTOW5Dc+j5K3bFx9Z4MHgRGEpnz+M9EoXBOeicTggr4hQwBhvxZ7zYbRwoCKXx5LNIq01Ln8tP/5F0KIphKrbJcDieaeO+ngvbw4Fqnzg96xPud8MLeOjzSxvVFl2ZrmSofdcxaaS/8kJwmYSqUab0/4wWm+kdIEJribvofJYDJzQ16IOhlN84VZwcyF5eol8bs8GeVCbaRb0DfOxQWRk9I3D4rcZYJzEq9bEPscw9S3QpiVLruDhRGnmxddiy/D3JLrQtheWr/vrsoqq2e78CZxSva46xe7cbbd5vJSZLnWuc6m1zrosq2Sk8ahbslCKnLvKL4JrmuqKWG1dW7N3XIiq6pzWf8aDXWpt1vdxO/29a53Pgpx2ZyqWHq3uW6L/OhHcEmYK+aUtW9czfGfcdnky5b2uDWgcSd2R6SoHVcHunDVDHfzts7NmAOZ7jPddSPIa92BoXP9OdjNLga/cB8mk4l/WEV3z0FxntnrljqU0n5/d+MU5pqdQ10MyGWivM/VbdVC3EINH+6yz+XS3H7NATe433DdhyxfOXOq49yWc23jul0C68a5PDOd3VrKfW5lN0fb67NpsPXTctRd54923cWmV0nvAmLP83q3vJvkzvdIrhuGWjWgebLjri68rEJctuRU2imd64/GBZfu0EzQbTcYjctuOzv4TZcsVGN5IVqDc1PF0bkAyTn1fHfzpAt8WbPmIWzG1rqsR6V64bpP+r5V4aonOXC3pN6TbvN1LV3VLIPs7+YFAU5CxPFvw2nNlIvOaUKfH8J1D1yXqOslqm/4Yas2D/Z0bLavcTcRIJC0I/45gsLCG7F74N028tVgfcefYLx/jYJGoMMAAAAASUVORK5CYII=',
    images: [
      'https://media-cdn.tripadvisor.com/media/photo-s/15/ca/5d/aa/feeling-festive.jpg'
    ]
  },
]

const ExampleBusinessLocation1 : ExampleLocationType = {
  id: '1',
  address: 'Unit B Strahan House, Avon St, Bath BA1 1UN',
  latitude: 51.37758520597919,
  longitude: -2.3572347659685513,
}

const ExampleBusinessLocation2 : ExampleLocationType = {
  id: '2',
  address: '6 Abbey Churchyard, Bath BA1 1LY',
  latitude: 51.381455,
  longitude: -2.360142,
}

const ExampleBusinessLocation3 : ExampleLocationType = {
  id: '3',
  address: '6 Chapel Row, Bath BA1 1HN',
  latitude: 51.382769,
  longitude: -2.364452,
}

const ExampleBusinessLocation4 : ExampleLocationType = {
  id: '4',
  address: '26 Stall St, Bath BA1 1QF',
  latitude: 51.380215,
  longitude: -2.360097
}

type RootStackParamList = {
  MapView : undefined
  BusinessView : { businessToDisplay : DisplayableBusiness }
}

type Props = StackScreenProps<RootStackParamList>

const SearchView = ({ navigation } : Props) => {
  const results = useReactiveVar(globalData)
  

  const renderSearchItem = ({ item } : { item : DisplayableBusiness }) => (
    <SearchResult
      business={item}
      onPress={() => {
        // Respond to business seletion tap here
        navigation.push('BusinessView', { businessToDisplay: item } )
      }}
    />
  )
  
  if (!results) return null

  //console.log(results)

  return (
    <React.Fragment>
      <ScrollView style={styles.searchList}>
        <FlatList
          data={results}
          renderItem={renderSearchItem}
          keyExtractor={(item) => item.id}
        />
        <FlatList
          data={TEST_BUSINESSES_DATA2}
          renderItem={renderSearchItem}
          keyExtractor={(item) => item.id}
        />
        <FlatList
          data={TEST_BUSINESSES_DATA3}
          renderItem={renderSearchItem}
          keyExtractor={(item) => item.id}
        />
        <FlatList
          data={TEST_BUSINESSES_DATA4}
          renderItem={renderSearchItem}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
    </React.Fragment>
  )
}

const styles = StyleSheet.create({
  searchList: {
    backgroundColor: '#f8f9fa',
    flex: 1,
    width: '90%',
  },
})

export default SearchView
