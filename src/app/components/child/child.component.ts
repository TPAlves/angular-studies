import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  count = 0;
  @Output() incrementCountEvent = new EventEmitter<number>();
  @Output() addItemEvent = new EventEmitter<string>();

  onClick() {
    this.count++;
    this.incrementCountEvent.emit(this.count);
  }

  addItem() {
    this.addItemEvent.emit('🐢');
  }
}
