export function UI({ label, isActive }) {
  //function getActiveTagStyle(label, isActive) {
  //  const baseTagStyle =
  //    'text-sm py-2 px-3 mr-2 rounded-sm text-gray-800 bg-gray-200'
  //  switch (label) {
  //    case 'javascript':
  //      return `${baseTagStyle} ${
  //        isActive &&
  //        'bg-yellow-100 text-yellow-600 dark:bg-yellow-900 text-yellow-300'
  //      }`
  //    case 'typescript':
  //      return `${baseTagStyle} bg-indigo-700 text-indigo-100 dark:bg-indigo-900 text-indigo-200`
  //    default:
  //      return `${baseTagStyle}`
  //  }
  //}

  const baseStyles =
    'px-3 py-2 mr-1 mb-1 text-xs text-green-600 border border-2 border-gray-200 transition-colors transition-border rounded-md hover:border-green-600 select-none cursor-pointer'
  const activeStyles =
    'border-green-200 bg-green-200 text-green-700 hover:bg-green-200'
  return (
    <div
      className={isActive ? [baseStyles, activeStyles].join(' ') : baseStyles}
    >
      {label}
    </div>
  )
}
