import styled from "styled-components";

export const FavoritesContainer = styled.section`
  display: flex;
  justify-content: center;
  padding: 0 20px;
  width: 100%;

  ul {
    width: 100%;
  }
  @media (min-width: 768px) {
  }

  ul > li {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    background-color: #002952;
    color: #fff;
    padding: 8px 12px;
    margin: 8px 0;
    font-size: 18px;
    cursor: pointer;
    border-radius: 8px;

    button {
      margin-left: 16px;
    }
  }
`;
