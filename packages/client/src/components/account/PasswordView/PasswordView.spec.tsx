import PasswordView from '@components/account/PasswordView'
import { render } from '@testing-library/react-native'
import React from 'react'

it('renders default elements', () => {
  const { getByPlaceholderText } = render(<PasswordView/>)
  
  getByPlaceholderText('Please enter your password')
  getByPlaceholderText('Please re-enter your password')
})

