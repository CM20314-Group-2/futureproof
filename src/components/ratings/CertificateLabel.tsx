import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const TRUE_CERTIFICATE_COLOUR = '#1EA853'
const FALSE_CERTIFICATE_COLOUR = 'brown'

const CertificateLabel = ({hasCertificate, certificateName}: {hasCertificate: boolean, certificateName: string}) => {
    return (
          <View style={styles.IndicatorBackgroundStyle}>
              <View style={StyleSheet.flatten([styles.CertificateIndicator, {backgroundColor: (hasCertificate ? TRUE_CERTIFICATE_COLOUR : FALSE_CERTIFICATE_COLOUR)}])}/>
              <Text style={styles.CertificateTitleStyle}>{certificateName}</Text>
          </View>
    )
  }

  export const styles = StyleSheet.create({
    IndicatorBackgroundStyle: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    IndicatorStyle: {
        height: 10,
        borderRadius: 5
    },
    CertificateTitleStyle: {
        fontSize: 10
    },
    CertificateIndicator: {
        width: 2,
        height: 15,
        right: 5
    }
  })
  
  export default CertificateLabel