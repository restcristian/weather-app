import { FormEvent, useState } from "react";
import { BsSearch } from "react-icons/bs";
import OpenWeatherService from "@/services/OpenWeatherService";
import { OpenWeatherApiCurrentResponse } from "@/services/types";
import InputBox from "@/components/ui/InputBox";
import Spinner from "@/components/ui/Spinner";
import Weather from "@/components/Weather";
import { spawn } from "child_process";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [city, setCity] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [
    weatherData,
    setWeatherData,
  ] = useState<OpenWeatherApiCurrentResponse | null>(null);

  const fetchForecast = async () => {
    try {
      setWeatherData(null);
      setIsLoading(true);
      setError(null);
      const data = await OpenWeatherService.getWeatherForecastByCity(city);
      setWeatherData(data);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  const onCityChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchForecast().then();
  };

  return (
    <>
      <div data-testid="title">Hello World</div>
      <form onSubmit={onSubmit}>
        <InputBox
          value={city}
          onChange={onCityChangeHandler}
          placeholder="City: (e.g: Berlin)"
          rightIcon={
            <span style={{ color: "black" }}>
              <BsSearch />
            </span>
          }
        />
      </form>
      <div>{isLoading ? <Spinner /> : <Weather data={weatherData} />}</div>
      {error && <span>{error}</span>}
    </>
  );
}
