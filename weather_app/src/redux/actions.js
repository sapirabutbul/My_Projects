export const FETCH_WEATHER = "FETCH_WEATHER";
const temp = {
  coord: { lon: 34.8, lat: 32.0833 },
  weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01d" }],
  base: "stations",
  main: {
    temp: 31.62,
    feels_like: 33.24,
    temp_min: 30.81,
    temp_max: 32.65,
    pressure: 1011,
    humidity: 48,
  },
  visibility: 10000,
  wind: { speed: 1.54, deg: 0 },
  clouds: { all: 0 },
  dt: 1630398579,
  sys: {
    type: 1,
    id: 6845,
    country: "IL",
    sunrise: 1630379736,
    sunset: 1630426027,
  },
  timezone: 10800,
  id: 293396,
  name: "Tel Aviv",
  cod: 200,
};
export const handleFetch = (value) => (dispatch) => {
  //// for dev mode- so the api request won't end
  // dispatch({ type: FETCH_WEATHER, payload: temp });
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=303cf51e07746c7c2b846f837cf91d70`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log("data", data);
      dispatch({ type: FETCH_WEATHER, payload: data });
    })
    .catch((e) => {
      console.log("error", e);
      throw new Error("fetch problem");
    });
};
