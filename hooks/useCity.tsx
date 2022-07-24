import React, { createContext, useContext, useState } from "react";
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
