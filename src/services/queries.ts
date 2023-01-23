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
  "queryKey"
>;

export const useOpenWeatherCurrentResponseQuery = <T = OpenWeatherApiCurrentResponse> (
  geoLocation: { lat?: number; lon?: number; city?: string },
  options: any,
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
    {
      ...options,
    }
  );
  return {
    ...query,
  };
};