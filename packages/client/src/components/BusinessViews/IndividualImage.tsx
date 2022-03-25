import React from 'react'
import { StyleSheet, TouchableHighlight, Image } from 'react-native'

interface ComponentProps {
  onPressFunction : () => void
  ImageToDisplay : string
}

const IndividualImage = ({
  onPressFunction,
  ImageToDisplay,
} : ComponentProps) => {
  return (
    <React.Fragment>
      <TouchableHighlight
        activeOpacity={0.7}
        underlayColor='#efefef'
        onPress={onPressFunction}
      >
        <Image
          blurRadius={0}
          style={styles.imageStyle}
          source={{
            width: 320,
            height: 350,
            uri: ImageToDisplay,
          }}
        />
      </TouchableHighlight>
    </React.Fragment>
  )
}

const styles = StyleSheet.create({
  imageStyle: {
    borderColor: '#efefef',
    borderRadius: 30,
    borderWidth: 10,
  },
})

export default IndividualImage
