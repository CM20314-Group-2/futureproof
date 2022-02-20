import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Svg, { Circle } from 'react-native-svg'
import {ratingValToColour} from '@components/search/RatingCapsule'

const BACKGROUND_SECONDARY_COLOUR = '#FAF9F9'

const CircularRatingIndicator = ({circleWidth, circleHeight, progressBarWidth, progressValue, ratingName}: {circleWidth: number, circleHeight: number, progressBarWidth: number, progressValue: number, ratingName: string}) => {
  return (
        <View style={styles.CircularRatingIndicatorStyle}>
            <Svg style={StyleSheet.flatten([styles.IndicatorStyle, {width: circleWidth, height: circleHeight}])}>
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
                stroke={ratingValToColour(progressValue)}
                strokeWidth={progressBarWidth * 0.8}
                translateX={progressBarWidth}
                translateY={progressBarWidth}
                strokeDasharray={2 * Math.PI * ((circleWidth - (progressBarWidth * 2)) / 2)}
                strokeDashoffset={(2 * Math.PI * ((circleWidth - (progressBarWidth * 2)) / 2)) * (1 - (progressValue/100))}
                strokeLinecap={'round'}
                />
            </Svg>
            <Text style={StyleSheet.flatten([styles.RatingValueStyle, {top: (circleHeight/2)-((progressBarWidth * 1.5) / 2) - 2, fontSize: progressBarWidth * 1.5, color: ratingValToColour(progressValue)}])}>{progressValue}</Text>
            <Text style={StyleSheet.flatten([styles.RatingNameStyle, {top: (circleHeight/2) + ((progressBarWidth * 1.5) / 2) + 2, fontSize: 9, color: ratingValToColour(progressValue)}])}>{`${ratingName} Rating`}</Text>
        </View>
  )
}

export const styles = StyleSheet.create({
  CircularRatingIndicatorStyle: {
      alignItems: 'center'
  },
  IndicatorStyle: {
    transform: [{ rotate: '270deg'}],
    zIndex: 0
  },
  RatingValueStyle: {
      alignItems: 'center',
      position: 'absolute',
      fontWeight: 'bold',
      zIndex: 1
  },
  RatingNameStyle: {
      alignItems: 'center',
      position: 'absolute',
      zIndex: 1
  }
})

export default CircularRatingIndicator