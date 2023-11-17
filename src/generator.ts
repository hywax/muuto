import alphabet from './alphabet.ts'
import { randomArrayElement, randomIntFromInterval, replaceWithChance } from './utils.ts'

let numConsonants = 0
let numVowels = 0

type grabType = 'alphabet' | 'vowels' | 'consonants' | 'sequence'

function grabChar(type: grabType): string
function grabChar(type: 'sequence', word: string): string

function grabChar(type: grabType, word?: string): string {
  if (type === 'sequence') {
    if (!word)
      return ''

    const lastLetter = word.slice(-1)

    return randomArrayElement(alphabet.sequence[lastLetter]) || 'a'
  }

  return randomArrayElement(alphabet[type]) || 'o'
}

function getNextLetter(word: string): string {
  let nextLetter

  if (word.length === 0)
    nextLetter = grabChar('alphabet')
  else if (numConsonants === 2 || (word.length === 1 && numConsonants === 1))
    nextLetter = grabChar('vowels')
  else if (numVowels === 2)
    nextLetter = grabChar('consonants')

  else
    nextLetter = grabChar('sequence', word)

  increaseCounters(nextLetter)

  return nextLetter
}

function processEndWord(word: string): string {
  const lastChars = word.slice(-2)

  if (
    !alphabet.vowels.includes(lastChars[0])
    && !alphabet.vowels.includes(lastChars[1])
  )
    word = word.slice(0, -1) + grabChar('sequence', 'a')

  return word
}

function randomizeFormatWord(word: string): string {
  for (const char in alphabet.swedish)
    word = replaceWithChance(word, char, alphabet.swedish[char as keyof typeof alphabet.swedish], 50)

  return word
}

function increaseCounters(nextLetter: string): void {
  if (alphabet.vowels.includes(nextLetter)) {
    numConsonants = 0
    numVowels += 1
  }
  else {
    numConsonants += 1
    numVowels = 0
  }
}

export default (min: number = 3, max: number = 9): string => {
  numConsonants = 0
  numVowels = 0

  let word = ''

  for (let i = 0; i < randomIntFromInterval([min, max]); i++)
    word += getNextLetter(word)

  word = processEndWord(word)
  word = randomizeFormatWord(word)

  return word
}
