'use strict';


let numberOfFilms = prompt("Wie viele Filmen haben Sie schon geguckt?", "");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors:{},
    genres:[],
    privat: false
};



for (let i = 0; i < 2; i++) {
    const a = prompt("Welches Film haben Sie zu letzt gesehen?", "");
    const b = prompt("Welche Note kriegt er von Ihnen?", "");
        if ( a != null && b != null && a != '' && b != '' && a.length < 50 ) {
            personalMovieDB.movies [a] = b; 
    } else {
        i--;
    }   
}

if (personalMovieDB.count < 10) {
    console.log('Zu wenig');
} else if  ( personalMovieDB.count > 10 || personalMovieDB.count <= 30 ) {
    console.log('Nicht schlecht');
} else if (personalMovieDB.count > 30 || personalMovieDB.count <= 50) {
    console.log(' Du bist einfach Filmenhunter');
} else {
     console.log('Error');
}
console.log(personalMovieDB);