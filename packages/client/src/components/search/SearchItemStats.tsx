import RatingCapsule from '@components/Search/RatingCapsule'
import { DisplayableBusiness } from '@futureproof/typings'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

type ComponentProps = Pick<
  DisplayableBusiness,
  'name' | 'customerScore' | 'sustainabilityScore'
>

const SearchItemStats = ({
  name,
  customerScore,
  sustainabilityScore,
}: ComponentProps) => (
  <View style={styles.searchItemStats}>
    <Text style={styles.businessTitleText}>{name}</Text>
    <View style={styles.logoAndSubtitleView}>
      <Image
        source={require('../../../assets/icon_location.png')}
        style={styles.businessLogoImageStyle}
        resizeMode='contain'
      />
      <Text style={styles.subtitleText}>{`${0.2} miles`}</Text>
    </View>

    <View style={styles.ratingTextAndCapsuleView}>
      <Text style={styles.ratingText}>FutureProof Rating:</Text>
      <RatingCapsule ratingValue={sustainabilityScore} />
    </View>
    <View style={styles.ratingTextAndCapsuleView}>
      <Text style={styles.ratingText}>Consumer Rating:</Text>
      <RatingCapsule ratingValue={customerScore} />
    </View>
  </View>
)

const styles = StyleSheet.create({
  businessLogoImageStyle: {
    height: 20,
    width: 20,
  },
  businessTitleText: {
    fontSize: 25,
    fontWeight: '500',
  },
  logoAndSubtitleView: {
    flexDirection: 'row',
  },
  ratingText: {
    color: '#818181',
    fontSize: 11,
    paddingRight: 10,
  },
  ratingTextAndCapsuleView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingVertical: 2,
  },
  searchItemStats: {
    flex: 1,
    flexDirection: 'column',
  },
  subtitleText: {
    color: '#686868',
    fontSize: 14,
  },
})

export default SearchItemStats
