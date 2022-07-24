import { getGeoLocation } from "../api/geoApi";

const options = [{ label: "label", value: "value" }];

const loadOptions = async (namePrefix: string) => {
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
