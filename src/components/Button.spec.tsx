import Button from '@components/Button'
import { fireEvent, render, waitFor } from '@testing-library/react-native'

describe('Button', () => {
  it('fires onPress function when pressed', async () => {
    const mockOnPress = jest.fn()
    const {getByTestId, toJSON} = render(<Button text='asd' onPress={mockOnPress}/>)

    const button = getByTestId('button')
    fireEvent.press(button)
    await waitFor(() => {
      expect(mockOnPress).toHaveBeenCalled()
    })

    expect(toJSON()).toMatchSnapshot()
  })
})