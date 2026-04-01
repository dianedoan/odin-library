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

addBookToLibrary("1984", "George Orwell", 328, "unread");
addBookToLibrary("Pride and Prejudice", "Jane Austen", 384, "unread");
console.log(myLibrary);
