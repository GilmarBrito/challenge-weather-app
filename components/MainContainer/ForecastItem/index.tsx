import * as S from "./forecastItem.styles";

export type ForecastItemProps = { currentDay?: boolean };

const ForecastItem = ({ currentDay }: ForecastItemProps) => {
  return (
    <S.DaysDetails currentDay={currentDay}>
      <span>Wednesday</span>
      <div className="image"></div>
      <span className="forecastTemperature">23C</span>
    </S.DaysDetails>
  );
};

export default ForecastItem;
