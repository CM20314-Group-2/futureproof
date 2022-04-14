import RectangularRatingIndicator from '@components/ratings/RectangularRatingIndicator'
import { Rating } from '@futureproof/typings'
import React from 'react'
import { StyleSheet, View } from 'react-native'

interface Props {
  susRatings : number[]
  susRatingsNames : string[]

}

const RatingBreakdownItems = ( {susRatings, susRatingsNames} : Props) => {
  
  const ratings = []
  
  for (let i = 0; i < susRatings.length; i++) {
    ratings.push(
      <RectangularRatingIndicator
        key={i}
        progressValue={susRatings[i]}
        ratingName={susRatingsNames[i]}
      />
    )
  }

  return (
    <React.Fragment>
      <View style={styles.rectangularRatingStyle}>
        {ratings}
      </View>
    </React.Fragment>
  )
}

export const styles = StyleSheet.create({
  rectangularRatingStyle: {
    paddingVertical: 5
  }
})

export default RatingBreakdownItems
