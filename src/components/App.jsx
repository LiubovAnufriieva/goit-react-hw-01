import userData from "../userData.json";
import Profile from "./profile/Profile";
import friends from "../friends.json";
import FriendList from "./friendList/FriendList";
import transactions from "../transactions.json";
import TransactionHistory from "./transactions/TransactionHistory";

import "./App.css";


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
    );
  }

