const myLibrary = [];

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
    this.id = crypto.randomUUID();
	
	this.info = function() {
		return `${this.title} by ${this.author}, ${this.pages}, ${this.read}`
	};
}

function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);
    console.log(newBook.info());
    myLibrary.push(newBook);
}

addBookToLibrary("1984", "George Orwell", 328, "Unread");
addBookToLibrary("Pride and Prejudice", "Jane Austen", 384, "Read");
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, "Unread");

console.log(myLibrary);

function displayBook(myLibrary) {
	const container = document.querySelector("#books-list");
	
	myLibrary.forEach(book => {
		// create book card element
		const bookDiv = document.createElement("div");
		bookDiv.classList.add("book-card");

		// create book title element
		const bookTitle = document.createElement("h4");
		bookTitle.textContent = book.title;
		bookDiv.appendChild(bookTitle);

		// create book author element
		const bookAuthor = document.createElement("h4");
		bookAuthor.textContent = book.author;
		bookDiv.appendChild(bookAuthor);

		// create book pages element
		const bookPages = document.createElement("h4");
		bookPages.textContent = book.pages;
		bookDiv.appendChild(bookPages);

		// create book read element
		const bookRead = document.createElement("h4");
		bookRead.textContent = book.read;
		bookDiv.appendChild(bookRead);

		// append bookDiv to container
		container.appendChild(bookDiv);
	})
}

displayBook(myLibrary);
