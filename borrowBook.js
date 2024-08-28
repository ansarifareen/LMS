document.addEventListener("DOMContentLoaded", function () {
  const borrow = document.getElementById("mybb");
  const storedBooks = JSON.parse(localStorage.getItem("books")) || [];

  storedBooks.forEach((book) => {
    if (book.isAvailable) {
      const dropdownoptions = document.createElement("option");
      dropdownoptions.value = book.title;
      dropdownoptions.textContent = `${book.title} by ${book.author}`;
      borrow.appendChild(dropdownoptions);
    }
  });

  //borrow button function
  const borrowBtn = document.getElementById("b-button");
  borrowBtn.addEventListener("click", function () {
    const selectedOption = borrow.options[borrow.selectedIndex];
    const selectedTitle = selectedOption.value;
    //find the book in the stored array
    const bookToBorrow = storedBooks.find(
      (book) => book.title === selectedTitle
    );
    if (bookToBorrow) {
      //update availability
      bookToBorrow.isAvailable = false;
      //saving updated book list back to localStorage
      localStorage.setItem("books", JSON.stringify(storedBooks));
      alert(`You have Borrowed: ${selectedTitle} Book`);
    }
    //remove the option
    selectedOption.remove();
  });
});
