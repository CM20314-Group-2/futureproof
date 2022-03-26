import AccountButton from '@components/account/AccountButton'
import { render } from '@testing-library/react-native'
import React from 'react'

it('matches snapshot', () => {

  const { toJSON } = render(
    <AccountButton/>
  )
  expect(toJSON()).toMatchSnapshot()
})
