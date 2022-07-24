import styled from "styled-components";

export const FavoritesContainer = styled.section`
  display: flex;
  justify-content: center;

  ul > li {
    display: flex;
    justify-content: space-between;
    background-color: red;
    padding: 8px 12px;
    margin: 8px 0;
    font-size: 18px;
    cursor: pointer;
    border-radius: 8px;

    button {
      margin-left: 8px;
    }
  }
`;
