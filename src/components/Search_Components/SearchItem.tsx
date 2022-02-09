import React, {useState} from "react"
import { SafeAreaView, View, FlatList, Text, Image, StyleSheet, TouchableOpacity } from "react-native"
import {Business} from '@typings/types'
import SearchItemStats from './SearchItemStats'

const BusinessLogo = ({logoURL}: {logoURL: string}) => (
  <View style={{paddingRight: 10}}>
    <Image source={require('../../../assets/icon.png')} style={{width: 58, height: 58}} resizeMode="contain"/>
  </View>
)

const SearchItem = ({ business, onPress }: {business : Business, onPress: any}) => (
  <TouchableOpacity onPress={onPress}
    style={styles.searchItemStyle}
  >
    <BusinessLogo logoURL={""}/>
    <SearchItemStats business={business}/>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  searchItemStyle: {
    backgroundColor: '#FAF9F9',
      flexDirection: "row",
      marginVertical: 10,
      marginHorizontal: 25,
      padding: 12,
      borderRadius: 10,
      alignItems: "center"
  }
})

export default SearchItem