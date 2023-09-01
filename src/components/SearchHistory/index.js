import './index.css'

const History = props => {
  const {item, key, deletehistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = item
  const Delete = () => {
    deletehistory(id)
  }
  return (
    <li className="each">
      <p>{timeAccessed}</p>
      <img src={logoUrl} alt="domain logo" />
      <p>{title}</p>
      <p>{domainUrl} </p>
      <button data-testid="delete" onClick={Delete}>
        <img
          className="delete"
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default History
