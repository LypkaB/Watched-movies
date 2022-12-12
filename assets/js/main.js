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

    /* My variant */
    /*restartLoop:
        while (true) {
            for (let i = 1; i <= 2; i++) {
                const questionLastWatchedMovie = prompt('One of the last movies you watched?', '');
                if (questionLastWatchedMovie === null) {
                    personalMovieDB.movies = {};
                    continue restartLoop;
                } else if (questionLastWatchedMovie === '' || questionLastWatchedMovie.length > 50) {
                    personalMovieDB.movies = {};
                    continue restartLoop;
                }

                const questionMovieRate = prompt('How much would you rate it?', '');
                if (questionMovieRate === null) {
                    personalMovieDB.movies = {};
                    continue restartLoop;
                } else if (questionMovieRate === '' || questionMovieRate.length > 2) {
                    personalMovieDB.movies = {};
                    continue restartLoop;
                }

                personalMovieDB.movies[questionLastWatchedMovie] = questionMovieRate;
            }
            break;
        }*/

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

    if (personalMovieDB.count < 10) {
        alert('Watched quite a few films');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert('You are a classic spectator');
    } else if (personalMovieDB.count >= 30) {
        alert('Are you a cinephile');
    } else {
        alert('An error has occurred');
    }

    console.log(personalMovieDB.movies);
})