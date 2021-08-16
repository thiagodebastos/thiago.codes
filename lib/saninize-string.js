/**
 * Sanitize string to be standarised for comparison tests
 * @param {string} string String to be sanitized
 * @returns {string}
 */
export function sanitizeString(string) {
  if (!string || string.length === 0) return ''
  return string.trim().toLowerCase()
}
