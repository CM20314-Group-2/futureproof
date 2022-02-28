import React from 'react'
import { StyleSheet, View } from 'react-native'
import CertificateLabel from '@components/ratings/CertificateLabel'

const CertificatesList = () => {
  return (
    <View style={styles.certificatesListStyle}>
      <View style={styles.certificateItemStyle}>
        <CertificateLabel hasCertificate={true} certificateName={'BCorp'}/>
      </View>
      <View style={styles.certificateItemStyle}>
        <CertificateLabel hasCertificate={true} certificateName={'GBB'}/>
      </View>
      <View style={styles.certificateItemStyle}>
        <CertificateLabel hasCertificate={false} certificateName={'Green Mark'}/>
      </View>
    </View>
  )
}

export const styles = StyleSheet.create({
  certificateItemStyle: {
    paddingVertical: 5
  },
  certificatesListStyle: {
    alignSelf: 'center'
  }
})
  
export default CertificatesList
