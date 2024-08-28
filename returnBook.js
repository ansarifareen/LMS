document.addEventListener("DOMContentLoaded", function () {
    const returnBook = document.getElementById("myrb");
    const storedBooks = JSON.parse(localStorage.getItem("books")) || [];
  
    storedBooks.forEach((book) => {
      if (!book.isAvailable) {
        const returndropdownoptions = document.createElement("option");
        returndropdownoptions.value = book.title;
        returndropdownoptions.textContent = `${book.title} by ${book.author}`;
        returnBook.appendChild(returndropdownoptions);
      }
    });
  
    //Return button function
    const returnbtn = document.getElementById("r-button");
    returnbtn.addEventListener("click", function () {
      const selectedOption = returnBook.options[returnBook.selectedIndex];
      const selectedTitle = selectedOption.value;
      //find the book in the stored array
      const bookToReturn = storedBooks.find(
        (book) => book.title === selectedTitle
      );
      if (bookToReturn) {
        //update availability
        bookToReturn.isAvailable = true;
        //saving updated book list back to localStorage
        localStorage.setItem("books", JSON.stringify(storedBooks));
        alert(`You have Returned: ${selectedTitle} Book`);
      }
      //remove the option
      selectedOption.remove();
    });
  });