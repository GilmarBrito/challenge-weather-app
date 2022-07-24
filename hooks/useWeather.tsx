import React, { createContext, useContext, useState } from "react";
import { WeatherDbResponse } from "../models/WeatherDbResponse";

type WeatherContextData = {
  currentWeather: WeatherDbResponse | null;
  setCurrentWeather: React.Dispatch<
    React.SetStateAction<WeatherDbResponse | null>
  >;
};

const WeatherContext = createContext<WeatherContextData>(
  {} as WeatherContextData
);

const WeatherProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentWeather, setCurrentWeather] =
    useState<WeatherDbResponse | null>(() => {
      return null;
    });

  return (
    <WeatherContext.Provider value={{ currentWeather, setCurrentWeather }}>
      {children}
    </WeatherContext.Provider>
  );
};

function useWeather(): WeatherContextData {
  const context = useContext(WeatherContext);
  return context;
}

export { WeatherProvider, useWeather };
