
import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../models/book.model';

@Component({
  moduleId: module.id,
  selector: 'ngb-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['books-list.component.css']
})
export class BooksListComponent implements OnInit {
  @Input() books: Book[];
  constructor() { }

  ngOnInit() {
  }

}
