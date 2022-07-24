import { DailyDetailsInfoProps } from "../../../models/DailyDetailsInfo";
import * as S from "./dailyDetailsInfo.styles";

const DailyDetailsInfo = ({ description, value }: DailyDetailsInfoProps) => {
  return (
    <S.Info>
      <span>{description}</span>
      <span>{value}</span>
    </S.Info>
  );
};

export default DailyDetailsInfo;
