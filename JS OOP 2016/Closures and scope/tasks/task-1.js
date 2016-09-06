/* Task Description */
/* 
	*	Create a module for working with books
		*	The module must provide the following functionalities:
			*	Add a new book to category
				*	Each book has unique title, author and ISBN
				*	It must return the newly created book with assigned ID
				*	If the category is missing, it must be automatically created
			*	List all books
				*	Books are sorted by ID
				*	This can be done by author, by category or all
			*	List all categories
				*	Categories are sorted by ID
		*	Each book/catagory has a unique identifier (ID) that is a number greater than or equal to 1
			*	When adding a book/category, the ID is generated automatically
		*	Add validation everywhere, where possible
			*	Book title and category name must be between 2 and 100 characters, including letters, digits and special characters ('!', ',', '.', etc)
			*	Author is any non-empty string
			*	Unique params are Book title and Book ISBN
			*	Book ISBN is an unique code that contains either 10 or 13 digits
			*	If something is not valid - throw Error
*/
function solve() {
	var library = (function () {
		var books = [];
		var categories = [];
		function listBooks(criteria) {
			var resultArray = [], i, len;

			if (criteria) {
			if (criteria.author) {
				for (i = 0, len = books.length; i <  len; i += 1) {
					if (books[i].author === criteria.author) {
						resultArray.push(books[i]);
					}
				}
				return resultArray;
			} else if (criteria.category) {
				for (i = 0, len = books.length; i <  len; i += 1) {
					if (books[i].category === criteria.category) {
						resultArray.push(books[i]);
					}
				}
				return resultArray;
			} else {
				return books;
			}
			} else {
				return books;
			}
		}

		function addBook(book) {
			var i,len, k, categriesLen, categoryExists = false;
			if (book.title.length < 2 || book.title.length > 100) {
				throw 'book title is shorter than 2 or longer than 100 symbols' + book;
			}

			if (!book.author) {
				throw 'book author is not a valid or is empty string' + book;
			}

			if (book.isbn.length != 10 && book.isbn.length != 13) {
				throw 'book isbn is neither 10 nor 13 symbols' + book;
			}

			for (i = 0, len = books.length; i < len; i += 1) {
				if(book.title === books[i].title || book.isbn === books[i].isbn) {
					throw 'book title or isbn already exist!';
				}
			}

			book.ID = books.length + 1;

			for (k = 0, categoriesLen = categories.length; k < categoriesLen; k += 1) {
				if (categories[k] === book.category) {
					categoryExists = true;
					break;
				}
			}

			if (!categoryExists) {
				categories.push(book.category);
			}

			books.push(book);

			return book;
		}

		function listCategories() {
			return categories;
		}

		return {
			books: {
				list: listBooks,
				add: addBook
			},
			categories: {
				list: listCategories
			}
		};
	} ());
	return library;
}
module.exports = solve;
