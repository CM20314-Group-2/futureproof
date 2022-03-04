import { MockedProvider } from '@apollo/client/testing'
import MapView from '@components/MapView'
import { render, waitFor } from '@testing-library/react-native'
import * as Location from 'expo-location'
import {
  LocationObject,
  LocationPermissionResponse,
  PermissionStatus,
} from 'expo-location'
import React from 'react'
import { View } from 'react-native'
import { MapViewProps } from 'react-native-maps'
import { MockedObject } from 'ts-jest/dist/utils/testing'
import { mocked } from 'ts-jest/utils'

const fakeLocation: LocationObject = {
  coords: {
    latitude: 1,
    longitude: 2,
    altitude: 3,
    accuracy: 4,
    heading: 5,
    speed: 6,
    altitudeAccuracy: 7,
  },
  timestamp: 7,
}

const grantedPermissions: LocationPermissionResponse = {
  status: PermissionStatus.GRANTED,
  granted: true,
  expires: 'never',
  canAskAgain: true,
}

const deniedPermissions: LocationPermissionResponse = {
  status: PermissionStatus.DENIED,
  granted: false,
  expires: 'never',
  canAskAgain: true,
}

let location: MockedObject<typeof Location>

beforeEach(() => {
  jest.mock('expo-location')
  location = mocked(Location)

  jest.mock('react-native-maps'),
    () => {
      const MockMapView = (props: MapViewProps) => {
        return (
          <View testID={props.testID} {...props}>
            {props.children}
          </View>
        )
      }

      return {
        __esModule: true,
        default: MockMapView,
      }
    }
})

afterEach(() => {
  jest.clearAllMocks()
})

it('matches snapshot with permissions', async () => {
  const permissionsSpy = jest
    .spyOn(location, 'requestForegroundPermissionsAsync')
    .mockResolvedValue(grantedPermissions)
  const getCurrentPositionSpy = jest
    .spyOn(location, 'getCurrentPositionAsync')
    .mockResolvedValue(fakeLocation)
  const { toJSON } = render(
    <MockedProvider>
      <MapView />
    </MockedProvider>
  )

  await waitFor(() => {
    expect(permissionsSpy).toHaveBeenCalled()
    expect(getCurrentPositionSpy).toHaveBeenCalled()
    expect(toJSON()).toMatchSnapshot()
  })
})

it('matches snapshot without permissions', async () => {
  const permissionsSpy = jest
    .spyOn(location, 'requestForegroundPermissionsAsync')
    .mockResolvedValue(deniedPermissions)
  const getCurrentPositionSpy = jest
    .spyOn(location, 'getCurrentPositionAsync')
    .mockResolvedValue(fakeLocation)
  const { toJSON } = render(
    <MockedProvider>
      <MapView />
    </MockedProvider>
  )

  await waitFor(() => {
    expect(permissionsSpy).toHaveBeenCalled()
    expect(getCurrentPositionSpy).not.toHaveBeenCalled()
    expect(toJSON()).toMatchSnapshot()
  })
})

it('defaults to showing Null Island', async () => {
  const permissionsSpy = jest
    .spyOn(location, 'requestForegroundPermissionsAsync')
    .mockRejectedValue(new Error('Network request failed'))
  const getCurrentPositionSpy = jest
    .spyOn(location, 'getCurrentPositionAsync')
    .mockResolvedValue(fakeLocation)
  const { container } = render(
    <MockedProvider>
      <MapView />
    </MockedProvider>
  )

  await waitFor(() => {
    expect(permissionsSpy).toHaveBeenCalled()
    expect(getCurrentPositionSpy).not.toHaveBeenCalled()
  })

  // Workaround for broken getByTestId
  const map = container.find((node) => node.props.testID === 'map')
  expect(map.props.region.latitude).toEqual(0)
  expect(map.props.region.longitude).toEqual(0)
})
