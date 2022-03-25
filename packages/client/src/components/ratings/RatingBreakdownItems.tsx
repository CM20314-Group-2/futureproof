import React from 'react'
import { View, StyleSheet } from 'react-native'
import RectangularRatingIndicator from '@components/ratings/RectangularRatingIndicator'
import { Rating } from '@futureproof/typings'

/**
 * Creates a list of business sub-rating views (horizontal/rectangular rating views)
 * 
 * @param {Rating[]} ratings An array of a business' sub-ratings 
 * @returns A list of views corresponding to the business sub-ratings passed in
 */

const RatingBreakdownItems = ({ ratings = [] } : { ratings ?: Rating[] }) => {
  return (
    <React.Fragment>
      {ratings.map((rating) => {
        return (
          <View key={rating.id} style={styles.rectangularRatingStyle}>
            <RectangularRatingIndicator progressValue={rating.ratingValue} ratingName={rating.ratingName}/>
          </View>
        )
      })}
    </React.Fragment>
  )
}

export const styles = StyleSheet.create({
  rectangularRatingStyle: {
    paddingVertical: 5
  }
})

export default RatingBreakdownItems