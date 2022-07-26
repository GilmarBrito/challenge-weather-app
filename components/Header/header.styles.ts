import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-direction: column-reverse;
  //display: grid;
  //grid-template-columns: repeat(2, 1fr);
`;

export const CityInfo = styled.div`
  padding: 10px 20px;
  & > p:first-child {
    font-size: 24px;
  }
  p {
    margin: 4px;
  }
`;

export const Search = styled.div`
  padding: 10px 20px;
  margin: 12px 0;
  display: flex;
  align-items: flex-end;
  justify-content: end;
  width: 100%;

  #uniqueSearch {
    width: 100%;
  }
`;
