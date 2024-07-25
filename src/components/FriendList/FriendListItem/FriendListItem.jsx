import css from "../FriendList.module.css"
import { RiRadioButtonLine } from "react-icons/ri"
import { IoCloudOffline } from "react-icons/io5"
import clsx from "clsx"


export default function FriendListItem( {friend: { avatar, name, isOnline }}) {
  return (
    <div className={css.listItem}>
      <img className={css.ava} src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p className={clsx(isOnline ? css.online : css.offline)}>
        {isOnline ? <RiRadioButtonLine /> : <IoCloudOffline /> }</p>
    </div>
  )
}


