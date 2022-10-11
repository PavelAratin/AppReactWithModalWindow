import UserItem from '../userItem/UserItem';
import './UserList.css'
const UserList = (props) => {
  return (
    <ul className="user-list">
      {props.initialState.map(startObjItem =>
        <UserItem
          key={startObjItem.id}
          startObjItem={startObjItem}>
        </UserItem>
      )}
    </ul>
  )
}
export default UserList;