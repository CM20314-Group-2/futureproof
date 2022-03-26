import PPView from '@components/account/AccountSubViews/PPView'
import { render } from '@testing-library/react-native'
import React from 'react'

it('matches snapshot', () => {

  const { toJSON } = render(
    <PPView/>
  )
  expect(toJSON()).toMatchSnapshot()
})
