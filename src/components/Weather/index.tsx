import React, { FormEvent, useState } from "react";
import { BsSearch } from "react-icons/bs";
import InputBox from "@/components/ui/InputBox";
import Spinner from "@/components/ui/Spinner";
import ForeCast from "@/components/Weather/ForeCast";
import { useGeoLocation } from "@/hooks";
import IconButton from "@/components/ui/IconButton";
import { useOpenWeatherCurrentResponseQuery } from "@/services/queries";
import styles from "./weather.module.scss";

const Weather = () => {
  const [city, setCity] = useState("");

  const { isSuccessful: isGeoSuccessful, geoLocation } = useGeoLocation();

  const {
    data,
    isLoading,
    error,
    isError,
    refetch,
  } = useOpenWeatherCurrentResponseQuery(
    {
      lat: geoLocation?.lat,
      lon: geoLocation?.lon,
      city,
    },
    {
      enabled: !!isGeoSuccessful,
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

  if (!isGeoSuccessful) {
    return <Spinner />;
  }

  return (
    <div className = {styles.weather}>
      <form onSubmit={onSubmit} >
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
      <div>
        {isLoading ? <Spinner /> : isError ? null : <ForeCast data={data} />}
      </div>
      {error && (
        <div>
          <span>{error.message}</span>
        </div>
      )}
    </div>
  );
};

export default Weather;
