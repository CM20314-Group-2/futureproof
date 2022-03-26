import BusinessLogo, {
<<<<<<< HEAD:packages/client/src/components/Search/BusinessLogo.spec.tsx
  DEFAULT_PROFILE_PATH,
} from '@components/Search/BusinessLogo'
=======
  DEFAULT_PROFILE_PATH
} from '@components/business/BusinessLogo'
>>>>>>> sprint-3:packages/client/src/components/business/BusinessLogo/BusinessLogo.spec.tsx
import { render } from '@testing-library/react-native'
import React from 'react'

it('matches snapshot', () => {
  const { toJSON } = render(<BusinessLogo />)
  expect(toJSON()).toMatchSnapshot()
})

it('renders a profile picture if one is provided', () => {
  const profilePicture =
    'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
  const { getByTestId } = render(
    <BusinessLogo profilePicture={profilePicture} />
  )

  const logo = getByTestId('business-logo')
  expect(logo.props.source).toHaveProperty('uri', profilePicture)
})

it('falls back to a default profile picture if one is not provided', () => {
  const { getByTestId } = render(<BusinessLogo profilePicture={null} />)

  const logo = getByTestId('business-logo')
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  expect(logo.props.source).toEqual(require(DEFAULT_PROFILE_PATH))
})
