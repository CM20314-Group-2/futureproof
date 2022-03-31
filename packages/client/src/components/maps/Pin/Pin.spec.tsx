/* eslint-disable react-native/no-inline-styles */
import Pin from '@components/maps/Pin'
import { render } from '@testing-library/react-native'
import React from 'react'
import { ViewStyle } from 'react-native'

it('matches snapshot', () => {
  const { toJSON } = render(<Pin rating={95} />)
  expect(toJSON()).toMatchSnapshot()
})

it('accepts custom styles', () => {
  const { getByTestId } = render(<Pin rating={95} style={{ padding: 50 }}/>)

  const pin = getByTestId('pin-pressable')
  expect(pin).toHaveStyle({ padding: 50 } as ViewStyle)
})

it('is green for ratings greater than 66', () => {
  const { getByTestId } = render(<Pin rating={95}/>)

  const pin = getByTestId('pin')
  expect(pin).toHaveStyle({ backgroundColor: '#1ea853' } as ViewStyle)

  const ratingBackground = getByTestId('rating-background')
  expect(ratingBackground).toHaveStyle({ backgroundColor: '#188441' } as ViewStyle)
})

it('is yellow for ratings greater than 33 and less than 66', () => {
  const { getByTestId } = render(<Pin rating={56}/>)

  const pin = getByTestId('pin')
  expect(pin).toHaveStyle({ backgroundColor: '#bed62e' } as ViewStyle)

  const ratingBackground = getByTestId('rating-background')
  expect(ratingBackground).toHaveStyle({ backgroundColor: '#a8bd29' } as ViewStyle)
})

it('is red for ratings less than 33', () => {
  const { getByTestId } = render(<Pin rating={24}/>)

  const pin = getByTestId('pin')
  expect(pin).toHaveStyle({ backgroundColor: '#e2382d' } as ViewStyle)

  const ratingBackground = getByTestId('rating-background')
  expect(ratingBackground).toHaveStyle({ backgroundColor: '#842b18' } as ViewStyle)
})

it('is green for a rating of 67', () => {
  const { getByTestId } = render(<Pin rating={67}/>)

  const pin = getByTestId('pin')
  expect(pin).toHaveStyle({ backgroundColor: '#1ea853' } as ViewStyle)

  const ratingBackground = getByTestId('rating-background')
  expect(ratingBackground).toHaveStyle({ backgroundColor: '#188441' } as ViewStyle)
})

it('is yellow for a rating of 66', () => {
  const { getByTestId } = render(<Pin rating={66}/>)

  const pin = getByTestId('pin')
  expect(pin).toHaveStyle({ backgroundColor: '#bed62e' } as ViewStyle)

  const ratingBackground = getByTestId('rating-background')
  expect(ratingBackground).toHaveStyle({ backgroundColor: '#a8bd29' } as ViewStyle)
})

it('is yellow for a rating of 33', () => {
  const { getByTestId } = render(<Pin rating={33}/>)

  const pin = getByTestId('pin')
  expect(pin).toHaveStyle({ backgroundColor: '#bed62e' } as ViewStyle)

  const ratingBackground = getByTestId('rating-background')
  expect(ratingBackground).toHaveStyle({ backgroundColor: '#a8bd29' } as ViewStyle)
})

it('is red for a rating of 32', () => {
  const { getByTestId } = render(<Pin rating={32}/>)

  const pin = getByTestId('pin')
  expect(pin).toHaveStyle({ backgroundColor: '#e2382d' } as ViewStyle)

  const ratingBackground = getByTestId('rating-background')
  expect(ratingBackground).toHaveStyle({ backgroundColor: '#842b18' } as ViewStyle)
})
