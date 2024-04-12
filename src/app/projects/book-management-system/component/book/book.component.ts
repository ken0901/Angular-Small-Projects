import { Component, OnInit } from '@angular/core';
import { Book } from '../../model/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit{
  newBookTitle: string = "";
  newBookAuthor: string = "";
  
  books: Book[] = [];
  
  ngOnInit(): void {
    let savedBooks = localStorage.getItem("books");
    this.books = savedBooks ? JSON.parse(savedBooks) : [];
  }

  addBook(){
    if(this.newBookTitle.trim().length && this.newBookAuthor.trim().length){
      let newBook: Book = {
        id: Date.now(),
        title: this.newBookTitle,
        author: this.newBookAuthor
      }

      this.books.push(newBook);

      this.newBookTitle = "";
      this.newBookAuthor = "";

      localStorage.setItem("books", JSON.stringify(this.books));
    }
  }

  removeBook(bookId: number){
    this.books.splice(bookId, 1);
    localStorage.setItem("books", JSON.stringify(this.books));
  }
}
