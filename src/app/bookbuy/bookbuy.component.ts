import { Component, OnInit, OnDestroy } from '@angular/core';
import { BookService } from '../services/book.service';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../model/book';

@Component({
  selector: 'app-bookbuy',
  templateUrl: './bookbuy.component.html',
  styleUrls: ['./bookbuy.component.css']
})
export class BookbuyComponent implements OnInit , OnDestroy {
  book: Book;
  sub: any;
  errorMessage: string = '';
  response: any;

  constructor(private bookService: BookService, private route: ActivatedRoute) {}

  ngOnInit() {
    console.log('Entro a buy');
    this.sub = this.route.params.subscribe( params => {
      let id = Number.parseInt(params['id']);
      console.log('getting book id: ' + id);
      this.bookService.get(id).subscribe(p => this.book = p );
    });
  }

  saveBuy(){
    console.log('Try to buy');
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
