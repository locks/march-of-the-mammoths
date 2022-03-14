import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class InputtoggleComponent extends Component {
  @tracked stats = false;
  @tracked focused = false;
  @action
  toggle() {
    this.stats = !this.stats;
    this.args.toggle?.(this.stats);
  }

  @action
  handleFocusIn() {
    this.focused = true;
  }

  @action
  handleFocusOut() {
    this.focused = false;
  }
}
