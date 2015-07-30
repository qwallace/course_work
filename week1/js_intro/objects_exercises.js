
console.log("We're working on the objects exercises.");

// Never forget another recipe!

// Create an object to hold information on your favorite recipe.
// It should have properties for title (a string), servings (a number),
// and ingredients (an array of strings).

// On separate lines (one console.log statement for each),
// log the recipe information so it looks like:

// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa

var recipe = {
  Title: "Mole",
  Serves: 2,
  Ingredients: ["cinnamon", "cumin", "cocoa"]
};

// console.log(recipe["Ingredients"][0]);

// console.log(recipe[])

// console.log(recipe.Ingredients[0]);

for (var key in recipe) {

  if (key === "Serves") {
    console.log("Serves: " + recipe[key]);
 
   }  else if (key === "Ingredients") {

      console.log("Ingredients:");

      for (var i = 0; i < recipe.Ingredients.length; i++) {
        console.log(recipe.Ingredients[i]);
      }
   }  else {
      console.log(recipe[key]);
  }
}

// console.log(recipe.Ingredients.join(/n);



// Keep track of which books you read and which books you want to read!

// Create an array of objects, where each object describes a book and has
// properties for the title (a string), author (a string), and alreadyRead
// (a boolean indicating if you read it yet).

// Iterate through the array of books. For each book, log the book title and
// book author like so: "The Hobbit by J.R.R. Tolkien". Now use an if/else statement
// to change the output depending on whether you read it yet or not. If you read it,
// log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log
//  a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'


var books = [
  {
    title: "Old Man and the Sea",
    author: "Ernest Hemingway",
    alreadyRead: true
  },
  {
    title: "Of Mice and Men",
    author: "John Steinbeck",
    alreadyRead: true
  }, {
    title: "Catcher in the Rye",
    author: "JD Salinger",
    alreadyRead: false
  }
];

for (var i = 0; i < books.length; i++) {
  var book = books[i];
  var desc = book.title + " by " + book.author;

  if (book.alreadyRead) {
    console.log("You have already read " + desc);
  } else {
    console.log("You may want to read " + desc);
  }

  //console.log(books[i]);
  // for (var key in books) {
  //   console.log(books[key]);
  // }
}

// It's like IMDB, but much much smaller!

// Create an object to store the following information about your favorite movie:
// title (a string), duration (a number), and stars (an array of strings).

// Create a function to print out the movie information like so: "Puff the Magic
// Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."

var films = {
  title: "Jaws",
  duration: 100,
  stars: ["Chief Brody", "Big shark"]
}

//Function declaration

function fileInfo(movie) {
  var info = "";
  info += movie.title;
  info += " lasts for " + movie.duration + " minutes";
  info += " and stars " + movie.stars.join(', ') + ".";

  console.log(info);
}

fileInfo(films);

// Function expression

// var fileInfo = function (movie) {
    //Code
// }





















