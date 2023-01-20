import { OpenWeatherApiCurrentResponse } from "@/services/types";
import { formatOpenWeatherIconUrl, formatTemperature } from "@/utils";
import Image from "next/image";
import React from "react";
import styles from "./weather.module.scss";

interface Props {
  data: OpenWeatherApiCurrentResponse | null;
}

const Weather: React.FC<Props> = ({ data }) => {
  if (!data?.main) {
    return null;
  }

  return (
    <div className={styles.weather} data-testid="weather">
      <div className={styles.mainWrapper}>
        <div className={styles.mainLeftColumn}>
          <Image
            src={formatOpenWeatherIconUrl(data?.weather[0].icon)}
            width="100"
            height="100"
            alt="Weather Icon"
            data-testid="weather-image"
          />
          <div className={styles.minMaxMainTempWrapper}>
            <p>{data?.weather[0].main}</p>
            <div>
              <span data-testid="high-temp-text">H: {formatTemperature(data?.main.temp_max)}</span>
              <span data-testid="low-temp-text">L: {formatTemperature(data?.main.temp_min)}</span>
            </div>
          </div>
        </div>
        <div className={styles.mainRightColumn}>
          <p className={styles.tempText} data-testid="temp-text">
            {formatTemperature(data?.main.temp)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Weather;
