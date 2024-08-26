document.addEventListener("DOMContentLoaded", function () {
  const tableBody = document.getElementById("table-body");
  var storedBooks = JSON.parse(localStorage.getItem("books")) || [];

  //renderTable for proper functioning and rendering the exact table data from local storage.
  function renderTable(books) {
    tableBody.innerHTML = "";

    books.forEach((book, index) => {
      const row = document.createElement("tr");

      row.innerHTML = `<td>${index + 1}</td>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.year}</td>
        <td class="genre-col">${book.genre}</td>
        <td >${book.isAvailable}</td>`;

      //creating delete button
      const removeButton = document.createElement("button");
      removeButton.className = "remove";
      removeButton.textContent = "Delete";

      //create a cell for the extra button
      const removeCell = document.createElement("td");
      removeCell.appendChild(removeButton);

      //appending the other rows in tablebody
      tableBody.appendChild(row);
      //appending the delete button on the row
      row.appendChild(removeCell);

      //:::::::::::::::::: adding function  on the Delete button:::::::::::::::::::::::::::::::::
      removeButton.addEventListener("click", function () {
        //Removing the Book From the Array
        storedBooks.splice(index, 1);
        //Updating the Local Storage
        localStorage.setItem("books", JSON.stringify(storedBooks));
        //Re-rendering the table : for updating the serial number
        renderTable(storedBooks);
      });
    });
  }
  renderTable(storedBooks); // main Rendereing

  // :::::::::::::::: function for SEarch by Title :::::::::::::::::::::::
  const searchbtn1 = document.getElementById("s-btn1");
  //reference for clearing the input when seaarched
  const searchInput1 = document.getElementById("search-title");

  searchbtn1.addEventListener("click", function () {
    const searchtitleValue = document
      .getElementById("search-title")
      .value.trim()
      .toLowerCase();
    const filteredData = storedBooks.filter(
      (item) => item.title.trim().toLowerCase() === searchtitleValue
    );
    renderTable(filteredData);
    searchInput1.value = "";
  });

  // :::::::::::::::: function for Search by Genre :::::::::::::::::::::::
  const searchbtn2 = document.getElementById("s-btn2");
  const searchInput2 = document.getElementById("search-genre");
  searchbtn2.addEventListener("click", function () {
    const searchGenreValue = document
      .getElementById("search-genre")
      .value.trim()
      .toLowerCase();

    const filteredData = storedBooks.filter(
      (item) => item.title.trim().toLowerCase() === searchGenreValue
    );
    renderTable(filteredData);

    searchInput2.value = "";
  });

  // :::::::::::::::: function for Reset the table :::::::::::::::::::::::
  const reset = document.getElementById("reset-button");
  reset.addEventListener("click", function () {
    storedBooks = JSON.parse(localStorage.getItem("books")) || []; //Reload
    renderTable(storedBooks); // render the table to the original

    const check = document.getElementById("check");
    check.checked = false; //unchecking the check-box
  });

  //:::::::::::::::: function showing the available books  :::::::::::::::::::::::
  const check = document.getElementById("check");

  check.addEventListener("change", function (event) {
    if (event.target.checked) {
      const filteredData = storedBooks.filter(
        (item) => item.isAvailable === true
      );
      renderTable(filteredData);
    } else {
      renderTable(storedBooks);
    }
  });
});
