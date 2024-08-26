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
    // console.log("hvfhjd",selectedOption.value);
    const selectedTitle = selectedOption.value;
    // console.log("Selected Title:", selectedTitle);

    //    const filteredData = storedBooks.filter(item => item.title.trim().toLowercase() !== selectedTitle);

    // const rows = document.querySelectorAll("table tbody tr");
    // rows.forEach(row =>{
    //     const titleCell = row.querySelector(".title-col");
    //     if(titleCell){
    //       const titleText = titleCell.textContent;
    //       console.log("Row Title Text:", titleText);
    //       if(titleText === selectedTitle){
    //         row.remove();
    //       }
    //     }
    // });

    //remove the option
    selectedOption.remove();
  });
});
