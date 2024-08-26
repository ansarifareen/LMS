document.addEventListener("DOMContentLoaded", function () {
  const LatestPath = window.location.pathname.split("/").pop();

  const navUrl = document.querySelectorAll(".nav-container ul li a");

  navUrl.forEach((path) => {
    if (path.getAttribute("href") === LatestPath) {
      path.classList.add("active");
    }
  });

  const bookConatiner = document.getElementById("books-container");
  const bookCount = document.getElementById("book-count");

  //Retrieving the data from localStorage  in object (converted from string)
  const storedBooks = JSON.parse(localStorage.getItem("books")) || [];

  if (bookCount) {
    bookCount.textContent = storedBooks?.length;
  }

  if (bookConatiner)
    storedBooks.forEach((book) => {
      const cardElement = document.createElement("div");
      cardElement.classList.add("card");

      const title = document.createElement("p");
      title.textContent = `Title : ${book.title}`;

      const author = document.createElement("p");
      author.textContent = `Author : ${book.author}`;

      const year = document.createElement("p");
      year.textContent = `Year : ${book.year}`;

      const genre = document.createElement("p");
      genre.textContent = `Genre : ${book.genre}`;

      const available = document.createElement("p");
      available.textContent = `Available : ${book.isAvailable}`;

      cardElement.appendChild(title);
      cardElement.appendChild(author);
      cardElement.appendChild(year);
      cardElement.appendChild(genre);
      cardElement.appendChild(available);

      bookConatiner.appendChild(cardElement);
    });
});
