import MovieTile from "./MovieTile";

export default {
    title: "components/MovieTile",
    component: MovieTile,
    args: {
        children: "MovieTile"
    }
};


const onClick = (genre) => {
    alert(`Se cambio el genero a ${genre}`)
}

const Template = (args) => <MovieTile {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    movieImageUrl: "https://ohsmagnet.com/wp-content/uploads/2019/04/unnamed-607x900.jpg",
    movieName: "Example Movie 1",
    releaseDate: "11/01/1997",
    genres: [
        "Action",
        "Adventure",
        "Science Fiction"
    ],
    onclickEvent: onClick
}


