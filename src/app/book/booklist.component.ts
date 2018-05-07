import { Component, OnInit } from '@angular/core';
import {Book} from '../model/book';
import { BookService } from '../services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BooklistComponent implements OnInit {

  books: Book[] = [];
  buybooks: Book[] = [];
  recentBook: "None";

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit() {
    console.log('entro');
    return this.bookService.findAll().subscribe(p => {this.books = p
      console.log(this.books);
    });
  }
  
  selectedBook(book){
    this.recentBook = book;
    this.buybooks.push(book);
    console.log(book.name + " Was added to car");
  }

  redirectToBuy(){
    this.router.navigate(['/books/bookbuy', '1']);
  }
}
