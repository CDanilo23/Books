import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from '../app/shared/app.router';
import { AppComponent } from './app.component';
import { BooklistComponent } from './book/booklist.component';
import { BookService } from './services/book.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BookbuyComponent } from './bookbuy/bookbuy.component';

@NgModule({
  declarations: [
    AppComponent,
    BooklistComponent,
    BookbuyComponent
  ],
  imports: [
    Ng2SearchPipeModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
