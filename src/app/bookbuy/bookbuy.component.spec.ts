/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BookbuyComponent } from './bookbuy.component';

describe('BookbuyComponent', () => {
  let component: BookbuyComponent;
  let fixture: ComponentFixture<BookbuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookbuyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookbuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
