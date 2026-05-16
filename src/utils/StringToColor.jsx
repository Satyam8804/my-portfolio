
export function stringToColor(str = "") {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
    hash |= 0; // convert to 32-bit int
  }

  const hue        = Math.abs(hash) % 360;
  const saturation = 55 + (Math.abs(hash >> 8)  % 20); // 55–75%
  const lightness  = 40 + (Math.abs(hash >> 16) % 15); // 40–55%

  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}


export function stringToColorLight(str = "") {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
    hash |= 0;
  }

  const hue        = Math.abs(hash) % 360;
  const saturation = 60 + (Math.abs(hash >> 8)  % 20); // 60–80%
  const lightness  = 88 + (Math.abs(hash >> 16) % 8);  // 88–96% (very light)

  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}


export function stringToColorPair(str = "") {
  return {
    background: stringToColorLight(str),
    color:      stringToColor(str),
  };
}