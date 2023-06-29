import './index.css'

const AppItem = props => {
  const {appsList} = props
  const {appName, imageUrl} = appsList
  return (
    <li className="card-container">
      <img src={imageUrl} alt={appName} className="image" />
      <p className="description">{appName}</p>
    </li>
  )
}
export default AppItem
