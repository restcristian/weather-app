export const formatTemperature = (temp: number) => {
    return `${temp.toFixed(0)}\xB0`;
};

export const formatOpenWeatherIconUrl = (icon: string) => {
    return `http://openweathermap.org/img/wn/${icon}@2x.png`
}