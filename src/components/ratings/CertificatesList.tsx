import React from 'react'
import { StyleSheet, View } from 'react-native'
import CertificateLabel from '@components/ratings/CertificateLabel'

const CertificatesList = () => {
  return (
    <View style={styles.CertificatesListStyle}>
      <View style={styles.CertificateItemStyle}>
        <CertificateLabel hasCertificate={true} certificateName={'BCorp'}/>
      </View>
      <View style={styles.CertificateItemStyle}>
        <CertificateLabel hasCertificate={true} certificateName={'GBB'}/>
      </View>
      <View style={styles.CertificateItemStyle}>
        <CertificateLabel hasCertificate={false} certificateName={'Green Mark'}/>
      </View>
    </View>
  )
}

export const styles = StyleSheet.create({
  CertificateItemStyle: {
    paddingVertical: 5
  },
  CertificatesListStyle: {
    alignSelf: 'center'
  }
})
  
export default CertificatesList
