import './App.css';
import Movies from "./assets/movies.json";
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
  { id: '12_Action_34', value: 'Action' },
  { id: '12_Adventure_34', value: 'Adventure' },
  { id: '12_Science_34', value: 'Science' },
  { id: '12_Comedy_34', value: 'Comedy' },
  { id: '12_Drama_34', value: 'Drama' }
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
          current={genres[1].value}
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
