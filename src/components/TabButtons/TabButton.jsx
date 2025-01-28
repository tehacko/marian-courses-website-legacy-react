import './TabButton.css';

export default function TabButton({ children, onPress, isSelected }) {
  return (
    <li>
    <button className={isSelected ? 'active' : undefined} onClick={onPress}>
        {children}
    </button>
    </li>
  )
}