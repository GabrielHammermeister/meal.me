export function isEmpty(obj: any) {
  if (obj === null || obj === undefined) return true
  return Object.keys(obj).length === 0
}
