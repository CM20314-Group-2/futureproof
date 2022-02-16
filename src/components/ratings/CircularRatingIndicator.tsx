import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import Svg, { Circle } from 'react-native-svg'

const CIRCLE_LENGTH = 100

const BACKGROUND_SECONDARY_COLOUR = '#FAF9F9'
const GREEN_ACCENT_COLOUR = '#50A75C'

const CircularRatingIndicator = ({circleWidth, circleHeight, progressBarWidth, progressValue}: {circleWidth: number, circleHeight: number, progressBarWidth: number, progressValue: number}) => {
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
                stroke={GREEN_ACCENT_COLOUR}
                strokeWidth={progressBarWidth * 0.8}
                translateX={progressBarWidth}
                translateY={progressBarWidth}
                strokeDasharray={2 * Math.PI * ((circleWidth - (progressBarWidth * 2)) / 2)}
                strokeDashoffset={(2 * Math.PI * ((circleWidth - (progressBarWidth * 2)) / 2)) * (1 - (progressValue/100))}
                strokeLinecap={'round'}
                />
            </Svg>
            <Text style={StyleSheet.flatten([styles.RatingValueStyle, {top: (circleHeight/2)-6}])}>{progressValue}</Text>
        </View>
  )
}

export const styles = StyleSheet.create({
  CircularRatingIndicatorStyle: {
      alignItems: 'center',
      alignSelf: 'center'
  },
  IndicatorStyle: {
    transform: [{ rotate: '270deg'}],
    zIndex: 0
  },
  RatingValueStyle: {
      alignItems: 'center',
      position: 'absolute',
      fontWeight: 'bold',
      color: GREEN_ACCENT_COLOUR,
      zIndex: 1
  }
})

export default CircularRatingIndicator