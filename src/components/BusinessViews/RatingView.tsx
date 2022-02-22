import { Business } from "@futureproof/typings";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface ComponentProps {
  ratingName: "FutureProof" | "Consumer";
  ratingValue: Business["customerScore"] | Business["sustainabilityScore"];
}

const RatingView = ({ ratingName, ratingValue = 0 }: ComponentProps) => (
  <View style={styles.itemBackgroundStyle}>
    <View style={styles.ratingContainerStyle}>
      <Text>{`${ratingName} Rating`}</Text>
      <Text testID="rating-value">{ratingValue == null ? 0 : ratingValue}</Text>
      <Text style={styles.subtitleText}>Tap for Details</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  itemBackgroundStyle: {
    backgroundColor: "#FAF9F9",
    borderRadius: 10,
  },
  ratingContainerStyle: {
    alignItems: "center",
  },
  subtitleText: {
    color: "#A0A0A0",
    fontSize: 10,
  },
});

export default RatingView;
