import Route from '@ember/routing/route';
import { localStorageKey } from '../utils/constants';

export default class ApplicationRoute extends Route {
  model() {
    let status = localStorage.getItem(localStorageKey) || '[]';

    return JSON.parse(status);
  }
}
