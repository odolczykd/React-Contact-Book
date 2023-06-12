import { generateDiscordUsername } from "./generateDiscordUsername";
import { generateFacebookLink } from "./generateFacebookLink";

function contactBuilder(user) {
  return {
    uuid: user.login.uuid,
    firstName: user.name.first,
    lastName: user.name.last,
    description: "",
    location: {
      line1: `${user.location.street.number} ${user.location.street.name}`,
      // line2: `${user.location.city}, ${user.location.state}, ${user.location.country}`,
      line2: `${user.location.city}, ${user.location.state}`,
    },
    contact: {
      email: user.email,
      phone: user.cell,
      facebook: generateFacebookLink(user.login.username),
      discord: generateDiscordUsername(user.login.username),
    },
    offset: user.location.timezone.offset,
    avatar: user.picture.large,
  };
}

export { contactBuilder };
