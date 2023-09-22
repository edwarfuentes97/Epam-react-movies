import './App.css';
import  Movies from "./assets/movies.json";
/* import Counter from './components/counter/counter';
import Button from './components/Button';
 */
import { SearchForm } from './components/searchForm/searchForm';
import { GenreSelect } from './components/GenreSelect/GenreSelect';
import MovieTile from './components/MovieTile/MovieTile';
import MovieDetail from './components/MovieDetail/MovieDetail';


const movies = Movies;

const handleButtonClick = () => {
  alert(`Click button call`);
};

const onSelectedGenre = (genre) => {
  alert(`Se cambio el genero a ${genre}`)
}

const genres = [
  'Action', 'Adventure', 'Science', 'Comedy', 'Drama'
]



function App() {
  const isDetailShowActive = true;

  return (
    <>
      {/* 
        this code its needed, not delete.
        <Button>Demo button</Button> 
        <Counter initialValue={10}></Counter>
      */}


      <div className='app-container'>
        {
          !isDetailShowActive ?

            <SearchForm
              onSearch={handleButtonClick}
              initialValue={'InterStellar'}
            />
            :
            <MovieDetail
              movieImageUrl={movies[0].movieImageUrl}
              movieName={movies[0].movieName}
              score={movies[0].score}
              genres={movies[0].genres}
              releaseDate={movies[0].releaseDate}
              duration={movies[0].duration}
              description={movies[0].description} />
        }


        <GenreSelect
          genres={genres}
          current={genres[1]}
          selectedGenreCallback={onSelectedGenre} />

        <div className='mt-container'>
          {
            movies && movies.map((movie, index) => {
              return (
                <MovieTile
                  movieImageUrl={movie.movieImageUrl}
                  movieName={movie.movieName}
                  releaseDate={movie.releaseDate}
                  genres={movie.genres}
                  onclickEvent={handleButtonClick}
                  key={index}
                />
              )
            })
          }
        </div>
      </div >
    </>
  );
}

export default App;
