import { BusinessCertificate } from '@components/ratings/CertificateLabel'
import CertificatesList from '@components/ratings/CertificateList'
import { render } from '@testing-library/react-native'
import React from 'react'

const BUSINESS_CERTIFICATES : BusinessCertificate[] = [
  {
    id: 1234,
    certificateName: 'BCorp',
    businessHasCertificate: true
  },
  {
    id: 5678,
    certificateName: 'GBB',
    businessHasCertificate: true
  },
  {
    id: 9012,
    certificateName: 'Green Mark',
    businessHasCertificate: true
  }
]

it('matches snapshot', () => {
  const { toJSON } = render(<CertificatesList certificates={BUSINESS_CERTIFICATES}/>)
  expect(toJSON()).toMatchSnapshot()
})
