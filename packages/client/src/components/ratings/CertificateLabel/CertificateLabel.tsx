import { BusinessCertificate } from '@futureproof/typings'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const TRUE_CERTIFICATE_COLOUR = '#1EA853'
const FALSE_CERTIFICATE_COLOUR = 'brown'

/**
 * Creates a single certificate label (with text and left-side colour indictor)
 * 
 * @param {BusinessCertificate} certificate The certificate to be represented
 * @returns A certificate label view
 */

const CertificateLabel = ({ certificate } : { certificate : BusinessCertificate }) => {
  return (
    <View style={styles.indicatorBackgroundStyle}>
      <View 
        style={StyleSheet.flatten([styles.certificateIndicator, { backgroundColor: (certificate.businessHasCertificate === 1 ? TRUE_CERTIFICATE_COLOUR : FALSE_CERTIFICATE_COLOUR) }])} 
        testID={'certificate-indicator'}
      />
      <Text 
        style={styles.certificateTitleStyle}
        testID={'certificate-text'}>
        {certificate.certificateName}
      </Text>
    </View>
  )
}

export const styles = StyleSheet.create({
  certificateIndicator: {
    height: 15,
    right: 5,
    width: 2
  },
  certificateTitleStyle: {
    fontSize: 10
  },
  indicatorBackgroundStyle: {
    alignItems: 'center',
    flexDirection: 'row'
  }
})
  
export default CertificateLabel
