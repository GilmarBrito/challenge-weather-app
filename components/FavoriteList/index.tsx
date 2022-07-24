import { useFavorite } from "../../hooks/useFavorite";
import * as S from "./favoriteList.styles";

const FavoriteList = () => {
  const { favorites, toggleFavoriteItem } = useFavorite();

  return (
    <S.FavoritesContainer>
      <ul>
        {favorites.map((favorite) => (
          <li key={favorite.value}>
            {favorite.label}
            <button onClick={() => toggleFavoriteItem(favorite)}>
              Remove from list
            </button>
          </li>
        ))}
      </ul>
    </S.FavoritesContainer>
  );
};

export default FavoriteList;
