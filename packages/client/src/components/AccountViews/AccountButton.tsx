import React from 'react'
import { View, StyleSheet, Platform } from 'react-native'

const AccountButton = () => {
  return (
    <React.Fragment>
      <View style={[styles.circleInside]}>
        <View style={styles.circleHead} />
        <View style={styles.ovalBody} />
      </View>
    </React.Fragment>
  )
}

const styles = StyleSheet.create({
  circleHead: {
    backgroundColor: 'grey',
    borderRadius: 15 / 2,
    height: 15,
    marginLeft: 15,
    marginTop: 5,
    width: 15,
  },
  circleInside: {
    backgroundColor: 'transparent',
    ...Platform.select({
      ios: {
        marginTop: 80,
      },
      android: {
        marginTop: 70,
      },
    }),
    borderColor: 'grey',
    borderRadius: 60 / 2,
    borderWidth: 7.5,
    height: 60,
    width: 60,
  },
  ovalBody: {
    backgroundColor: 'grey',
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
