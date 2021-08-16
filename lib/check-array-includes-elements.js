/**
 * @param {Object} obj Array and elements to be checked
 * @param {array} obj.array Array to be tested
 * @param {any} obj.elements Elements that must exist in array
 * @returns {boolean}
 * */
export function checkElementsAgainstArray({ array, elements }) {
  if (!array) throw new Error('Must provide valid array')
  if (!elements) throw new Error('Must provide valid comparedArray')
  return elements.every((el) => array.includes(el))
}
