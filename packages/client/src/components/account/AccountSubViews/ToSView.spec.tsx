import ToSView from '@components/account/AccountSubViews/ToSView'
import { render } from '@testing-library/react-native'
import React from 'react'

it('matches snapshot', () => {

  const { toJSON } = render(
    <ToSView/>
  )
  expect(toJSON()).toMatchSnapshot()
})
