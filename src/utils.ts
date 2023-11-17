export function randomArrayElement<T>(array: T[]): T | null {
  if (array.length === 0)
    return null

  return array[Math.floor(Math.random() * array.length)]
}

export function randomIntFromInterval([min, max]: [number, number]): number {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export function replaceWithChance(value: string, search: string, replace: string, chance: number): string {
  if (Math.floor(Math.random() * 100) <= chance)
    return value.replace(search, replace)

  return value
}
