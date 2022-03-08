import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { localStorageKey } from '../utils/constants';

export default class ListingComponent extends Component {
  @tracked books = [];

  get library() {
    return [...this.args.books, ...this.books];
  }

  @action
  addBook(event) {
    event.preventDefault();

    let title = event.target.elements['book-title'].value;
    let pages = event.target.elements['book-pages'].value;
    let book = { title, pages, progress: 0 };

    this.books = [...this.books, book];
    this.saveData();

    event.target.reset();
  }

  @action
  saveData() {
    localStorage.setItem(localStorageKey, JSON.stringify(this.library));
  }
}
