import { useEffect } from "react";
import { getWeather } from "../../api/weatherApi";
import { useCity } from "../../hooks/useCity";
import { useWeather } from "../../hooks/useWeather";
import { DailyDetailsInfoProps } from "../../models/DailyDetailsInfo";
import { GetWeatherProps } from "../../models/WeatherDbResponse";
import DailyDetailsInfo from "./DailyDetailsInfo";
import ForecastItem from "./ForecastItem";
import * as S from "./mainContainer.styles";

const MainContainer = () => {
  const detailsInfo: DailyDetailsInfoProps[] = [
    { value: "0.01%", description: "Rain" },
    { value: "0.02%", description: "Cloudy" },
    { value: "0.03%", description: "Sunny" },
    { value: "0.04%", description: "Rain" },
    { value: "0.05%", description: "Partial" },
  ];

  const { currentCity } = useCity();
  const { setCurrentWeather, currentWeather } = useWeather();

  const getWeatherData = async ({ lat, lon }: GetWeatherProps) => {
    const response = await getWeather({ lat, lon });

    if (!response) {
      return;
    }

    setCurrentWeather(response);
  };

  useEffect(() => {
    if (Boolean(currentCity.value)) {
      const [lat, lon] = currentCity.value.split(" ");

      getWeatherData({ lat: Number(lat), lon: Number(lon) });
    }
  }, [currentCity]);

  const getIcon = (icon: string) =>
    `http://openweathermap.org/img/w/${icon}.png`;
  return (
    <S.Main>
      {currentWeather && (
        <>
          <S.DailyInfo>
            <img
              src={getIcon(currentWeather.current.weather[0].icon)}
              width={150}
              height={150}
            ></img>
            <div className="temperature">
              <h2>{currentWeather.current.temp}C</h2>
              <p>Feels like {currentWeather.current.feels_like}</p>
              <span>{currentWeather.current.weather[0].description}</span>
            </div>
          </S.DailyInfo>
          <S.DailyDetails>
            <DailyDetailsInfo
              description="Humidity"
              value={currentWeather.current.humidity}
            />
            <DailyDetailsInfo
              description="Sunrise"
              value={new Date(currentWeather.current.sunrise).getUTCHours()}
            />
            <DailyDetailsInfo
              description="Sunset"
              value={new Date(currentWeather.current.sunset).getHours()}
            />
            <DailyDetailsInfo
              description="wind Speed"
              value={currentWeather.current.wind_speed}
            />
            <DailyDetailsInfo
              description="Wind Degree"
              value={currentWeather.current.wind_deg}
            />
          </S.DailyDetails>
          <S.ForecastList>
            <h2>Days</h2>
            <div>
              <ForecastItem />
              <ForecastItem currentDay />
              <ForecastItem />
              <ForecastItem />
              <ForecastItem />
              <ForecastItem />
              <ForecastItem />
            </div>
          </S.ForecastList>
        </>
      )}
    </S.Main>
  );
};

export default MainContainer;
