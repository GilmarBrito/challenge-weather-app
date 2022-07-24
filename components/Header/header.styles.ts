import styled from "styled-components";

export const Header = styled.header`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const CityInfo = styled.div`
  padding: 12px;

  & > p:first-child {
    font-size: 24px;
  }
  p {
    margin: 4px;
  }
`;

export const Search = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: flex-end;
  justify-content: end;
  width: 100%;

  #uniqueSearch {
    width: 70%;
  }
`;
