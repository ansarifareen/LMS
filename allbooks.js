document.addEventListener("DOMContentLoaded", function () {
  const tableBody = document.getElementById("table-body");
  const storedBooks = JSON.parse(localStorage.getItem("books")) || [];

  //renderTable for proper functioning and rendering the exact table data from local storage.
  function renderTable() {
    tableBody.innerHTML = "";

    storedBooks.forEach((book, index) => {
      const row = document.createElement("tr");

      // checking if the value is in boolean andconverting the value into text
      //   const isAvailable =
      //     typeof book.isAvailable === "boolean"
      //       ? book.isAvailable
      //       : book.isAvailable === "true";
      //   const availability = isAvailable ? "true" : "false";

      //creating delete button
      const removeButton = document.createElement("button");
      removeButton.className = "remove";
      removeButton.textContent = "Delete";

      //create a cell for the extra button
      const removeCell = document.createElement("td");
      removeCell.appendChild(removeButton);

      row.innerHTML = `<td>${index + 1}</td>
        <td class="title-col">${book.title}</td>
        <td>${book.author}</td>
        <td>${book.year}</td>
        <td class="genre-col">${book.genre}</td>
        <td class="myAvail">${book.isAvailable}</td>`;

      //appending the deleter button on the row
      row.appendChild(removeCell);
      tableBody.appendChild(row);

      //::::::::::::::::::adding function  on the Delete button:::::::::::::::::::
      removeButton.addEventListener("click", function () {
        // alert("delete works");
        // var td = event.target.parentNode;
        // var tr = td.parentNode; // row to be deleted
        // tr.parentNode.removeChild(tr);

        //Removing the Book From the Array
        storedBooks.splice(index, 1);
        //Updating the Local Storage
        localStorage.setItem("books", JSON.stringify(storedBooks));
        //Re-rendering the table : for updating the serial number
        renderTable();
      });
    });
  }
  renderTable(); // main Rendereing

  // :::::::::::::::: function for SEarch by Title :::::::::::::::::::::::
  const searchbtn1 = document.getElementById("s-btn1");
  //reference for clearing the input when seaarched
  const searchInput1 = document.getElementById('search-title');

  searchbtn1.addEventListener("click", function () {
    const searchtitleValue = document
      .getElementById("search-title")
      .value.trim()
      .toLowerCase();
    const rows = document.querySelectorAll("table tbody tr");

    rows.forEach((row) => {
      const titleCell = row.querySelector(".title-col");
      if (titleCell) {
        const titleText = titleCell.textContent.trim().toLowerCase();
        if (titleText === searchtitleValue || searchtitleValue === "") {
          row.style.display = "";
        } else {
          row.style.display = "none";
        }
      }
    });
    searchInput1.value ='';
  });

  // :::::::::::::::: function for Search by Genre :::::::::::::::::::::::
  const searchbtn2 = document.getElementById("s-btn2");

  const searchInput2 = document.getElementById('search-genre');
  searchbtn2.addEventListener("click", function () {
    const searchGenreValue = document
      .getElementById("search-genre")
      .value.trim()
      .toLowerCase();
    const rows = document.querySelectorAll("table tbody tr");
    rows.forEach((row) => {
      const genreCell = row.querySelector(".genre-col");
      if (genreCell) {
        const genreText = genreCell.textContent.trim().toLowerCase();
        if (genreText === searchGenreValue || searchGenreValue === "") {
          row.style.display = "";
        } else {
          row.style.display = "none";
        }
      }
    });
    searchInput2.value ='';
  });

  // :::::::::::::::: function for Reset the table :::::::::::::::::::::::
  const reset = document.getElementById("reset-button");
  reset.addEventListener("click", function () {
    storedBooks.length = 0; //clear the whole array
    storedBooks.push(...(JSON.parse(localStorage.getItem("books")) || [])); //Reload
    renderTable(); // render the table to the original

    const check = document.getElementById("check");
    check.checked = false; //unchecking the check-box
  });
});

//:::::::::::::::: function shwing the available books  :::::::::::::::::::::::
function showAvailable() {
  const check = document.getElementById("check");
  const rows = document.querySelectorAll("table tbody tr");

  rows.forEach((row) => {
    let av = row.querySelector(".myAvail").textContent.trim();
    if (check.checked) {
      if (av === "true") {
        row.style.display = ""; // display the particular row
      } else {
        row.style.display = "none"; // else none
      }
    } else {
      row.style.display = ""; // if unchecked all rows being displayed.
    }
  });
}

function hello(){
  alert('hi');
}


//hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii