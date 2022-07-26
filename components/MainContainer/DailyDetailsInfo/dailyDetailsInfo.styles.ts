import styled from "styled-components";

export const Info = styled.div`
  color: #bdbdbd;
  margin: 0 4px;
  padding: 4px 6px;
  display: flex;
  justify-content: space-between;
  @media (min-width: 768px) {
    margin: 0 12px;
  }
  span + span {
    color: white;
  }
`;
