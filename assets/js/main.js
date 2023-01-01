'use strict';

window.addEventListener('DOMContentLoaded', () => {
    let numberOfFilms;

    function start() {
        numberOfFilms = +prompt('How many films have you already watched?', '');

        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt('How many films have you already watched?', '');
        }
    }
    start();

    const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        private: false
    };

    function rememberMyFilms() {
        for (let i = 0; i < 2; i++) {
            const questionLastWatchedMovie = prompt('One of the last movies you watched??', '');
            const questionMovieRate = prompt('How much would you rate it?', '');

            if (questionLastWatchedMovie != null && questionMovieRate != null && questionLastWatchedMovie !== '' && questionMovieRate !== '' && questionLastWatchedMovie.length < 50) {
                personalMovieDB.movies[questionLastWatchedMovie] = questionMovieRate;
                console.log('Done');
            } else {
                console.log('Error');
                i--;
            }
        }
    }
    rememberMyFilms();

    function detectPersonalLevel() {
        if (personalMovieDB.count < 10) {
            alert('Watched quite a few films');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            alert('You are a classic spectator');
        } else if (personalMovieDB.count >= 30) {
            alert('Are you a cinephile');
        } else {
            alert('An error has occurred');
        }
    }
    detectPersonalLevel();

    function writeYourGenres() {
        for (let i = 1; i <= 3; i++) {
            personalMovieDB.genres[i-1] = prompt(`Your favorite genre under number ${i}`, '');
        }
    }
    writeYourGenres();

    function showMyDB(hidden) {
        if (!hidden) console.log(personalMovieDB);
    }
    showMyDB(personalMovieDB.private);
})