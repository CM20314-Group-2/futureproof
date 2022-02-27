import CertificateLabel from '@components/ratings/CertificateLabel'
import { render } from '@testing-library/react-native'
import React from 'react'

it('matches snapshot', () => {
  const { toJSON } = render(<CertificateLabel hasCertificate={true} certificateName={'Certificate'} />)
  expect(toJSON()).toMatchSnapshot()
})

it('renders a green indicator when business has the given certificate with certificate name text', () => {
  const { getByTestId } = render(<CertificateLabel hasCertificate={true} certificateName={'Certificate'} />)

  const indicator = getByTestId('certificate-indicator')
  const text = getByTestId('certificate-text')
  expect(indicator).toHaveStyle({ backgroundColor: '#1EA853' })
  expect(text).toHaveTextContent('Certificate')
})

it('renders a brown indicator when business does not have the given certificate with certificate name text', () => {
  const { getByTestId } = render(<CertificateLabel hasCertificate={false} certificateName={'Certificate'} />)

  const indicator = getByTestId('certificate-indicator')
  const text = getByTestId('certificate-text')
  expect(indicator).toHaveStyle({ backgroundColor: 'brown' })
  expect(text).toHaveTextContent('Certificate')
})
