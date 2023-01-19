import { FormEvent, useState } from "react";
import { BsSearch } from "react-icons/bs";
import OpenWeatherService from "@/services/OpenWeatherService";
import { OpenWeatherApiResponse } from "@/services/types";
import InputBox from "@/components/ui/InputBox";
import Spinner from "@/components/ui/Spinner";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [city, setCity] = useState("");
  const [, setError] = useState(null);
  const [weatherData, setWeatherData] = useState<OpenWeatherApiResponse | null>(
    null
  );

  const fetchForecast = async () => {
    try {
      setIsLoading(true);
      const data = await OpenWeatherService.getWeatherForecastByCity(city);
      setWeatherData(data);
    } catch (error) {
      setError(error);
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
      <div>
        {isLoading ? <Spinner /> : <code>{JSON.stringify(weatherData)}</code>}
      </div>
    </>
  );
}
