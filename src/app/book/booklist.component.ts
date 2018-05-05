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

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit() {
    console.log('entro');
    return this.bookService.findAll().subscribe(p => {this.books = p
      console.log(this.books);
    });
  }

}
