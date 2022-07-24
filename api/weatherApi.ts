import {
  GetWeatherProps,
  WeatherDbResponse,
} from "../models/WeatherDbResponse";
import api from "./fetcher";

export const getWeather = async ({ lat, lon }: GetWeatherProps) => {
  try {
    const url = process.env.NEXT_PUBLIC_OPENWEATHER_API_BASEURL || "";
    const appid = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY || "";

    const data = await api.get<WeatherDbResponse>(url, {
      params: {
        exclude: "minutely,hourly",
        units: "metric",
        lat,
        lon,
        appid,
      },
    });

    return data.data;
  } catch (error) {
    console.error(error);
  }
};
