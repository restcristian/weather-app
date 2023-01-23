import { NextApiRequest, NextApiResponse } from "next";
import { weatherAppConfig } from "@/config";
import { OpenWeatherApiCurrentResponse } from "@/services/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { openWeatherUrl, openWeatherKey } = weatherAppConfig;
  const { lat, lon } = req.query;

  const query = `lat=${lat}&lon=${lon}`;

  try {
    const response: OpenWeatherApiCurrentResponse = await (
      await fetch(
        `${openWeatherUrl}/data/2.5/onecall?${query}&appid=${openWeatherKey}`
      )
    ).json();

    res.status(200).send(response);
  } catch (error) {
    res.send(error);
  }
}
