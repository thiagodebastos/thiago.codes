export function Input({ totalResults, ...props }) {
  return (
    <div className="relative w-full">
      <input
        type="text"
        className="block w-full px-4 py-2 font-bold text-blue-900 bg-white border-2 border-green-300 dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100"
        data-cy="searchInput"
        {...props}
      />
      <span className="absolute text-green-500 top-3 right-4">
        {totalResults}
      </span>
    </div>
  )
}
