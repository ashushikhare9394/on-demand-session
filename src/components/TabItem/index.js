import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const activeTabClassBtn = isActive ? 'active-tab-btn' : ''

  const onClickTabId = () => {
    updateActiveTabId(tabId)
  }

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabClassBtn}`}
        onClick={onClickTabId}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
