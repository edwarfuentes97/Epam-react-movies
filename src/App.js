import './App.css';
import Counter from "./components/counter/counter";
import { SearchForm } from "./components/searchForm/searchForm";
import { GenreSelect } from "./components/GenreSelect/GenreSelect";
import Button from './components/Button';

const handleButtonClick = () => {
  alert(`Click button call`);
};

const onSelectedGenre = (genre) => {
  alert(`Se cambio el genero a ${genre}`)
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
      {/* 
        this code its needed, not delete.
        <Button>Demo button</Button> 
        <Counter initialValue={10}></Counter>
      */}
      
      <SearchForm onSearch={handleButtonClick} initialValue={'InterStellar'}></SearchForm>
      <GenreSelect genres={genres}
        current={genres[1]}
        selectedGenreCallback={onSelectedGenre}></GenreSelect>
    </>
  );
}

export default App;
