import React, {useState} from "react"
import { SafeAreaView, View, FlatList, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native"
import Business from '../typings/types'

const ExampleBusiness: Business = {
  id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
  businessName: 'Starbucks Coffee',
  distance: '1.2',
  futureProofRating: 75,
  userRating: 62,
  logoURL: '../../assets/icon.png'
}

const ExampleBusinessDescription = "Starbucks Corporation is an American multinational chain of coffeehouses and roastery reserves headquartered in Seattle, Washington. It is the world's largest coffeehouse chain."

const TitleView = ({business}: {business: Business}) => (
  <View style={{alignItems: "center"}}>
    <Image source={require('../../assets/icon.png')} style={{width: 90, height: 90, borderRadius: 10}} resizeMode="contain"/>
    <Text style={styles.titleText}>{business.businessName}</Text>
    <Text style={styles.subtitleText}>{"2 Bath Street, Bath, BA1 1AA"}</Text>
  </View>
);

const DescriptionView = ({descriptionText}: {descriptionText: string}) => (
  <View>
    <Text style={styles.headingText}>{"DESCRIPTION"}</Text>
    <View style={styles.itemBackgroundStyle}>
      <View style={{flexDirection: "row", alignItems: "center", paddingHorizontal: 15}}>
        <Image source={require('../../assets/icon_paragraph.png')} style={{width: 25, height: 25}} resizeMode="contain"/>
        <Text style={styles.bodyText}>{descriptionText}</Text>
      </View>
    </View>
  </View>
)

const RatingView = ({ratingName, ratingValue}: {ratingName: string, ratingValue: Number}) => (
  <View style={styles.itemBackgroundStyle}>
    <View style={{alignItems: "center"}}>
      <Text>{ratingName + " Rating"}</Text>
      <Text style={styles.subtitleText}>{"Tap for Details"}</Text>
    </View>
  </View>
)

const RatingsView = ({futureProofRating, userRating}: {futureProofRating: Number, userRating: Number}) => (
  <View>
    <Text style={styles.headingText}>{"RATINGS"}</Text>
    <View style={{flexDirection: "row", justifyContent: "space-between"}}>
      <RatingView ratingName="FutureProof" ratingValue={futureProofRating}/>
      <RatingView ratingName="Consumer" ratingValue={futureProofRating}/>
    </View>
  </View>
)

const ImagesCarousel = () => (
  <View>
    <Text style={styles.headingText}>{"DESCRIPTION"}</Text>
    <Image source={require('../../assets/Sample_Business_Image.png')} style={{width: 250, height: 300, borderRadius: 10, alignSelf: "center"}} resizeMode="contain"/>
  </View>
)

const BusinessView = () => {
  return (
    <SafeAreaView style={styles.businessViewStyle}>
      <ScrollView>
        <TitleView business={ExampleBusiness}/>
        <DescriptionView descriptionText={ExampleBusinessDescription}/>
        <RatingsView futureProofRating={ExampleBusiness.futureProofRating} userRating={ExampleBusiness.userRating}/>
        <ImagesCarousel/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  businessViewStyle: {
    alignSelf: "center",
    marginHorizontal: 30
  },
  itemBackgroundStyle: {
    backgroundColor: "#FAF9F9",
    borderRadius: 10
  },
  titleText: {
    fontSize: 25,
    fontWeight: "500"
  },
  headingText: {
    fontSize: 12,
    color: "#A0A0A0",
    paddingLeft: 20
  },
  subtitleText: {
    fontSize: 10,
    color: "#A0A0A0"
  },
  bodyText: {
    fontSize: 12,
    color: "black",
    padding: 10
  }
})

export default BusinessView