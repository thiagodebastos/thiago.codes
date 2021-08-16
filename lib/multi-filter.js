export function multiFilter(array, filters) {
  const filterKeys = Object.keys(filters)
  return array.filter((item) =>
    filterKeys.every((key) => {
      if (typeof filters[key] !== 'function') return true
      return filters[key](item[key])
    }),
  )
}
