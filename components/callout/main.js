import PropTypes from 'prop-types'
export function Callout({ children, colour, title }) {

  const coloursLight = {
    success: 'bg-green-50 border-green-500',
    info: 'bg-blue-50 border-blue-500',
    warning: 'bg-yellow-50 border-yellow-500',
    danger: 'bg-red-50 border-red-500'
  }

  const coloursDark = {
    success: 'dark:bg-green-900 dark:border-green-500',
    info: 'dark:bg-blue-900 dark:border-blue-500',
    warning: 'dark:bg-yellow-900 dark:border-yellow-500',
    danger: 'dark:bg-red-900 dark:border-red-500'
  }

  const styles = {
    base: `border-l-4 rounded-md shadow-md px-6 py-1 mb-8 text-gray-800`,
    coloursLight,
    coloursDark
  }

  const classNames = [styles.base, styles.coloursLight[colour]].join(' ')

  const Bulb = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
    <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
  </svg>

  const Info = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z" clipRule="evenodd" />
  </svg>

  const Warn = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
  </svg>

  const Danger = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
  </svg>


  function renderIcon() {
    switch (colour) {
      case "success":
        return <Bulb />
      case "info":
        return <Info />
      case "warning":
        return <Warn />
      case "danger":
        return <Danger />
      default:
        return title
    }
  }

  function renderTitle() {
    if (!title) return
    return (
      <header>
        <h4 className="!text-gray-800 text-sm">
          <div className="flex align-middle">
            {renderIcon()}
            <span className="ml-2 inline-block font-bold tracking-tight">{title.toUpperCase()}</span>
          </div>
        </h4>
      </header>
    )
  }

  return (
    <div
      className={classNames}>
      {renderTitle()}
      {children}
    </div>
  )
}

Callout.defaultProps = {
  colour: 'success'
}

Callout.propTypes = {
  colour: PropTypes.oneOf(["success", "info", "warning", "danger"]),
  title: PropTypes.string
}
