import { useEffect, useState } from "react";

interface GeoLocation {
  lat: number;
  lon: number;
}
export const useGeoLocation = () => {
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [error, setError] = useState(false);
  const [geoLocation, setGeoLocation] = useState<GeoLocation | null>(null);

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
        reject(error);
      }
    );
  });
  useEffect(() => {
    locationPromise
      .then((data) => {
        setIsSuccessful(true);
        setGeoLocation(data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);
  return {
    isSuccessful,
    geoLocation,
    error,
  };
};
