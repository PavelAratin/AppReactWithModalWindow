import './UserItem.css';
const UserItem = (props) => {
  console.log(props.startObjItem)
  return (
    <li className="user-list__item">
      <span className="user-list__text">{props.startObjItem.name}</span> -
      <span className="user-list__text">{props.startObjItem.age} лет</span>
    </li>
  )
}

export default UserItem;