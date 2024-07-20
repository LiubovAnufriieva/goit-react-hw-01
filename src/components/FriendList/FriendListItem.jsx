import css from "./FriendList.module.css";

function FriendListItem( {friend: { avatar, name, isOnline }}) {
  return (
    <div className={css.listItem}>
      <img className={css.ava} src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p className={isOnline ? css.online : css.offline}>
        {isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
}

export default FriendListItem;
