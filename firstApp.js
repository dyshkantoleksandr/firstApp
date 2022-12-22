'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors:{},
    genres:[],
    privat: false,
    start : function() {
        personalMovieDB.count = +prompt("Wie viele Filmen haben Sie schon geguckt?", "");
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Wie viele Filmen haben Sie schon geguckt?", "");
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt("Welches Film haben Sie zu letzt gesehen?", "").trim(),
                  b = prompt("Welche Note kriegt er von Ihnen?", "");
        
                if ( a != null && b != null && a != '' && b != '' && a.length < 50 ) {
                    personalMovieDB.movies [a] = b; 
            } else {
                i--;
            }   
        }      
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count <= 10) {
            console.log('Zu wenig');
        } else if  ( personalMovieDB.count > 10 && personalMovieDB.count <= 30 ) {
            console.log('Nicht schlecht');
        } else if (personalMovieDB.count >= 30) {
            console.log(' Du bist einfach Filmenhunter');
        } else {
            console.log('Error');
        }
    },
    showMyDB: function() {
        if (personalMovieDB.privat != true) {
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB: function(){
        if(personalMovieDB){
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenders: function() {
        for( let i = 1; i <= 3; i++) {
            // const yourGenders = prompt(`Welche Genders von Films magst du am besten, bei Nummer ${i} ?`); 
            // personalMovieDB.genres[i - 1] = yourGenders;
            let genre = prompt(`Welche Genders von Films magst du am besten, bei Nummer ${i} ?`);
            if ( genre === '' || genre == null) {
                console.log(' Falsch eingetragene Daten');
                i--;
            } else {
                 personalMovieDB.genres[i - 1] = genre; 
            }
           
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(` Favorite genres ${i +1} - ist ${item}`);
        }); 
    }
};




