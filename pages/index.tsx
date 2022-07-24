import type { NextPage } from "next";
import Header from "../components/Header";
import MainContainer from "../components/MainContainer";
import GlobalStyle from "../styles/global";

const Home: NextPage = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <MainContainer />
      <footer>footer</footer>
    </>
  );
};

export default Home;
