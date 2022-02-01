import React, {useState} from "react"
import { SafeAreaView, View, FlatList, Text, Image, StyleSheet, TouchableOpacity } from "react-native"
import Business from './Business'

const MyView = ({business}: {business: Business}) => {
  
}

const BusinessView = () => {
    return (
        <SafeAreaView style={styles.businessViewStyle}>

        </SafeAreaView>
      );
  
}

const styles = StyleSheet.create({
businessViewStyle: {

},
  businessTitleText: {
    fontSize: 25,
    fontWeight: "500"
  },
  subtitleText: {
    fontSize: 14,
    color: "#686868"
  }
})

export default BusinessView