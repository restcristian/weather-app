import { useQuery, UseQueryOptions } from "react-query";
import { QueryKey } from "react-query/core";
import { OpenWeatherApiError } from "./errors";
import OpenWeatherService from "./OpenWeatherService";
import { OpenWeatherApiCurrentResponse } from "./types";

type QueryOptions<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey
> = Omit<
  UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
  "queryKey" | "queryFn"
>;

export const useOpenWeatherCurrentResponseQuery = (
  geoLocation: { lat?: number; lon?: number; city?: string },
  options?: QueryOptions<OpenWeatherApiCurrentResponse, OpenWeatherApiError>
) => {
  const { lat, lon, city } = geoLocation;
  
  const query = useQuery(
    "useOpenWeatherCurrentResponseQuery",
    () => {
      if (!city) {
        return OpenWeatherService.getWeatherForecastByCoordinates(
          lat,
          lon
          ).then();
        }
        return OpenWeatherService.getWeatherForecastByCity(city).then();
    },
    options
  );
  return {
    ...query,
  };
};

export const useOpenWeatherForecastByCityQuery = (
  city: string,
  options?: QueryOptions
) => {
  const query = useQuery(
    "useOpenWeatherForecastByCity",
    () => OpenWeatherService.getWeatherForecastByCity(city).then(),
    options
  );
  return {
    ...query,
  };
};
