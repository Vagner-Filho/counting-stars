async function fetchStars() {
  const rawData = [];
  const endpoints = process.env.REACT_APP_STARS_ENDPOINTS?.split(', ');

  for (const endpoint of endpoints as Array<string>) {
    rawData.push(...await (await fetch(endpoint)).json())
  }
  return rawData;
}

export { fetchStars }