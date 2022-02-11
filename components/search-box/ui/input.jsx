import styles from './input.module.css'
//let a = 'block w-full px-4 py-2 font-bold text-blue-900 bg-white border-2 border-green-300 dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100'
export function Input({ totalResults, ...props }) {
  return (
    <div className={styles.container}>
      <input
        type="text"
        className={styles.input}
        data-cy="searchInput"
        {...props}
      />
      <span className={styles.counter}>{totalResults}</span>
    </div>
  )
}
