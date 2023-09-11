import './App.css';
import Counter from "./components/counter/counter";
import {SearchForm} from "./components/searchForm/searchForm";
import {GenreSelect} from "./components/GenreSelect/GenreSelect";

const handleButtonClick = () => {
  alert('Click button callback');
};

const onSelectedGenre = (genre) => {
  alert('Se cambio el genero a ' , genre)
}

const genres = [
    'ALL',
    'DOCUMENTARY',
    'COMEDY',
    'HORROR',
    'CRIME',
    'SUSPENSE'
]

function App() {
  return (
    <>
      <Counter initialValue={10}></Counter>
      <SearchForm onSearch={handleButtonClick} initialValue={'InterStellar'}></SearchForm>
      <GenreSelect genres={genres}
                   current={genres[0]}
                   selectedGenreCallback={onSelectedGenre}></GenreSelect>
    </>
  );
}

export default App;
