import { weatherAppConfig } from "@/config";
import { OpenWeatherApiGeolocationResponse } from "@/services/types";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<OpenWeatherApiGeolocationResponse[]>
) {
  const { city } = req.query;
  const { openWeatherUrl, openWeatherKey } = weatherAppConfig;

  try {
    const response: OpenWeatherApiGeolocationResponse[] = await (
      await fetch(
        `${openWeatherUrl}/geo/1.0/direct?q=$${city}&appid=${openWeatherKey}`
      )
    ).json();
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send(error);
  }
}
