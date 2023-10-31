import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // @ViewChild('gallerySwiper')   swiperRef: ElementRef | undefined;

  testImages: Array<string>;

  constructor() {

    this.testImages = [
      "../../assets/calaveras/1.png",
      "../../assets/calaveras/2.png",
      "../../assets/calaveras/3.png",
    ]
  }

}
