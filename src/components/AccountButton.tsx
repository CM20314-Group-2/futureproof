import React from 'react'
import { View, StyleSheet, useWindowDimensions, Platform } from 'react-native'

const AccountButton = () => {
  const screenWidth = useWindowDimensions().width

  return (
    <React.Fragment>
      <View style={[styles.circleInside, { marginLeft: screenWidth - 80 }]}>
        <View style={styles.circleHead} />
        <View style={styles.ovalBody} />
      </View>
    </React.Fragment>
  )
}

const styles = StyleSheet.create({
  circleHead: {
    backgroundColor: 'black',
    borderRadius: 15 / 2,
    height: 15,
    marginLeft: 15,
    marginTop: 5,
    width: 15,
  },
  circleInside: {
    backgroundColor: 'white',
    ...Platform.select({
      ios: {
        marginTop: 10,
      },
      android: {
        marginTop: 70,
      },
    }),
    borderColor: 'black',
    borderRadius: 60 / 2,
    borderWidth: 7.5,
    height: 60,
    width: 60,
  },
  ovalBody: {
    backgroundColor: 'black',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderRadius: 30 / 2,
    height: 20,
    marginLeft: 7.5,
    marginTop: 5,
    transform: [{ scaleY: 1.2 }],
    width: 30,
  },
})

export default AccountButton
