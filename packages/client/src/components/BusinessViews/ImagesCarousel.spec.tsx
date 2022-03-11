import ImagesCarousel from '@components/BusinessViews/ImagesCarousel'
import { render } from '@testing-library/react-native'
import React from 'react'

const Image1 =
   'https://cdn.vox-cdn.com/thumbor/VAkim2EiaKiIq4pUi295wH99Ces=/0x0:1100x729/1200x800/filters:focal(341x230:517x406)/cdn.vox-cdn.com/uploads/chorus_image/image/67717391/STARBUCKS.0.jpeg'
const Image2 =
   'https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-42658.jpg'
const Image3 =
   'https://cdn.vox-cdn.com/thumbor/1WVT8VSapMXbHPvsTEPxZp2gUrk=/0x0:1347x897/1200x800/filters:focal(567x342:781x556)/cdn.vox-cdn.com/uploads/chorus_image/image/62192379/starbucksredcups2015.1541431580.jpg'
const Image4 =
   'https://cdn.vox-cdn.com/thumbor/bSoWzne8VZvz8tavhebsL7DNik0=/0x0:5860x4008/1200x800/filters:focal(3243x1967:4179x2903)/cdn.vox-cdn.com/uploads/chorus_image/image/67132574/shutterstock_1410002591.0.jpg'

it('matches snapshot', () => {
  const { toJSON } = render(<ImagesCarousel Image1={Image1} Image2={Image2} Image3={Image3} Image4={Image4}/>)
  expect(toJSON()).toMatchSnapshot()
})
