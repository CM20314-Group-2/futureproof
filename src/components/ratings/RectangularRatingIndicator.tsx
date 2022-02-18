import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Svg, { Rect } from 'react-native-svg'

const ratingValToColour = (ratingValue: number): string => {
    if (ratingValue > 85) return '#1EA853'
    if (ratingValue > 70) return '#50A75C'
    if (ratingValue > 50) return '#BED62E'
    if (ratingValue > 30) return '#D6C52E'
  
    return 'brown'
}

const PROGRESS_BACKGROUND_COLOUR = '#F0EFEF'

const RectangularRatingIndicator = ({progressValue, ratingName}: {progressValue: number, ratingName: string}) => {
    return (
          <View style={styles.IndicatorBackgroundStyle}>
              <Text style={styles.RatingTitleStyle}>{ratingName}</Text>
              <Svg style={StyleSheet.flatten([styles.IndicatorStyle])}>
                  <Rect width={'100%'} height={10} rx={5} fill={PROGRESS_BACKGROUND_COLOUR}/>
                  <Rect width={`${progressValue}%`} height={10} rx={5} fill={ratingValToColour(progressValue)}/>
              </Svg>
          </View>
    )
  }

  export const styles = StyleSheet.create({
    IndicatorBackgroundStyle: {
        height: 85,
        backgroundColor: '#FAF9F9',
        padding: 10,
        borderRadius: 10,
        justifyContent: 'space-evenly'
    },
    IndicatorStyle: {
        height: 10,
        borderRadius: 5
    },
    RatingTitleStyle: {
        fontSize: 12
    }
  })
  
  export default RectangularRatingIndicator