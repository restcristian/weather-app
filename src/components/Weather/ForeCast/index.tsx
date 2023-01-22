import { OpenWeatherApiCurrentResponse } from "@/services/types";
import { formatOpenWeatherIconUrl, formatTemperature } from "@/utils";
import Image from "next/image";
import React from "react";
import DailyProjection from "../DailyProjection";
import styles from "./forecast.module.scss";

interface Props {
  data?: OpenWeatherApiCurrentResponse;
}

const ForeCast: React.FC<Props> = ({ data }) => {
  if (!data?.current) {
    return null;
  }

  const lowestTemp = data?.hourly.reduce((prevTemp, nextTemp) => {
    if (prevTemp > nextTemp.temp) {
      return nextTemp.temp;
    }
    return prevTemp;
  }, 0);

  const highestTemp = data?.hourly.reduce((prevTemp, nextTemp) => {
    if (prevTemp < nextTemp.temp) {
      return nextTemp.temp;
    }
    return prevTemp;
  }, 0);

  return (
    <div className={styles.weather} data-testid="weather">
      <div className={styles.mainWrapper}>
        <div className={styles.mainLeftColumn}>
          <Image
            src={formatOpenWeatherIconUrl(data?.current.weather[0].icon)}
            width="100"
            height="100"
            alt="Weather Icon"
            data-testid="weather-image"
          />
          <div className={styles.minMaxMainTempWrapper}>
            <p>{data?.timezone}</p>
            <p>{data?.current.weather[0].main}</p>
            <div>
              <span data-testid="high-temp-text">
                H: {formatTemperature(highestTemp)}
              </span>
              <span data-testid="low-temp-text">
                L: {formatTemperature(lowestTemp)}
              </span>
            </div>
          </div>
        </div>
        <div className={styles.mainRightColumn}>
          <p className={styles.tempText} data-testid="temp-text">
            {formatTemperature(data?.current.temp)}
          </p>
        </div>
      </div>
      <DailyProjection daily={data?.daily} />
    </div>
  );
};

export default ForeCast;
