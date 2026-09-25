import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // <--- ADD THIS: swiper-container/swiper-slide are plain web components
})
export class HomePage {
  testImages: Array<string>;

  constructor() {
    this.testImages = [
      "../../assets/vectordeck1.png",
      "../../assets/vectordeck2.png",
      "../../assets/vectordeck3.png",
    ]
  }
}
