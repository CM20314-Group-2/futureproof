import CertificateLabel, { BusinessCertificate } from '@components/ratings/CertificateLabel'
import React from 'react'
import { StyleSheet, View } from 'react-native'

const CertificatesListItems = ({ certificates } : { certificates : BusinessCertificate[] }) => {
  return (
    <React.Fragment>
      {certificates.map((certificate) => {
        return (
          <View key={certificate.id} style={styles.certificateItemStyle}>
            <CertificateLabel certificate={certificate}/>
          </View>
        )
      })}
    </React.Fragment>
  )
}

const CertificateList = ({ certificates } : { certificates : BusinessCertificate[] }) => {
  return (
    <View style={styles.certificatesListStyle}>
      <CertificatesListItems certificates={certificates}/>
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
  
export default CertificateList
