export function isValidEmail(email: string): boolean {
  const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return reg.test(String(email).toLocaleLowerCase())
}
