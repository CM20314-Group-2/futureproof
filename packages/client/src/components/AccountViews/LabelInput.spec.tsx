import LabelInput from '@components/AccountViews/LabelInput'
import { render } from '@testing-library/react-native'
import React, { useState } from 'react'

it('matches snapshot', () => {

  const [email, setEmail] = useState('')

  const { toJSON } = render(
    <LabelInput
      label='Email'
      placeholder='john.smith@gmail.com'
      value={email}
      onChangeText={() => setEmail(email)}
      secureText={false}
    />
  )
  expect(toJSON()).toMatchSnapshot()
})
