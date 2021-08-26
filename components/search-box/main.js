import PropTypes from 'prop-types'
import { Input } from './ui/input'

export function SearchBox({
  searchTerm,
  placeholder = 'Search articles',
  handleChange,
  totalResults,
}) {
  return (
    <Input
      aria-label={placeholder}
      placeholder={placeholder}
      onChange={handleChange}
      value={searchTerm}
      totalResults={totalResults}
      data-cy="searchInput"
    />
  )
}

SearchBox.propTypes = {
  searchTerm: PropTypes.string,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  totalResults: PropTypes.number,
}
