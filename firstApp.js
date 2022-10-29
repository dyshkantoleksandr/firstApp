'use strict';


let numberOfFilms; 


function start() {
    numberOfFilms = +prompt("Wie viele Filmen haben Sie schon geguckt?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Wie viele Filmen haben Sie schon geguckt?", "");
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors:{},
    genres:[],
    privat: false
};




function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("Welches Film haben Sie zu letzt gesehen?", "").trim(),
              b = prompt("Welche Note kriegt er von Ihnen?", "");
    
            if ( a != null && b != null && a != '' && b != '' && a.length < 50 ) {
                personalMovieDB.movies [a] = b; 
        } else {
            i--;
        }   
    }      
}
rememberMyFilms();



function detectPersonalLevel() {
    if (personalMovieDB.count <= 10) {
        console.log('Zu wenig');
    } else if  ( personalMovieDB.count > 10 && personalMovieDB.count <= 30 ) {
        console.log('Nicht schlecht');
    } else if (personalMovieDB.count >= 30) {
        console.log(' Du bist einfach Filmenhunter');
    } else {
        console.log('Error');
    }
}

detectPersonalLevel();

function showMyDB () {
    if (personalMovieDB.privat != true) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenders() {
    for( let i = 1; i <= 3; i++) {
        // const yourGenders = prompt(`Welche Genders von Films magst du am besten, bei Nummer ${i} ?`); 
        // personalMovieDB.genres[i - 1] = yourGenders;
        personalMovieDB.genres[i - 1] = prompt(`Welche Genders von Films magst du am besten, bei Nummer ${i} ?`); 
    }

}
writeYourGenders();
// console.log(personalMovieDB);