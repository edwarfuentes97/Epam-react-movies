import { GenreSelect } from "./GenreSelect";

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

export default {
    title: "components/GenreSelect",
    component: GenreSelect,
    args: {
        genres,
        current: genres[1],
        selectedGenreCallback: onSelectedGenre
    }
};

const Template = (args) => <GenreSelect {...args} />;
export const FirstGenreSelect = Template.bind({});

export const Position3InArray = Template.bind({});
Position3InArray.args = {
    genres,
    current: genres[3],
    selectedGenreCallback: onSelectedGenre
}