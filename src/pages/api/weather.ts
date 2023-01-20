import { NextApiRequest, NextApiResponse } from "next";
import { weatherAppConfig } from "@/config";
import { OpenWeatherApiCurrentResponse } from "@/services/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<OpenWeatherApiCurrentResponse>
) {
  const { openWeatherUrl, openWeatherKey } = weatherAppConfig;
  const { city, lat, lon } = req.query;

  const query = (lat && lon) ? `lat=${lat}&lon=${lon}` : city;

  try {
    const response: OpenWeatherApiCurrentResponse = await (
      await fetch(`${openWeatherUrl}/data/2.5/weather?q=${query}&appid=${openWeatherKey}`)
    ).json();
    res.status(200).send(response);
  } catch (error) {
    res.status(500);
  }
}
