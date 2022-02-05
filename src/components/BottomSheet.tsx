import React, { useEffect, useRef } from "react";
import { Animated, Easing, Pressable, StyleSheet, useWindowDimensions } from "react-native";

// source: https://stackoverflow.com/questions/39117599/how-to-slide-view-in-and-out-from-the-bottom-in-react-native

const BottomSheet = (
  { children, show, height, onOuterClick }:
  { children: React.ReactNode, show: boolean, height: number, onOuterClick?: () => void }) => {

    const useAnimatedBottom = (show: boolean, height: number) => {
    const animatedValue = useRef(new Animated.Value(0));
    const bottom = animatedValue.current.interpolate({ inputRange: [0, 1], outputRange: [-height, 0] });

    useEffect(() => {
      if (show) {
        Animated.timing(animatedValue.current, {
          toValue: 1,
          duration: 300,
          easing: Easing.bezier(0.5, 0, 0.5, 1),
          useNativeDriver: false
        }).start();
      } else {
        Animated.timing(animatedValue.current, {
          toValue: 0,
          duration: 150,
          easing: Easing.bezier(0.5, 0, 0.5, 1),
          useNativeDriver: false
        }).start();
      }
    }, [show]);

    return bottom;
  }

  const screenHeight  = useWindowDimensions().height;
  const bottom = useAnimatedBottom(show, height);

  return (
    <React.Fragment>
      {show && (<Pressable onPress={ onOuterClick } style={ [styles.background, { height: screenHeight, top: -screenHeight }] }/>)}
      <Animated.View style={ [styles.bottomSheet, { height, bottom }] }>
        { children }
      </Animated.View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    width: '100%',
    zIndex: 1,
    elevation: 1,
    backgroundColor: "#000000",
    opacity: 0.5
  },
  bottomSheet: {
    position: "absolute",
    width: "100%",
    zIndex: 1,
    elevation: 1,
    backgroundColor: "#ffffff"
  }
});

export default BottomSheet
