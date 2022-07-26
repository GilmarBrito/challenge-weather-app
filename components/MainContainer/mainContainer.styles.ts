import styled from "styled-components";

export const Main = styled.main`
  color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const DailyInfo = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;

  .image {
    width: 100px;
    height: 100%;
    background-color: yellow;
  }

  .temperature {
    h2 {
      font-size: 48px;
    }
  }
`;

export const DailyDetails = styled.section`
  padding: 16px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-content: center;
  background-color: #002952;
  border-radius: 8px;
`;

export const ForecastList = styled.section`
  //grid-column: span 2;
  width: 100%;
  margin: 0 auto;

  //padding: 16px;

  h2 {
    font-size: 24px;
    margin: 12px 0;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 12px;
    @media (min-width: 768px) {
      flex-direction: row;
    }
  }
`;
