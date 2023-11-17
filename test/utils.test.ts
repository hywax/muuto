import { describe, expect, it } from 'vitest'
import { randomArrayElement, randomIntFromInterval, replaceWithChance } from '../src/utils'

describe('randomArrayElement', () => {
  it('element should be null', () => {
    const array: string[] = []
    const element = randomArrayElement(array)

    expect(element).toBe(null)
  })

  it('element contains array', () => {
    const array: string[] = ['a', 'b', 'c']
    const element = randomArrayElement(array)

    expect(array).toContain(element)
  })
}, { repeats: 5 })

describe('randomIntFromInterval', () => {
  it('number contains in interval', () => {
    const number = randomIntFromInterval([1, 10])

    expect(number).toBeGreaterThanOrEqual(1)
    expect(number).toBeLessThanOrEqual(10)
  })
}, { repeats: 5 })

describe('replaceWithChance', () => {
  it('replacement didn\'t work', () => {
    const value = replaceWithChance('abc', 'a', 'w', 0)

    expect(value).toEqual('abc')
  })

  it('replacement worked', () => {
    const value = replaceWithChance('abc', 'a', 'w', 100)

    expect(value).toEqual('wbc')
  })
}, { repeats: 5 })
