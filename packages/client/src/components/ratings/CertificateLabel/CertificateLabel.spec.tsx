import CertificateLabel, { BusinessCertificate } from '@components/ratings/CertificateLabel'
import { render } from '@testing-library/react-native'
import React from 'react'

const BCORP_EXAMPLE_CERTIFICATE : BusinessCertificate = {
  id: 1234,
  certificateName: 'BCorp',
  businessHasCertificate: true
}

const NO_CERTIFICATE_EXAMPLE : BusinessCertificate = {
  id: 5678,
  certificateName: 'Green Mark',
  businessHasCertificate: false
}

it('matches snapshot', () => {
  const { toJSON } = render(<CertificateLabel certificate={BCORP_EXAMPLE_CERTIFICATE} />)
  expect(toJSON()).toMatchSnapshot()
})

it('renders certificate name text matching parameters', () => {
  const { getByTestId } = render(<CertificateLabel certificate={BCORP_EXAMPLE_CERTIFICATE} />)

  const text = getByTestId('certificate-text')
  expect(text).toHaveTextContent('BCorp')
})

it('renders a green indicator when business has the given certificate with certificate name text', () => {
  const { getByTestId } = render(<CertificateLabel certificate={BCORP_EXAMPLE_CERTIFICATE} />)

  const indicator = getByTestId('certificate-indicator')
  expect(indicator).toHaveStyle({ backgroundColor: '#1EA853' })
})

it('renders a brown indicator when business does not have the given certificate with certificate name text', () => {
  const { getByTestId } = render(<CertificateLabel certificate={NO_CERTIFICATE_EXAMPLE} />)

  const indicator = getByTestId('certificate-indicator')
  expect(indicator).toHaveStyle({ backgroundColor: 'brown' })
})
