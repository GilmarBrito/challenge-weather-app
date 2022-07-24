import type { NextPage } from "next";
import FavoriteList from "../components/FavoriteList";
import Header from "../components/Header";
import MainContainer from "../components/MainContainer";
import { CityProvider } from "../hooks/useCity";
import { FavoriteProvider } from "../hooks/useFavorite";
import { WeatherProvider } from "../hooks/useWeather";
import GlobalStyle from "../styles/global";

const Home: NextPage = () => {
  return (
    <CityProvider>
      <WeatherProvider>
        <FavoriteProvider>
          <GlobalStyle />
          <Header />
          <MainContainer />
          <FavoriteList />
        </FavoriteProvider>
      </WeatherProvider>
    </CityProvider>
  );
};

export default Home;
