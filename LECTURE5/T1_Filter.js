const books = [
    { title: "The Great Gatsby", genre: "Classic", publishYear: 1925 },
    { title: "1984", genre: "Dystopian", publishYear: 1949 },
    { title: "To Kill a Mockingbird", genre: "Historical", publishYear: 1960 },
    { title: "Moby-Dick", genre: "Adventure", publishYear: 1851 },
    { title: "War and Peace", genre: "Historical", publishYear: 1869 },
    { title: "The Catcher in the Rye", genre: "Fiction", publishYear: 1951 },
    { title: "Pride and Prejudice", genre: "Romance", publishYear: 1813 },
    { title: "The Hobbit", genre: "Fantasy", publishYear: 1937 },
    { title: "The Lord of the Rings", genre: "Fantasy", publishYear: 1954 },
    { title: "Fahrenheit 451", genre: "Dystopian", publishYear: 1953 }
  ];
  
  //i want those book whose gene is Historical
  const userbook = books.filter(function f(k){
     return  k.genre==="Historical";  
  })

  // now i want the book whose genere is Fantasy

  const fant = books.filter((b)=>
{
    return b.genre==="Fantasy";
})

//now i want the book that i s greater tha 1925;

const year = books.filter((x)=> x.publishYear>1925)
console.log(year)
// console.log(fant)
//   console.log(userbook)
  //console.log(books);
