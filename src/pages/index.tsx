import React, { FormEvent, useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import OpenWeatherService from "@/services/OpenWeatherService";
import { OpenWeatherApiCurrentResponse } from "@/services/types";
import InputBox from "@/components/ui/InputBox";
import Spinner from "@/components/ui/Spinner";
import Weather from "@/components/Weather";
import { useGeoLocation } from "@/hooks";
import IconButton from "@/components/ui/IconButton";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [city, setCity] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [
    weatherData,
    setWeatherData,
  ] = useState<OpenWeatherApiCurrentResponse | null>(null);
  const { isSuccessful: isGeoSuccessful, geoLocation } = useGeoLocation();

  const fetchForecastByCity = async () => {
    try {
      resetLoadingStatus();
      const data = await OpenWeatherService.getWeatherForecastByCity(city);
      setWeatherData(data);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  const fetchForecastByCoordinates = async () => {
    try {
      resetLoadingStatus();
      const data = await OpenWeatherService.getWeatherForecastByCoordinates(
        geoLocation!.lat,
        geoLocation!.lon
      );
      setWeatherData(data);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  const resetLoadingStatus = () => {
    setWeatherData(null);
    setIsLoading(true);
    setError(null);
  };

  const onCityChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchForecastByCity().then();
  };

  useEffect(() => {
    if (isGeoSuccessful) {
      fetchForecastByCoordinates().then();
    }
  }, [isGeoSuccessful]);

  return (
    <>
      <form onSubmit={onSubmit}>
        <InputBox
          value={city}
          onChange={onCityChangeHandler}
          placeholder="City: (e.g: Berlin)"
          rightIcon={
            <IconButton type="submit">
              <BsSearch size={18} />
            </IconButton>
          }
        />
      </form>
      <div>{isLoading ? <Spinner /> : <Weather data={weatherData} />}</div>
      {error && <span>{error}</span>}
    </>
  );
}
