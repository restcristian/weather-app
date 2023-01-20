export const daysOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const formatTemperature = (temp: number) => {
  return `${temp.toFixed(0)}\xB0`;
};

export const formatOpenWeatherIconUrl = (icon: string) => {
  return `http://openweathermap.org/img/wn/${icon}@2x.png`;
};

export const getDateFromTimeStamp = (timestamp: number) => {
  const date = new Date(timestamp * 1000);
  return daysOfTheWeek[date.getDay()];
};
