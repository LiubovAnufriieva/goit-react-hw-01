import FriendListItem from "./FriendListItem"
import css from "./FriendList.module.css";


function FriendsList({ friends }) {
return (
    <ul className={css.friendList}>
        {friends.map((friend) =>
            <li key={friend.id}>
                <FriendListItem friend={friend} />
            </li>)}
    </ul>

)
}

export default FriendsList;