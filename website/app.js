/* Global Variables */
const baseURL = "https://api.openweathermap.org/data/2.5/weather";
const APIKey = "9d3a9fe5e8a5c363fecf5b34b5a9fac6";
// Create a new date instance dynamically with JS
let d = new Date();
const getWeather = async (zip) => {
  // 90210
  await fetch(`${baseURL}?zip=${zip}&appid=${APIKey}`)
    .then((res) => res.json())
    .then((info) => {
      console.log(info);
      return info;
    })
    .then((info) => {
      postInfo({
        temperature: info.main.temp,
        date: d,
        UserResponse: feelings.value,
      });
    })
    .catch((e) => e);
};
const postInfo = async (info) => {
  await fetch("/projectData", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(info),
  })
    .then((res) => res.json())
    .then((info) => {
      console.log(info);
      return info;
    })
    .then(() => getInfo())
    .catch((e) => e);
};
generate.addEventListener("click", () => {
  getWeather(zip.value);
});
const getInfo = async (zip) => {
  await fetch(`/projectData`)
    .then((res) => res.json())
    .then((info) => {
      console.log(info);
      return info;
    })
    .then((info) => {
      date.innerHTML = "Date:" + info.date;
      temp.innerHTML = "temperature:" + info.temperature;
      content.innerHTML = "I feel " + info.UserResponse;
    })
    .catch((e) => e);
};
