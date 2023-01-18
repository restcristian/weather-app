import { NextApiRequest, NextApiResponse } from "next";
import { weatherAppConfig } from "@/config";
import { OpenWeatherApiResponse } from "@/services/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<OpenWeatherApiResponse>
) {
  const { openWeatherUrl, openWeatherKey } = weatherAppConfig;
  const { city, lat, lon } = req.query;

  const query = (lat && lon) ? `lat=${lat}&lon=${lon}` : city;

  try {
    const response: OpenWeatherApiResponse = await (
      await fetch(`${openWeatherUrl}?q=${query}&appid=${openWeatherKey}`)
    ).json();
    res.status(200).send(response);
  } catch (error) {
    res.status(500);
  }
}
