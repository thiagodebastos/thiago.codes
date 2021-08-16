import { UI as TagUI } from './ui/tag'

export function Tag({ label, onClick, isActive }) {
  return (
    <div data-cy={`tag_${label}`} onClick={onClick}>
      <TagUI label={label} isActive={isActive} />
    </div>
  )
}
