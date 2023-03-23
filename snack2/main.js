const wrong_array = ["cIAO", "mONDO", "jAVAsCRipt"];
const formatted_array = [];

wrong_array.forEach((string) => {
  const formattedString = string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  formatted_array.push(formattedString);
});

console.log(formatted_array);