import { Daily } from "@/services/types";
import {
  formatOpenWeatherIconUrl,
  formatTemperature,
  getDateFromTimeStamp,
} from "@/utils";
import Image from "next/image";
import React from "react";

import styles from "./dailyProjection.module.scss";

interface Props {
  daily: Daily[];
}
const DailyProjection: React.FC<Props> = ({ daily }) => {
  return (
    <ul className={styles.dailyProjection}>
      {daily.map((projection, index) => (
        <li
          className={styles.card}
          key={`${projection.weather[0].id}-${index}`}
        >
          <div className={styles.innerCard}>
            <p className={styles.date}>{getDateFromTimeStamp(projection.dt)}</p>
            <div className={styles.imageWrapper}>
              <Image
                src={formatOpenWeatherIconUrl(projection.weather[0].icon)}
                width="50"
                height="50"
                alt="Weather Icon"
                data-testid="weather-image"
              />
              <p>{formatTemperature(projection.temp.max)}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default DailyProjection;
