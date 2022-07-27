import { useEffect } from "react";
import { getWeather } from "../../api/weatherApi";
import { useCity } from "../../hooks/useCity";
import { useWeather } from "../../hooks/useWeather";
import { GetWeatherProps } from "../../models/WeatherDbResponse";
import { getIcon } from "../../utils/icon";
import DailyDetailsInfo from "./DailyDetailsInfo";
import ForecastItem from "./ForecastItem";
import * as S from "./mainContainer.styles";

const MainContainer = () => {
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
  }, [currentCity.value]);

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
              <h2>{currentWeather.current.temp} &#8451;</h2>
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
              {currentWeather.daily.map((item) => (
                <ForecastItem key={item.dt} item={item} />
              ))}
            </div>
          </S.ForecastList>
        </>
      )}
    </S.Main>
  );
};

export default MainContainer;
