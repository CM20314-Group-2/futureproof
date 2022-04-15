import React from 'react'
import RectangularRatingIndicator from '@components/ratings/RectangularRatingIndicator'
import { Rating } from '@futureproof/typings'
import { StyleSheet, View } from 'react-native'

const RatingBreakdownItems = ({ ratingsToDisplay = [] } : { ratingsToDisplay ?: Rating[] }) => {

  return (
    <React.Fragment>
      {ratingsToDisplay.map((rating) => {
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
