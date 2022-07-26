import { useCity } from "../../hooks/useCity";
import { useFavorite } from "../../hooks/useFavorite";
import { useWeather } from "../../hooks/useWeather";
import { CurrentCity } from "../../models/City";
import * as S from "./favoriteList.styles";

const FavoriteList = () => {
  const { favorites, toggleFavoriteItem } = useFavorite();
  const { setCurrentCity } = useCity();
  const { currentWeather } = useWeather();

  const handleCurrentCity = (favorite: CurrentCity) => {
    setCurrentCity(favorite);
  };

  return (
    <S.FavoritesContainer>
      {currentWeather && (
        <ul>
          {favorites.map((favorite) => (
            <li
              key={favorite.value}
              onClick={() => handleCurrentCity(favorite)}
            >
              {favorite.label}
              <button onClick={() => toggleFavoriteItem(favorite)}>
                Remove from list
              </button>
            </li>
          ))}
        </ul>
      )}
    </S.FavoritesContainer>
  );
};

export default FavoriteList;
