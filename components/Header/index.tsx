import { CityInfo, Header, Search } from "./header.styles";

const HeaderComponent = () => {
  return (
    <Header>
      <CityInfo>
        <h2>Porto</h2>
        <p>Portugal</p>
        <p>Monday, 12 July 2022 08:00</p>
      </CityInfo>

      <Search>
        <input type="text" placeholder="Enter yout location" />
      </Search>
    </Header>
  );
};

export default HeaderComponent;
