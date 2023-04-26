import "./ContactTile.css";

function ContactTile({ user }) {
  return (
    <div className="contactTile">
      <img alt="avatar" src={user.avatar} className="avatarImage" />
      <div className="tileInfo">
        <h3>
          {user.firstName} {user.lastName}
        </h3>
        <div>{user.lastSeen}</div>
      </div>
    </div>
  );
}

export { ContactTile };
