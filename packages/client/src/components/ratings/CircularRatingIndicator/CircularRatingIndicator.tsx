import { ratingToColour } from '@components/ratings/RatingCapsule'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Svg, { Circle } from 'react-native-svg'

const BACKGROUND_SECONDARY_COLOUR = '#FAF9F9'

/**
 * Creates a circular rating indictor.
 * 
 * @param {number} circleWidth The width of the circle to show in this view
 * @param {number} circleHeight The height of the circle to show in this view
 * @param {number} progressBarWidth The width of the progress bar that follows the circular shape
 * @param {number} progressValue The progress level that should be represented by this view
 * @param {string} ratingName The title of the rating (appears at centre of circle)
 * @returns Circular rating indictor view
 */

const CircularRatingIndicator = ({ circleWidth, circleHeight, progressBarWidth, progressValue, ratingName } : { circleWidth : number, circleHeight : number, progressBarWidth : number, progressValue : number, ratingName : string }) => {
  return (
    <View style={styles.circularRatingIndicatorStyle}>
      <Svg style={StyleSheet.flatten([styles.indicatorStyle, { width: circleWidth, height: circleHeight }])} testID={'circular-indicator'}>
        <Circle
          cx={(circleWidth - (progressBarWidth * 2)) / 2}
          cy={(circleHeight - (progressBarWidth * 2)) / 2}
          r={(circleWidth - (progressBarWidth * 2)) / 2}
          stroke={BACKGROUND_SECONDARY_COLOUR}
          strokeWidth={progressBarWidth}
          translateX={progressBarWidth}
          translateY={progressBarWidth}
        />
        <Circle
          cx={(circleWidth - (progressBarWidth * 2)) / 2}
          cy={(circleHeight - (progressBarWidth * 2)) / 2}
          r={(circleWidth - (progressBarWidth * 2)) / 2}
          stroke={ratingToColour(progressValue)}
          strokeWidth={progressBarWidth * 0.8}
          translateX={progressBarWidth}
          translateY={progressBarWidth}
          strokeDasharray={2 * Math.PI * ((circleWidth - (progressBarWidth * 2)) / 2)}
          strokeDashoffset={(2 * Math.PI * ((circleWidth - (progressBarWidth * 2)) / 2)) * (1 - (progressValue / 100))}
          strokeLinecap={'round'}
        />
      </Svg>
      <Text
        style={StyleSheet.flatten([styles.ratingValueStyle, { top: (circleHeight / 2) - ((progressBarWidth * 1.5) / 2) - 2, fontSize: progressBarWidth * 1.5, color: ratingToColour(progressValue) }])}
        testID={'rating-value-text'}>
        { Math.round(progressValue) }
      </Text>
      <Text
        style={StyleSheet.flatten([styles.ratingNameStyle, { top: (circleHeight / 2) + ((progressBarWidth * 1.5) / 2) + 2, fontSize: 9, color: ratingToColour(progressValue) }])}
        testID={'rating-name-text'}>
        { `${ratingName} Rating` }
      </Text>
    </View>
  )
}

export const styles = StyleSheet.create({
  circularRatingIndicatorStyle: {
    alignItems: 'center'
  },
  indicatorStyle: {
    transform: [{ rotate: '270deg' }],
    zIndex: 0
  },
  ratingNameStyle: {
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1
  },
  ratingValueStyle: {
    alignItems: 'center',
    fontWeight: 'bold',
    position: 'absolute',
    zIndex: 1
  }
})

export default CircularRatingIndicator
