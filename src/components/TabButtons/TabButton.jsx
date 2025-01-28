export default function TabButton({ children, onPress }) {
  return (
    <li>
    <button onClick={onPress}>
        {children}
    </button>
    </li>
  )
}