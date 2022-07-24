import React, { createContext, useContext, useEffect, useState } from "react";
import { CurrentCity } from "../models/City";
import { getFavoriteFromLocal, saveFavoriteToLocal } from "../utils/storage";

type FavoriteContextData = {
  favorites: CurrentCity[];
  toggleFavoriteItem: (item: CurrentCity) => void;
};

const FavoriteContext = createContext<FavoriteContextData>(
  {} as FavoriteContextData
);

const FavoriteProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [favorites, setFavorites] = useState<CurrentCity[]>([]);

  const toggleFavoriteItem = (item: CurrentCity) => {
    const alreadyInFavorite = favorites.some((fav) => fav.label === item.label);

    if (alreadyInFavorite) {
      const newFavorites = favorites.filter((fav) => fav.label !== item.label);
      setFavorites(newFavorites);
      saveFavoriteToLocal(newFavorites);
    } else {
      const newFavorites = [...favorites, item];
      setFavorites(newFavorites);
      saveFavoriteToLocal(newFavorites);
    }
  };

  useEffect(() => {
    setFavorites(getFavoriteFromLocal());
  }, []);

  return (
    <FavoriteContext.Provider value={{ favorites, toggleFavoriteItem }}>
      {children}
    </FavoriteContext.Provider>
  );
};

function useFavorite(): FavoriteContextData {
  const context = useContext(FavoriteContext);
  return context;
}

export { FavoriteProvider, useFavorite };
