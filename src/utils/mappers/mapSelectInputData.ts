export function mapSelectInputData(array: string[]) {
  return array.map((city) => ({ label: city, value: city }))
}
