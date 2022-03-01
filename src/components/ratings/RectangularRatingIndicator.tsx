import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Svg, { Rect } from 'react-native-svg'
import { ratingToColour } from '@components/search/RatingCapsule'

const PROGRESS_BACKGROUND_COLOUR = '#F0EFEF'

const RectangularRatingIndicator = ({ progressValue, ratingName } : { progressValue : number, ratingName : string }) => {
  return (
    <View style={styles.indicatorBackgroundStyle}>
      <Text style={styles.ratingTitleStyle} testID={'rating-title-text'}>{ratingName}</Text>
      <Svg style={StyleSheet.flatten([styles.indicatorStyle])}>
        <Rect width={'100%'} height={10} rx={5} fill={PROGRESS_BACKGROUND_COLOUR}/>
        <Rect width={`${progressValue}%`} height={10} rx={5} fill={ratingToColour(progressValue)}/>
      </Svg>
    </View>
  )
}

export const styles = StyleSheet.create({
  indicatorBackgroundStyle: {
    backgroundColor: '#FAF9F9',
    borderRadius: 10,
    height: 85,
    justifyContent: 'space-evenly',
    padding: 10
  },
  indicatorStyle: {
    borderRadius: 5,
    height: 10
  },
  ratingTitleStyle: {
    fontSize: 12
  }
})
  
export default RectangularRatingIndicator
