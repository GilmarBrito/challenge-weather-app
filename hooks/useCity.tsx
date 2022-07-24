import React, { createContext, useContext, useEffect, useState } from "react";
import { getGeoLocationByLatLong } from "../api/geoApi";
import { CurrentCity } from "../models/City";

type CityContextData = {
  currentCity: CurrentCity;
  setCurrentCity: React.Dispatch<React.SetStateAction<CurrentCity>>;
};

const CityContext = createContext<CityContextData>({} as CityContextData);

const CityProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [city, setCity] = useState<CurrentCity>({ label: "", value: "" });

  const geoSuccess = async ({
    coords: { latitude, longitude },
  }: GeolocationPosition) => {
    const result = await getGeoLocationByLatLong({
      lat: latitude,
      lon: longitude,
    });

    if (result) {
      const [cityData] = result.data;
      setCity({
        label: `${cityData.city}, ${cityData.region}, ${cityData.country}`,
        value: `${cityData.latitude} ${cityData.longitude}`,
      });
    }
  };

  const geoError = () => {
    setCity({
      label: "Lisbon, Lisbon District, Portugal",
      value: "38.72635 -9.14843",
    });
  };

  useEffect(() => {
    if (navigator) {
      navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
    }
  }, []);

  return (
    <CityContext.Provider
      value={{ currentCity: city, setCurrentCity: setCity }}
    >
      {children}
    </CityContext.Provider>
  );
};

function useCity(): CityContextData {
  const context = useContext(CityContext);
  return context;
}

export { CityProvider, useCity };
