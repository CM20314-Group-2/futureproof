import React, { useEffect, useRef } from 'react'
import {
  Animated,
  Easing,
  Pressable,
  StyleSheet,
  useWindowDimensions,
} from 'react-native'

interface ComponentProps {
  children: React.ReactNode
  show: boolean
  height: number
  onOuterClick?: () => void
}

/**
 * BottomSheet Component -
 *
 * source: https://stackoverflow.com/questions/39117599/how-to-slide-view-in-and-out-from-the-bottom-in-react-native
 *
 * This component creates an animated bottom sheet that slides in and out of view from the bottom of the screen.
 *
 * @param children the elements that are to appear in the bottom sheet when it is shown
 * @param show boolean that controls whether the bottom sheet should be shown or not
 * @param height the height of the bottom sheet
 * @param onOuterClick the function that gets called when the user clicks off of the bottom sheet
 * @returns the bottom sheet component
 */
const BottomSheet = ({
  children,
  show,
  height,
  onOuterClick,
}: ComponentProps) => {
  const useAnimatedBottom = (show: boolean, height: number) => {
    const animatedValue = useRef(new Animated.Value(0))
    const bottom = animatedValue.current.interpolate({
      inputRange: [0, 1],
      outputRange: [-height, 0],
    })

    useEffect(() => {
      Animated.timing(animatedValue.current, {
        toValue: show ? 1 : 0,
        duration: show ? 300 : 150,
        easing: Easing.bezier(0.5, 0, 0.5, 1),
        useNativeDriver: false,
      }).start()
    }, [show])

    return bottom
  }

  const screenHeight = useWindowDimensions().height
  const bottom = useAnimatedBottom(show, height)

  return (
    <React.Fragment>
      {show && (
        <Pressable
          onPress={onOuterClick}
          style={[
            styles.background,
            { height: screenHeight, top: -screenHeight },
          ]}
        />
      )}
      <Animated.View style={[styles.bottomSheet, { height, bottom }]}>
        {children}
      </Animated.View>
    </React.Fragment>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#000000',
    elevation: 1,
    opacity: 0.5,
    position: 'absolute',
    width: '100%',
    zIndex: 1,
  },
  bottomSheet: {
    backgroundColor: '#ffffff',
    elevation: 1,
    position: 'absolute',
    width: '100%',
    zIndex: 1,
  },
})

export default BottomSheet
