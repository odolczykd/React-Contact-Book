function calculateTimeWithOffset(offset) {
  const offsetArray = offset.toString().split(":");
  let offsetMilli =
    (60 * Math.abs(Number(offsetArray[0])) + Number(offsetArray[1])) *
    60 *
    1000;
  if (offsetArray[0].charAt(0) === "-") offsetMilli = -offsetMilli;
  const d = new Date(new Date().getTime() + offsetMilli);

  const hrs = d.getHours().toString();
  const mins =
    d.getMinutes() < 10 ? `0${d.getMinutes()}` : d.getMinutes().toString();

  return `${hrs}:${mins}`;
}

export { calculateTimeWithOffset };
