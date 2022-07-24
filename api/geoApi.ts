import { GeoDbResponse } from "../models";
import api from "./fetcher";

type GetGeoLocationProps = {
  namePrefix: string;
};

export const getGeoLocation = async ({ namePrefix }: GetGeoLocationProps) => {
  try {
    const url = process.env.NEXT_PUBLIC_HOST_RAPIDAPI_GEO_CITIES || "";

    const apiKey = process.env.NEXT_PUBLIC_HEADER_RAPIDAPI_API_KEY || "";
    const apiHost = process.env.NEXT_PUBLIC_HEADER_RAPIDAPI_HOST || "";

    const data = await api.get<GeoDbResponse>(url, {
      params: {
        namePrefix,
        sort: "-population,name",
      },
      headers: {
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": apiHost,
      },
    });

    return data.data;
  } catch (error) {
    console.error(error);
  }
};
