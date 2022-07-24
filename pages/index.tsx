import type { NextPage } from "next";
import Header from "../components/Header";
import MainContainer from "../components/MainContainer";
import { CityProvider } from "../hooks/useCity";
import { WeatherProvider } from "../hooks/useWeather";
import GlobalStyle from "../styles/global";

const Home: NextPage = () => {
  return (
    <CityProvider>
      <WeatherProvider>
        <GlobalStyle />
        <Header />
        <MainContainer />
        <footer>footer</footer>
      </WeatherProvider>
    </CityProvider>
  );
};

export default Home;
