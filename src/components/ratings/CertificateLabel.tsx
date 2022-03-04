import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export type BusinessCertificate = {
  id : number
  certificateName : string
  businessHasCertificate : boolean
}

const TRUE_CERTIFICATE_COLOUR = '#1EA853'
const FALSE_CERTIFICATE_COLOUR = 'brown'

const CertificateLabel = ({ certificate } : { certificate : BusinessCertificate }) => {
  return (
    <View style={styles.indicatorBackgroundStyle}>
      <View 
        style={StyleSheet.flatten([styles.certificateIndicator, { backgroundColor: (certificate.businessHasCertificate ? TRUE_CERTIFICATE_COLOUR : FALSE_CERTIFICATE_COLOUR) }])} 
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
