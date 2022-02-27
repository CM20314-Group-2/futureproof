import CertificatesList from '@components/ratings/CertificatesList'
import { render } from '@testing-library/react-native'
import React from 'react'

it('matches snapshot', () => {
  const { toJSON } = render(<CertificatesList/>)
  expect(toJSON()).toMatchSnapshot()
})
