import { DisplayableBusiness } from '@futureproof/typings'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

type ViewProps = Pick<DisplayableBusiness, 'profileText'>

const DescriptionView = ({ profileText } : ViewProps) => (
  <View>
    <Text style={styles.headingText}>DESCRIPTION</Text>
    <View style={styles.itemBackgroundStyle}>
      <View style={styles.textAndImageContainerStyle}>
        <Image
          source={require('../../assets/icon_paragraph.png')}
          style={styles.paragraphIcon}
          resizeMode='contain'
        />
        <Text style={styles.bodyText} testID='body-text'>
          {profileText === null ? 'No description available.' : profileText}
        </Text>
      </View>
    </View>
  </View>
)

const styles = StyleSheet.create({
  bodyText: {
    color: 'black',
    fontSize: 12,
    padding: 10,
  },
  headingText: {
    color: '#A0A0A0',
    fontSize: 12,
    marginBottom: '1%',
    marginLeft: '1%',
    paddingLeft: 20,
  },
  itemBackgroundStyle: {
    backgroundColor: '#FAF9F9',
    borderRadius: 10,
  },
  paragraphIcon: {
    height: 25,
    width: 25,
  },
  textAndImageContainerStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
})

export default DescriptionView
