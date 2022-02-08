import React, {useState} from "react"
import { SafeAreaView, View, FlatList, Text, Image, StyleSheet, TouchableOpacity } from "react-native"

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

export default RatingCapsule