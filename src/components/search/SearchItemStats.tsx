import RatingCapsule from "@components/Search/RatingCapsule";
import { DisplayableBusiness } from "@futureproof/typings";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

<<<<<<< HEAD
const SearchItemStats = ({ business }: { business: DisplayableBusiness }) => (
  <View style={styles.searchItemStats}>
    <Text style={styles.businessTitleText}>{business.name}</Text>
    <View style={styles.logoAndSubtitleView}>
=======
type ComponentProps = Pick<DisplayableBusiness, 'name' | 'customerScore' | 'sustainabilityScore'>

const SearchItemStats = ({ name, customerScore, sustainabilityScore } : ComponentProps) => (
  <View style={styles.searchItemStats}>
    <Text style={styles.businessTitleText}>{name}</Text>
    <View style = {styles.logoAndSubtitleView}>
>>>>>>> origin/sprint-2
      <Image
        source={require("../../../assets/icon_location.png")}
        style={styles.businessLogoImageStyle}
        resizeMode="contain"
      />
      <Text style={styles.subtitleText}>{`${0.2} miles`}</Text>
    </View>

    <View style={styles.ratingTextAndCapsuleView}>
      <Text style={styles.ratingText}>FutureProof Rating:</Text>
<<<<<<< HEAD
      <RatingCapsule ratingValue={business.sustainabilityScore} />
=======
      <RatingCapsule ratingValue={sustainabilityScore}/>
>>>>>>> origin/sprint-2
    </View>
    <View style={styles.ratingTextAndCapsuleView}>
      <Text style={styles.ratingText}>Consumer Rating:</Text>
<<<<<<< HEAD
      <RatingCapsule ratingValue={business.customerScore} />
=======
      <RatingCapsule ratingValue={customerScore}/>
>>>>>>> origin/sprint-2
    </View>
  </View>
);

const styles = StyleSheet.create({
<<<<<<< HEAD
  searchItemStats: {
    flex: 1,
    flexDirection: "column",
=======
  businessLogoImageStyle: {
    height: 20,
    width: 20
>>>>>>> origin/sprint-2
  },
  businessTitleText: {
    fontSize: 25,
    fontWeight: "500",
  },
<<<<<<< HEAD
  subtitleText: {
    fontSize: 14,
    color: "#686868",
  },
  businessLogoImageStyle: {
    width: 20,
    height: 20,
  },
=======
>>>>>>> origin/sprint-2
  logoAndSubtitleView: {
    flexDirection: "row",
  },
  ratingText: {
    color: '#818181',
    fontSize: 11,
    paddingRight: 10
  },
  ratingTextAndCapsuleView: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingVertical: 2,
  },
<<<<<<< HEAD
  ratingText: {
    fontSize: 11,
    color: "#818181",
    paddingRight: 10,
  },
});

export default SearchItemStats;
=======
  searchItemStats: {
    flex: 1,
    flexDirection: 'column'
  },
  subtitleText: {
    color: '#686868',
    fontSize: 14
  }
})

export default SearchItemStats
>>>>>>> origin/sprint-2
