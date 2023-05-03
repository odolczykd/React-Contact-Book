function generateDiscordUsername(username) {
  const trimmedUsername = username.toString().substring(0, username.length - 3);
  const capitalized =
    trimmedUsername.charAt(0).toUpperCase() + trimmedUsername.substring(1);
  const code = Math.floor(Math.random() * 10000)
    .toString()
    .padStart(4, "0");

  return `${capitalized}#${code}`;
}

export { generateDiscordUsername };
