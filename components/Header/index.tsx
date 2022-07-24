import { useEffect, useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { useCity } from "../../hooks/useCity";
import { CurrentCity } from "../../models/City";
import loadOptions from "../../utils/search";
import { CityInfo, Header, Search } from "./header.styles";
const initialInputValue = {
  label: "",
  value: "",
};
const HeaderComponent = () => {
  const [inputValue, setInputValue] = useState<CurrentCity>(initialInputValue);

  const { setCurrentCity } = useCity();

  const handleOnChange = async (searchData: CurrentCity) => {
    console.log(searchData);

    setInputValue(searchData);
  };

  useEffect(() => {
    setCurrentCity(inputValue);
  }, [inputValue]);

  return (
    <Header>
      <CityInfo>
        <h2>Porto</h2>
        <p>Portugal</p>
        <p>Monday, 12 July 2022 08:00</p>
      </CityInfo>

      <Search>
        <AsyncPaginate
          debounceTimeout={1000}
          value={inputValue}
          loadOptions={loadOptions}
          id="uniqueSearch"
          onChange={handleOnChange}
        />
      </Search>
    </Header>
  );
};

export default HeaderComponent;
