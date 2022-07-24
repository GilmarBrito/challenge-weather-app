import styled from "styled-components";

export const Header = styled.header`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const CityInfo = styled.div`
  padding: 12px;

  h2 {
    margin: 0;
  }
  p {
    margin: 4px;
  }
`;

export const Search = styled.div`
  padding: 12px;
  display: flex;
  align-items: flex-end;
  justify-content: end;
`;
