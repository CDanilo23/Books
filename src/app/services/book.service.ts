import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Book } from '../model/book';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';


@Injectable()
export class BookService {

  constructor(private http: Http, private router: Router) { }

  findAll(): Observable<any> {
    let response = 
     this.http.get('http://localhost:8010/book')
      .map(
        (res: Response) => {
          return res.json();
        }
      );
      console.log(response);
      return response;
  }

  get(id: number): Observable<any>{
    return this.http.get('http://localhost:8010/books/' + id)
    .map(
      (res: Response) => {
        return res.json();
      }
    );
  }

}
