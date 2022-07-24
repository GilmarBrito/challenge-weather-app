import { useEffect, useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { useCity } from "../../hooks/useCity";
import { useFavorite } from "../../hooks/useFavorite";
import { CurrentCity } from "../../models/City";
import loadOptions from "../../utils/search";
import { CityInfo, Header, Search } from "./header.styles";

const HeaderComponent = () => {
  const { setCurrentCity, currentCity } = useCity();
  const { favorites, toggleFavoriteItem } = useFavorite();
  const [inputValue, setInputValue] = useState<CurrentCity>(currentCity);

  const handleOnChange = async (searchData: CurrentCity) => {
    setInputValue(searchData);
  };

  const toggleFavorite = () => {
    toggleFavoriteItem(currentCity);
  };

  useEffect(() => {
    setCurrentCity(inputValue);
  }, [inputValue]);

  useEffect(() => {
    console.log(favorites);
  }, [favorites]);

  const isOnFavorite = favorites.some((fav) => fav.label === currentCity.label);

  return (
    <Header>
      {currentCity.label && (
        <CityInfo>
          {currentCity.label.split(", ").map((item) => (
            <p key={item}>{item}</p>
          ))}
          <button onClick={toggleFavorite}>{`${
            isOnFavorite ? "Remove From" : "Add To"
          } Favorite`}</button>
        </CityInfo>
      )}

      <Search>
        <AsyncPaginate
          debounceTimeout={1000}
          value={inputValue}
          loadOptions={loadOptions}
          id="uniqueSearch"
          // @ts-ignore comment
          onChange={handleOnChange}
        />
      </Search>
    </Header>
  );
};

export default HeaderComponent;
