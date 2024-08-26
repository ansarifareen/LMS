
const form= document.getElementById('myForm');

form.addEventListener('submit',function(event){
    event.preventDefault();

    const title = document.getElementById('myTitle').value;
    const author= document.getElementById('myAuthor').value;
    const year = document.getElementById('myYear').value;
    const genre= document.getElementById('myGenre').value;
    const IsAvailableString = document.getElementById('myAv').value;
    

    //convert the string into boolean
    const isAvailable = IsAvailableString === 'true' ;
    
    //creating a book object

    const book ={
        title: title,
        author: author,
        year: year,
        genre: genre,
        isAvailable: isAvailable 
    };

    //Retriving the data as a object
    let books = JSON.parse(localStorage.getItem('books')) || [];

    const removingSpaces = (str)=> str.replace(/\s+/g, '');

    if(!books.some((book)=> removingSpaces(book.title).toLowerCase()=== removingSpaces(title).toLowerCase())){
        books.push(book);
        // JavaScript object into a JSON-formatted string.
        localStorage.setItem('books',JSON.stringify(books));
       alert('Book Added successFull');

    }
    else{
        alert('This Books Title is already Exixts');
    }

    form.reset();
    // window.location.reload();
});