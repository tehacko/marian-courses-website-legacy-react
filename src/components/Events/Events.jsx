import './Events.css'

export default function Event({image, title, description, className}) {
  return (  
  <li>
    <img src={image} alt={title} className={className} />
    <h2>{title}</h2>
    <p>{description}</p>
  </li>
  )
}