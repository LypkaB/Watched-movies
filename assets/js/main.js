'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const numberOfFilms = +prompt('How many films have you already watched?', '');

    const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };

    const firstQuestionLastWatchedMovie = prompt('One of the last movies you watched?', '');
    const firstQuestionMovieRate = prompt('How much would you rate it?', '');
    const secondQuestionLastWatchedMovie = prompt('One of the last movies you watched?', '');
    const secondQuestionRateMovie = prompt('How much would you rate it?', '');

    personalMovieDB.movies[firstQuestionLastWatchedMovie] = firstQuestionMovieRate;
    personalMovieDB.movies[secondQuestionLastWatchedMovie] = secondQuestionRateMovie;

    console.log(personalMovieDB.movies);
})