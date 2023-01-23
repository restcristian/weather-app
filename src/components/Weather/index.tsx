import React, { FormEvent, useState } from "react";
import { BsSearch } from "react-icons/bs";
import InputBox from "@/components/ui/InputBox";
import ForeCast from "@/components/Weather/ForeCast";
import { useGeoLocation } from "@/hooks";
import IconButton from "@/components/ui/IconButton";
import { useOpenWeatherCurrentResponseQuery } from "@/services/queries";
import styles from "./weather.module.scss";
import ErrorModal from "../ErrorModal";

const Weather = () => {
  
  const { geoLocation, error: geoLocationError } = useGeoLocation();
  
  const [city, setCity] = useState('');
  const { isLoading, refetch } = useOpenWeatherCurrentResponseQuery(
    {
      lat: geoLocation?.lat,
      lon: geoLocation?.lon,
      city,
    },
    {
      enabled: !!geoLocation,
      retry: false,
    }
  );

  const onCityChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    refetch();
  };


  return (
    <div className={styles.weather}>
      <form onSubmit={onSubmit}>
        <InputBox
          value={city}
          onChange={onCityChangeHandler}
          placeholder="City: (e.g: Berlin)"
          rightIcon={
            <IconButton type="submit" disabled={isLoading}>
              <BsSearch size={24} />
            </IconButton>
          }
        />
      </form>
      <ErrorModal hasError = {!!geoLocationError} message = "Geolocation not activated. Please enter city" />
      <ForeCast />
    </div>
  );
};

export default Weather;
