import { Bulb } from './ui/bulb'
import { Info } from './ui/info'
import { Warning } from './ui/warning'
import { Danger } from './ui/danger'

import styles from './icon.module.css'

export function Icon({ kind, className, ...props }) {

  const _styles = !className ? styles.icon : [styles.icon, className].join(' ')

  function renderIcon() {
    switch (kind) {
      case 'bulb':
        return <Bulb className={_styles} {...props} />
      case 'info':
        return <Info className={_styles} {...props} />
      case 'warning':
        return <Warning className={_styles} {...props} />
      case 'danger':
        return <Danger className={_styles} {...props} />
      default:
        return new Error(`No icon named "${kind}" exists.`)
    }
  }

  return renderIcon()
}
