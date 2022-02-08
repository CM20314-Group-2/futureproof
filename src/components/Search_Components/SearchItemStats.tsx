import React, {useState} from "react"
import { SafeAreaView, View, FlatList, Text, Image, StyleSheet, TouchableOpacity } from "react-native"
import Business from '../../typings/types'
import RatingCapsule from './RatingCapsule'

const SearchItemStats = ({business}: {business: Business}) => (
  <View style={styles.searchItemStats}>
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
        <Text style={styles.ratingText}>Consumer Rating:</Text>
        <RatingCapsule ratingValue={business.userRating}/>
      </View>
  </View>
)

const styles = StyleSheet.create({
    searchItemStats: {
        flex: 1,
        flexDirection: "column"
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

export default SearchItemStats