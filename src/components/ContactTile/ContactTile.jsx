import "./ContactTile.css";
import { useState } from "react";
import { calculateTimeWithOffset } from "../../utils/calculateTimeWithOffset";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

function ContactTile({ user, isSelected }) {
  const [localTime, setLocalTime] = useState(
    calculateTimeWithOffset(user.offset)
  );

  setInterval(() => {
    setLocalTime(calculateTimeWithOffset(user.offset));
  }, 1000);

  return (
    <div className={isSelected ? "contactTile selected" : "contactTile"}>
      <img className="avatarImageSmall" alt="avatar" src={user.avatar} />
      <div className="tileInfo">
        <h3 className="tileUserName">
          {user.firstName} {user.lastName}
        </h3>
        <span className="tileUserTime">
          <FontAwesomeIcon icon={faClock} />
          <span>{localTime}</span>
        </span>
      </div>
    </div>
  );
}

export { ContactTile };
