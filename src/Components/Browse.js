import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />

      {/* 

MainContainer
 - VideoContainer
 - VideoTitle
SecondaryContainer
 - Movies list(multiples of movies)
 - Cards

*/}
    </div>
  );
};

export default Browse;
