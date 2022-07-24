import styled from "styled-components";
import { ForecastItemProps } from ".";

export const DaysDetails = styled.div<ForecastItemProps>`
  background-color: ${({ currentDay }) => (currentDay ? "aqua;" : "red")};
  width: 200px;
  height: 200px;
`;
