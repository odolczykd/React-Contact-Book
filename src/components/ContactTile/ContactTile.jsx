import "./ContactTile.css";
import { useState } from "react";
import { calculateTimeWithOffset } from "../../common/calculateTimeWithOffset";

function ContactTile({ user }) {
  const [localTime, setLocalTime] = useState(
    calculateTimeWithOffset(user.offset)
  );

  setInterval(() => {
    setLocalTime(calculateTimeWithOffset(user.offset));
  }, 1000);

  return (
    <div className="contactTile">
      <img className="avatarImageSmall" alt="avatar" src={user.avatar} />
      <div className="tileInfo">
        <h3 className="tileUserName">
          {user.firstName} {user.lastName}
        </h3>
        <span className="tileUserTime">Local Time: {localTime}</span>
      </div>
    </div>
  );
}

export { ContactTile };
