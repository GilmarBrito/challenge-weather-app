import { DailyDetailsInfoProps } from "../../models/DailyDetailsInfo";
import DailyDetailsInfo from "./DailyDetailsInfo";
import ForecastItem from "./ForecastItem";
import * as S from "./mainContainer.styles";

const MainContainer = () => {
  const detailsInfo: DailyDetailsInfoProps[] = [
    { value: "0.00%", description: "Rain" },
    { value: "0.00%", description: "Cloudy" },
    { value: "0.00%", description: "Sunny" },
    { value: "0.00%", description: "Rain" },
    { value: "0.00%", description: "Partial" },
  ];

  return (
    <S.Main>
      <S.DailyInfo>
        <div className="image"></div>
        <div className="temperature">
          <h2>21C</h2>
          <p>Feels like</p>
          <span>clear sky</span>
        </div>
      </S.DailyInfo>
      <S.DailyDetails>
        {detailsInfo.map((detail) => (
          <DailyDetailsInfo {...detail} />
        ))}
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
    </S.Main>
  );
};

export default MainContainer;
