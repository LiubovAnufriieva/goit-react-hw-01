import Profile from "./Profile";
import userData from "../userData.json";
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
      </>
    );
  }