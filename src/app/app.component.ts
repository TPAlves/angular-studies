import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { ChildComponent } from './components/child/child.component';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [UserComponent, ChildComponent],

  // @Input -> componente pai para um componente filho
  // @Output -> componente filho para um componente pai
})
export class AppComponent {
  items = new Array();
  message = '';
  title = 'playground-angular';
  imageURL = 'https://m.media-amazon.com/images/I/813kqvYoRfL.png';
  users = [
    { id: 0, name: 'Sarah' },
    { id: 1, name: 'Amy' },
    { id: 2, name: 'Rachel' },
    { id: 3, name: 'Jessica' },
    { id: 4, name: 'Poornima' },
  ];

  isEditable = true;

  salve() {
    console.log('Salveeeeee, there 👋');
  }

  onMouseOVer() {
    this.message = 'Vamos lá 🚀';
  }

  onMouseOut() {
    this.message = '';
  }

  addItem(item: string) {
    this.items.push(item);
  }
}
