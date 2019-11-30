/* eslint no-restricted-globals: 'off' */
let myMovies = [
    {
        title: "The Shawshank Redemption",
        year: 1994,
        director: "Frank Darabont",
        duration: "2h 22min",
        genre: [
          "Crime",
          "Drama"
        ],
        rate: 9.3
      },
      {
        title: "The Godfather",
        year: 1972,
        director: "Francis Ford Coppola",
        duration: "2h 55min",
        genre: [
          "Crime",
          "Drama"
        ],
        rate: 9.2
      },
      {
        title: "The Godfather: Part II",
        year: 1974,
        director: "Steven Spielberg",
        duration: "3h 22min",
        genre: [
          "Crime",
          "Drama"
        ],
      },
      {
        title: "The Dark Knight",
        year: 1957,
        director: "Christopher Nolan",
        duration: "2h 32min",
        genre: [
          "Action",
          "Crime",
          "Thriller"
        ],
        rate: ''
      },
      {
        title: "Angry Men",
        year: 1957,
        director: "Steven Spielberg",
        duration: "1h 36min",
        genre: [
          "Crime",
          "Drama"
        ],
        rate: 8.9
      }
]

const orderByYear = arr => {
    let newArr = [...arr];
    newArr.sort((a,b) => {
        if (a.year - b.year === 0) {
            return a.title.localeCompare(b.title);
            console.log("entrei!");
         }
         return a.year - b.year;
    });
    return newArr;
}
// console.log(orderByYear(myMovies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

const howManyMovies = arr => {
    let newArr = arr.filter(movie => movie.director === "Steven Spielberg")
    .filter(movie => movie.genre.indexOf("Drama") >= 0);
    return newArr.length;
}

// console.log(howManyMovies(myMovies));

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = arr => {
    let newArr = [...arr];
    newArr.sort((a,b) => a.title.localeCompare(b.title));
    let titlesArray = newArr.map(movie => movie.title);
    if (titlesArray.length > 20) {
        titlesArray.splice(20);
    }
    return titlesArray;
}

// console.log(orderAlphabetically(myMovies));

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = arr => {
    let averageRating = 0;

    if (arr.length === 0) {
        return 0;
    } else {
        averageRating = arr.reduce((rateSum, movie) => {
            console.log(movie.rate);
            if (typeof movie.rate === 'number' && movie.hasOwnProperty('rate')) {
                rateSum += movie.rate;
            }
            return rateSum;
        }, 0);
        averageRating /= arr.length;
        return Math.round(averageRating*100)/100;
    }
}

// console.log(ratesAverage(myMovies));


// Iteration 5: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = arr => {
    let filterDramas = arr.filter((movie) => movie.genre.indexOf('Drama') >= 0);

    return ratesAverage(filterDramas);
}

// console.log(dramaMoviesRate(myMovies));

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

const turnHoursToMinutes = arr => {
  let durationAdjusted = [...arr];

  durationAdjusted = durationAdjusted.map((movie) => {
    // break string of duration into array
    let durationArray = [];
    durationArray = movie.duration.split('');
    // console.log(durationArray);
    durationArray = durationArray.map()
    movie.duration = durationArray;
  });

  return durationAdjusted;
}

console.log(turnHoursToMinutes(myMovies));

  // returns an array with the duration in minutes
  // without modifying the original

//   let arrHours = [];
//   let arrMinutes = [];
//   let durationHours, durationMinutes;
//   let indexHours, indexMinutes;
  
//   newArr.map((movie) => {
//     indexHours = movie.duration.indexOf('h');
//     indexMinutes = movie.duration.indexOf('m');
//     arrHours.push
    
//   });

//   newArr.map((movie) => {

//     let durationHours, durationMinutes;
//     let indexHours, indexMinutes;

//     indexHours = movie.duration.indexOf('h');
//     if (typeof movie.duration.slice(0, indexHours) === Number) {
//       durationHours = movie.duration.slice(0, indexHours);
//     }

//     // console.log(indexHours);
//     console.log(durationHours);

//     indexMinutes = movie.duration.indexOf('m');
//     if (typeof movie.duration.slice(indexHours + 2, indexMinutes) === Number) {
//       durationMinutes = movie.duration.slice(indexHours + 2, indexMinutes);
//     }

//     // console.log(indexMinutes);
//     console.log(durationMinutes);
    
//     movie.duration = durationHours * 60 + durationMinutes;
//     // console.log(indexHours);

//     // if (typeof movie.duration.slice(0,1) === number) {
//     //   duration
//     // }
//     // movie.duration
//   })
//   return newArr;
// }

// console.log(turnHoursToMinutes(myMovies));

// BONUS Iteration: Best yearly rate average - Best yearly rate average
