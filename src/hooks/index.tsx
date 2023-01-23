import { useEffect, useState } from "react";
interface GeoLocation {
  lat: number;
  lon: number;
}
export const useGeoLocation = () => {
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [error, setError] = useState<GeolocationPositionError | null>(null);
  const [geoLocation, setGeoLocation] = useState<GeoLocation | null>(null);
  const [isGeoLocationDisabled, setIsGeoLocationDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const locationPromise = new Promise<GeoLocation>((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          resolve({
            lat: latitude,
            lon: longitude,
          });
        },
        (error) => {
          setError(error);
          reject(error);
        }
      );
    });
    setIsLoading(true);
    locationPromise
      .then((data) => {
        setIsSuccessful(true);
        setGeoLocation(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
        setIsGeoLocationDisabled(true);
      });
  }, []);
  return {
    isSuccessful,
    geoLocation,
    error,
    isGeoLocationDisabled,
    isLoading
  };
};
