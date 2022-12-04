export const capitalize = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

export function parseJSON<T>(value: string | null): T | undefined {
  try {
    return value === 'undefined' ? undefined : JSON.parse(value ?? '')
  } catch {
    console.log('parsing error on', { value })
    return undefined
  }
}
