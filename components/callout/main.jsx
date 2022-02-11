import PropTypes from 'prop-types'
import { Icon } from '@/components/shared/icon'

import styles from './callout.module.css'

export function Callout({ children, colour, title }) {
  const classNames = [styles.callout, styles[colour]].join(' ')

  let iconKind

  switch (colour) {
    case 'success':
      iconKind = 'bulb'
      break
    case 'info':
      iconKind = 'info'
      break
    case 'warning':
      iconKind = 'warning'
      break
    case 'danger':
      iconKind = 'danger'
      break
  }

  function renderTitle() {
    if (!title) return
    return (
      <header>
        <h4 className={styles.title_text}>
          <div className={styles.title_inner}>
            <Icon kind={iconKind} />
            <span>{title}</span>
          </div>
        </h4>
      </header>
    )
  }

  return (
    <div className={classNames}>
      {renderTitle()}
      {children}
    </div>
  )
}

Callout.defaultProps = {
  colour: 'success',
}

Callout.propTypes = {
  colour: PropTypes.oneOf(['success', 'info', 'warning', 'danger']),
  title: PropTypes.string,
}
