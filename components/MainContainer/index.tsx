import { DailyDetailsInfoProps } from "../../models/DailyDetailsInfo";
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
          <DailyDetailsInfo {...detail} key={detail.value} />
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
