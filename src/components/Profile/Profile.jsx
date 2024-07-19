import css from "./Profile.module.css";

function Profile({ name, tag, location, image, stats: { followers, views, likes} }) {
    return (
    <div className={css.container}>
      <div className={css.profileContainer}>
        <img className={css.profileAvatar} src={image} alt={`${name} avatar`} />
        <p className={css.username}>{name}</p>
        <p className={css.text}>@{tag}</p>
        <p className={css.text}>{location}</p>
      </div>
    
      <ul className={css.statsList}>
        <li className={css.statsItem}>
          <span className={css.statsTitle}>Followers</span>
          <span className={css.statsValue}>{followers}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.statsTitle}>Views</span>
          <span className={css.statsValue}>{views}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.statsTitle}>Likes</span>
          <span className={css.statsValue}>{likes}</span>
        </li>
      </ul>
    </div>
)   
}
export default Profile;




