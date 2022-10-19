let numberOfFilms = +prompt("Wie viele Filmen haben Sie schon geguckt?", "");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors:{},
    genres:[],
    privat: false
};
const a = prompt("Welches Film haben Sie zu letzt gesehen?", "");
const b = prompt("Welche Note kriegt er von Ihnen?", "");
const c = prompt("Welches Film haben Sie zu letzt gesehen?","");
const d = prompt("Welche Note kriegt er von Ihnen?", "");

personalMovieDB.movies [a] = b; 
personalMovieDB.movies [c] = d; 

console.log(personalMovieDB);