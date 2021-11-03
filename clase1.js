class User {
  constructor(name, lastName, books, pets) {
    this.name = name;
    this.lastName = lastName;
    this.books = books;
    this.pets = pets;
  }
}

const user = new User("Pedro", "Gomez", [], ["perro", "gato"]);

const getFullName = () => {
  return `${user.name} ${user.lastName}`;
};

const addPets = () => user.pets.push("rabbit", "ruster");

const countPets = () => user.pets.length;

const addBook = user.books.push(
  { title: "Team Human", author: "Douglas Rushkoff" },
  { title: "El Dilema Humano", author: "Joan Cwaik" }
);

const getBookNames = Object.values(user.books.map((e) => e.title));

console.log(user);
console.log(getBookNames);
