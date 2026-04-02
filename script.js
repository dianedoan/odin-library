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

Book.prototype.updateReadStatus = function() {
	return this.read === "Read" ? this.read = "Unread" : this.read = "Read";
};

function addBookToLibrary(title, author, pages, read) {
	let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

function displayBook(myLibrary) {
	const container = document.querySelector("#books-list");
	container.innerHTML = ""; // clear existing displayed books to prevent duplicates
	
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
		
		// create buttons container
		const buttonContainer = document.createElement("div");
		buttonContainer.classList = "buttons-container";

		// create "remove" button
		const removeBookBtn = document.createElement("button");
		removeBookBtn.id = "remove-book-btn";
		removeBookBtn.textContent = "Remove";
		buttonContainer.appendChild(removeBookBtn);
		
		// remove book button event
		removeBookBtn.addEventListener("click", () => {
			const index = myLibrary.findIndex(b => b.id === book.id); // find index
			myLibrary.splice(index, 1); // remove book object from array
			displayBook(myLibrary); // re-render list
		});

		// create read/un-read button
		const readBookBtn = document.createElement("button");
		readBookBtn.id = "read-book-btn";

		// display different button text depending if read/unread
		book.read === "Read" ? readBookBtn.textContent = "Toggle Unread" : readBookBtn.textContent = "Toggle Read";
		
		buttonContainer.appendChild(readBookBtn);
		bookDiv.appendChild(buttonContainer);

		// read/unread button event
		readBookBtn.addEventListener("click", () => {
			book.updateReadStatus();
			displayBook(myLibrary); // re-render list
		});

		// append bookDiv to container
		container.appendChild(bookDiv);
	})
	console.log(myLibrary);
}

const newBookModal = document.querySelector("#new-book-dialog");
const newBookForm = document.querySelector("#new-book-form");

// submit button
newBookModal.addEventListener("submit", (e) => {
	e.preventDefault(); // prevent page reload
	
	// get input values
	const title = document.querySelector("#title").value;
	const author = document.querySelector("#author").value;
	const pages = document.querySelector("#pages").value;
	const read = document.querySelector("#read").value;
	
	// add book to library array list
	addBookToLibrary(title, author, pages, read);
	
	// display book on page
	displayBook(myLibrary);
	
	// close modal
	newBookModal.close();
});

// close modal 
newBookModal.addEventListener("close", () => {
	newBookForm.reset(); // reset form
});

// add starting books in library
addBookToLibrary("1984", "George Orwell", 328, "Unread");
addBookToLibrary("Pride and Prejudice", "Jane Austen", 384, "Read");
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, "Unread");

// render books in library
displayBook(myLibrary);
