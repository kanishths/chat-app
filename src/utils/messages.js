const generateMessage = (username, text) => {
  return {
    username,
    text,
    createdAt: new Date().getTime(),
  };
};

const generateLocation = (username, lat, lon) => {
  // console.log(lat);
  const lat1 = lat.toString().substring(0, 5);
  const lon1 = lon.toString().substring(0, 5);
  return {
    username,
    url: `${lat1}, ${lon1}`,
    createdAt: new Date().getTime(),
  };
};

module.exports = {
  generateMessage,
  generateLocation,
};
