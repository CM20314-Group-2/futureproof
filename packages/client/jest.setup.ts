import '@testing-library/jest-native/extend-expect'
import MockDate from 'mockdate'

declare global {
  function withAnimatedTimeTravelEnabled(fn : () => void) : void
  function timeTravel(time : number) : void
}

const setupTimeTravelForRNAnimated = () => {
  const frameTime = 10

  global.withAnimatedTimeTravelEnabled = (fn) => {
    MockDate.set(0)
    jest.useFakeTimers()
    fn()
    MockDate.reset()
    jest.useRealTimers()
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  global.requestAnimationFrame = (cb) => {setTimeout(cb, frameTime)}

  global.timeTravel = (time = frameTime) => {
    const tickTravel = () => {
      const now = Date.now()
      MockDate.set(new Date(now + frameTime))

      jest.advanceTimersByTime(frameTime)
    }

    const frames = time / frameTime
    for (let i = 0; i < frames; i++) {
      tickTravel()
    }
  }
}

setupTimeTravelForRNAnimated()
