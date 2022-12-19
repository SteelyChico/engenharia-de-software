class Book {
  constructor(title, description, author) {
    this.title = title;
    this.description = description;
    this.author = author;
    this.id = title;
  }
}

class Library {
    constructor () {
        this.books = []
    }

    addBook(bookInfo) {
        let book = new Book(bookInfo['title'], bookInfo['description'], bookInfo['author'])
        this.books.push(book)

        return
    }

    getBooks() {
        return this.books;
    }

    removeBookById(id) {
        this.books = this.books.filter(book => book.id !== id);
    }

    getBookById(id) {
        return this.books.find(book => book.id === id);
    }

    updateBookById(id, info) {
        const book = this.getBookById(id);
        if (book) {
            if (info.title) {
                book.title = info.title
            }

            if (info.description) {
                book.description = info.description;
            }

            if (info.author) {
                book.author = info.author
            }
        }
        return book
    }
}

//test case

//const test = new Library()

//test.addBook({title: 'example1', description: 'uno', author: 'ichi'})
//test.addBook({title: 'example2', description: 'dos', author: 'ni'})

//console.log(test.getBooks());
