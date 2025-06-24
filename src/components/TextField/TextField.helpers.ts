/**
 * Проверяет, является ли строка корректным email-адресом.
 *
 * @param {string} email - Строка для проверки на соответствие формату email.
 * @returns {boolean} Возвращает `true`, если email корректный, иначе — `false`.
 *
 * @example
 * isValidEmail('test@example.com') // true
 * isValidEmail('invalid-email@')   // false
 */
export function isValidEmail(email: string): boolean {
  const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return reg.test(String(email).toLocaleLowerCase())
}
