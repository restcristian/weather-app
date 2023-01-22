import { weatherAppConfig } from "@/config";
import { OpenWeatherApiError } from "@/services/errors";
import { OpenWeatherApiGeolocationResponse } from "@/services/types";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { city } = req.query;
  const { openWeatherUrl, openWeatherKey } = weatherAppConfig;

  try {
    const response: OpenWeatherApiGeolocationResponse[] = await (
      await fetch(
        `${openWeatherUrl}/geo/1.0/direct?q=$${city}&appid=${openWeatherKey}`
      )
    ).json();

    if (!response?.length) {
      throw new OpenWeatherApiError("City not found", 404);
    }

    res.status(200).send(response);
  } catch (error) {
    if (error instanceof OpenWeatherApiError) {
      res.status(error.statusCode).send(error);
    } else {
      res.status(500).send("Internal Server Error");
    }
  }
}
