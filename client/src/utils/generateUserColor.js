const generateUserColor = () => {
  const colors = ["salmon", "green", "orange", "lightblue"];
  let color = colors[Math.floor(Math.random() * colors.length)];

  return color;
};

export default generateUserColor;
