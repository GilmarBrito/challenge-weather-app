import { CurrentCity } from "../models/City";

const favoriteKey = "@cities/favorites";

export const saveFavoriteToLocal = (favorites: CurrentCity[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(favoriteKey, JSON.stringify(favorites));
  }
};

export const getFavoriteFromLocal = () => {
  if (typeof window !== "undefined") {
    const localFavorites = localStorage.getItem(favoriteKey);
    return !localFavorites ? [] : JSON.parse(localFavorites);
  }

  return [];
};
