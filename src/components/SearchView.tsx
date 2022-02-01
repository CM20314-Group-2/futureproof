import React, {useState} from "react"
import { SafeAreaView, View, FlatList, Text, Image, StyleSheet, TouchableOpacity } from "react-native"
import Business from './Business'

const TEST_BUSINESSES_DATA: Business[] = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    businessName: 'Starbucks Coffee',
    distance: '1.2',
    futureProofRating: 75,
    userRating: 62,
    logoURL: '../../assets/icon.png'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    businessName: 'Costa Coffee',
    distance: '1.3',
    futureProofRating: 88,
    userRating: 40,
    logoURL: '../../assets/icon.png'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    businessName: 'Pret A Manger',
    distance: '1.5',
    futureProofRating: 85,
    userRating: 38,
    logoURL: '../../assets/icon.png'
  }
];

function ratingValToColour(ratingValue: Number): string {
  if (ratingValue > 85) {
    return "#1EA853"
  }
  if (ratingValue > 70) {
    return "#50A75C"
  }
  if (ratingValue > 50) {
    return "#BED62E"
  }
  if (ratingValue > 30) {
    return "#D6C52E"
  }
  return "brown"
}

function ratingValToText(ratingValue: Number): string {
  if (ratingValue > 85) {
    return "Great"
  }
  if (ratingValue > 70) {
    return "Good"
  }
  if (ratingValue > 50) {
    return "Okay"
  }
  if (ratingValue > 30) {
    return "Bad"
  }
  return "Avoid"
}

const RatingCapsuleHeight = 18;

const RatingCapsule = ({ratingValue}: {ratingValue: Number}) => (
  <View style={{alignItems: "center", backgroundColor: ratingValToColour(ratingValue), width: 55, height: RatingCapsuleHeight, borderRadius: RatingCapsuleHeight/2}}>
    <Text style={{fontSize: 11, color: "white"}}>{ratingValToText(ratingValue)}</Text>
  </View>
)

const BusinessLogo = ({logoURL}: {logoURL: string}) => (
  <View style={{paddingRight: 10}}>
    <Image source={require('../../assets/icon.png')} style={{width: 58, height: 58}} resizeMode="contain"/>
  </View>
)

const SearchItemStats = ({business}: {business: Business}) => (
  <View
    style={{
      flex: 1,
      flexDirection: "column"
    }}
    >
      <Text style={styles.businessTitleText}>{business.businessName}</Text>

      <View style = {{flexDirection: "row"}}>
        <Image source={require('../../assets/icon_location.png')} style={{width: 20, height: 20}} resizeMode="contain"/>
        <Text style={styles.subtitleText}>{business.distance + " miles"}</Text>
      </View>
      
      <View style = {{flexDirection: "row", justifyContent: "flex-end", paddingVertical: 2}}>
        <Text style={styles.ratingText}>FutureProof Rating:</Text>
        <RatingCapsule ratingValue={business.futureProofRating}/>
      </View>
      <View style = {{flexDirection: "row", justifyContent: "flex-end", paddingVertical: 2}}>
        <Text style={styles.ratingText}>User Rating:</Text>
        <RatingCapsule ratingValue={business.userRating}/>
      </View>
  </View>
)

const SearchItem = ({ business, onPress }: {business : Business, onPress: any}) => (
  <TouchableOpacity onPress={onPress}
    style={{
      backgroundColor: '#FAF9F9',
      flexDirection: "row",
      marginVertical: 10,
      marginHorizontal: 25,
      padding: 12,
      borderRadius: 10,
      alignItems: "center"
    }}
  >
    <BusinessLogo logoURL={business.logoURL}/>
    <SearchItemStats business={business}/>
  </TouchableOpacity>
);

const SearchView = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderSearchItem = ({ item } : { item : Business}) => (
    <SearchItem
      business={item}
      onPress={() => {
        setSelectedId(item.id)

      }}
    />
  );
  return (
    <SafeAreaView style={styles.searchList}>
      <FlatList
        data={TEST_BUSINESSES_DATA}
        renderItem={renderSearchItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  searchList: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  businessTitleText: {
    fontSize: 25,
    fontWeight: "500"
  },
  subtitleText: {
    fontSize: 14,
    color: "#686868"
  },
  ratingText: {
    fontSize: 11,
    color: "#818181",
    paddingRight: 10
  }
})

export default SearchView