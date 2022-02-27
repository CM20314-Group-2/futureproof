import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const TRUE_CERTIFICATE_COLOUR = '#1EA853'
const FALSE_CERTIFICATE_COLOUR = 'brown'

const CertificateLabel = ({ hasCertificate, certificateName } : { hasCertificate : boolean, certificateName : string }) => {
  return (
    <View style={styles.IndicatorBackgroundStyle}>
      <View 
        style={StyleSheet.flatten([styles.CertificateIndicator, { backgroundColor: (hasCertificate ? TRUE_CERTIFICATE_COLOUR : FALSE_CERTIFICATE_COLOUR) }])} 
        testID={'certificate-indicator'}
      />
      <Text 
        style={styles.CertificateTitleStyle}
        testID={'certificate-text'}>
        {certificateName}
      </Text>
    </View>
  )
}

export const styles = StyleSheet.create({
  CertificateIndicator: {
    height: 15,
    right: 5,
    width: 2
  },
  CertificateTitleStyle: {
    fontSize: 10
  },
  IndicatorBackgroundStyle: {
    alignItems: 'center',
    flexDirection: 'row'
  }
})
  
export default CertificateLabel
