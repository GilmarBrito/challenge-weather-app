import api from "./fetcher";

type GetGeoLocationProps = {
  namePrefix: string;
};

export const getGeoLocation = async ({ namePrefix }: GetGeoLocationProps) => {
  try {
    const url =
      `${process.env.NEXT_PUBLIC_HOST_RAPIDAPI_GEO_CITIES}?namePrefix=${namePrefix}` ||
      "";

    const apiKey = process.env.NEXT_PUBLIC_HEADER_RAPIDAPI_API_KEY || "";
    const apiHost = process.env.NEXT_PUBLIC_HEADER_RAPIDAPI_HOST || "";
    console.log({ url, apiKey, apiHost });

    const data = await api.get(url, {
      headers: {
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": apiHost,
      },
    });

    return data;
  } catch (error) {
    console.error(error);
  }

  // NEXT_PUBLIC_OPENWEATHER_API_BASEURL =
  //   "https://api.openweathermap.org/data/2.5/onecall";
  // NEXT_PUBLIC_OPENWEATHER_API_KEY = "7518abb078e474537a4e9fa95482f5b3";
  // NEXT_PUBLIC_HOST_RAPIDAPI_GEO_CITIES =
  //   "https://wft-geo-db.p.rapidapi.com/v1/geo/cities";
  // NEXT_PUBLIC_HEADER_RAPIDAPI_API_KEY =
  //   "61352005cdmshb44f5dc7a61c3d9p1842c7jsneed5b51611a7";
  // NEXT_PUBLIC_HEADER_RAPIDAPI_HOST = "wft-geo-db.p.rapidapi.com";
};
