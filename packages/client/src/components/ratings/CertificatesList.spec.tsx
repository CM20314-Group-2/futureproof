import CertificatesList from '@components/ratings/CertificatesList'
import { render } from '@testing-library/react-native'
import React from 'react'
import { BusinessCertificate } from '@futureproof/typings'

const BUSINESS_CERTIFICATES : BusinessCertificate[] = [
  {
    id: '1234',
    certificateName: 'BCorp',
    businessHasCertificate: 1
  },
  {
    id: '5678',
    certificateName: 'GBB',
    businessHasCertificate: 1
  },
  {
    id: '9012',
    certificateName: 'Green Mark',
    businessHasCertificate: 1
  }
]

it('matches snapshot', () => {
  const { toJSON } = render(<CertificatesList certificates={BUSINESS_CERTIFICATES}/>)
  expect(toJSON()).toMatchSnapshot()
})
