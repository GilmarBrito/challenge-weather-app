import { useEffect, useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import loadOptions from "../../utils/search";
import { CityInfo, Header, Search } from "./header.styles";

type Test = { value: string; label: string };

const HeaderComponent = () => {
  const [inputValue, setInputValue] = useState<Test>({ label: "", value: "" });

  const handleOnChange = async (searchData: Test) => {
    setInputValue(searchData);
  };

  useEffect(() => {
    console.log({ inputValue });
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
