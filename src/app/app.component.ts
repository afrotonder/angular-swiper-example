import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle'; // <--- IMPORT REGISTER HERE

register(); // <--- INIT SWIPER HERE

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}
}
