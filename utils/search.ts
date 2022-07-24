import { getGeoLocation } from "../api/geoApi";

const loadOptions = async (namePrefix: string) => {
  if (namePrefix.length === 0) {
    return {
      options: [],
    };
  }

  const response = await getGeoLocation({ namePrefix });

  if (!response) {
    return {
      options: [],
    };
  }

  return {
    options: response.data.map((city) => ({
      value: `${city.latitude} ${city.longitude}`,
      label: `${city.name}, ${city.region}, ${city.country}`,
    })),
  };
};

export default loadOptions;
