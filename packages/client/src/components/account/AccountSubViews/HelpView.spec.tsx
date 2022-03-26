import HelpView from '@components/account/AccountSubViews/HelpView'
import { render } from '@testing-library/react-native'
import React from 'react'

it('matches snapshot', () => {

  const { toJSON } = render(
    <HelpView/>
  )
  expect(toJSON()).toMatchSnapshot()
})
