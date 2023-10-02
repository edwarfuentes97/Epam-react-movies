import MovieForm from "./MovieForm";

export default {
    title: "components/MovieForm",
    component: MovieForm,
    args: {
        children: "MovieForm"
    }
};

const Template = (args) => <MovieForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    movieImageUrl: "https://ohsmagnet.com/wp-content/uploads/2019/04/unnamed-607x900.jpg",
    movieName: "Example Movie 1",
    genres: ["Action",
        "Adventure",
        "Science Fiction"
    ],
    releaseDate: "2023-09-21",
    score: 3.0,
    duration: "2h 34min",
    description: "The Avengers is a cinematic masterpiece that combines the forces of some of the most beloved Marvel superheroes in a thrilling, action-packed adventure. Directed by Joss Whedon, the film is a pivotal moment in the Marvel Cinematic Universe (MCU) and brings together an ensemble cast of iconic characters. At its core, the story revolves around the threat posed by Loki, the cunning and mischievous Asgardian god. Loki gains access to the powerful Tesseract, an otherworldly energy source with the potential for catastrophic destruction. With the Tesseract in his possession, Loki sets his sights on Earth, aiming to subjugate humanity and rule as its sovereign. To combat this impending global crisis, Nick Fury, the enigmatic director of S.H.I.E.L.D., assembles a team of extraordinary individuals, each with their own unique abilities and personalities.",
}
