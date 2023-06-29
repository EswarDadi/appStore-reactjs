import './index.css'

const TabItem = props => {
  const {tabsList, clickTabItem, isActive} = props
  const {tabId, displayText} = tabsList

  const onClickTabChange = () => {
    clickTabItem(tabId)
  }
  const tabBtn = isActive ? 'tab-btn' : ''
  return (
    <li>
      <button
        type="button"
        className={`button ${tabBtn}`}
        onClick={onClickTabChange}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
