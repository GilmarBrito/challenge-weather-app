import { Daily } from "../../../models/WeatherDbResponse";
import { getIcon } from "../../../utils/icon";
import * as S from "./forecastItem.styles";

export type ForecastItemProps = { item: Daily };

const ForecastItem = ({ item }: ForecastItemProps) => {
  return (
    <S.DaysDetails>
      <span>
        {new Date(item.dt * 1000).toLocaleDateString("en-EN", {
          weekday: "long",
        })}
      </span>
      <img src={getIcon(item.weather[0].icon)} width={80} height={80}></img>
      <span className="forecastTemperature">{item.temp.day} C</span>
    </S.DaysDetails>
  );
};

export default ForecastItem;
