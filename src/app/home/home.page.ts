import { Component, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(shortname => ({
    shortname,
  }))

  testImages: Array<string> = Array.from({ length: 100 }, () => [
    "https://dummyimage.com/600x400/ffa1ff/000000.jpg",
    "https://dummyimage.com/600x500/a3ffd9/000000.jpg",
    "https://dummyimage.com/600x600/849112/000000.jpg",
  ]).flat()
}
