import { describe, expect, expectTypeOf, it } from 'vitest'
import generator from '../src/generator'

describe('generator', () => {
  it('word equal type of string', () => {
    const word = generator()

    expectTypeOf(word).toEqualTypeOf<string>()
  })

  it('correct word length', () => {
    const word = generator(5, 5)

    expect(word).toHaveLength(5)
  })
}, { repeats: 10 })
