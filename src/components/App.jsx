import userData from "../userData.json"
import Profile from "./Profile/Profile"
import friends from "../friends.json"
import FriendList from "./FriendList/FriendList"
import transactions from "../transactions.json"
import TransactionHistory from "./Transaction/TransactionHistory"

import "./App.css"

export default function App() {
    return (
      <>
        <Profile
          name={userData.username}
          tag={userData.tag}
          location={userData.location}
          image={userData.avatar}
          stats={userData.stats}
        />

        <FriendList friends={friends} />

        <TransactionHistory items={transactions} />
      </>
    )
  }

