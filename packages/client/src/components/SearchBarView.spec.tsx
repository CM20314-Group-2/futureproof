import { MockedProvider } from '@apollo/client/testing'
import SearchBarView from '@components/SearchBarView'
import { render } from '@testing-library/react-native'
import { screen } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'

// TODO - Complete tests when the search bar is properly connected

it('matches snapshot', () => {
  const { toJSON } = render(
    <MockedProvider>
      <SearchBarView />
    </MockedProvider>
  )
  expect(toJSON()).toMatchSnapshot()
})

it ('allows input into the search bar', () => {
  const inputField = screen.getByTestId('search-bar')
  userEvent.type(inputField, 'test')
  expect((inputField as HTMLInputElement).value).toBe('test')
})
