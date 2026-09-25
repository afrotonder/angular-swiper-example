# angular-swiper-example
Simple Angular Ionic project implementing Swiper.js 14, Angular 22+ and Ionic 9+, using standalone components.

Companion project for the Medium post [Integrating Swiperjs with Ionic-Angular](https://medium.com/@afrotonder/integrating-swiperjs-with-angular-a1c4d287b096).


# Running this project

You need a current LTS version of [Node.js](https://nodejs.org/) and npm.

1. Clone the repo and move into it.

   ```
   git clone https://github.com/afrotonder/angular-swiper-example.git
   cd angular-swiper-example
   ```

2. Install dependencies.

   ```
   npm install
   ```

3. Start the dev server, then open http://localhost:4200 in your browser.

   ```
   npm start
   ```

   If you have the Ionic CLI installed (`npm i -g @ionic/cli`), `ionic serve` works too.

Other scripts: `npm run build` (production build into `www/`), `npm test` (unit tests), `npm run lint`.


# Adding Swiper to your own project

1. Install the latest swiper.js version.

   ```
    $ npm i swiper@latest
   ```

2. Add `CUSTOM_ELEMENTS_SCHEMA` to the `@Component` decorator of the standalone component you're adding a swiper element to (Swiper's `swiper-container`/`swiper-slide` are plain web components, not Angular components, so Angular needs to be told to allow them).

```ts
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [/* ... */],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePage {}
```

3. Import the `register` function to initialize Swiper in `main.ts`. This only needs to be done once in the whole project, before `bootstrapApplication` runs.

```ts
import { register } from 'swiper/element/bundle';

register();

bootstrapApplication(AppComponent, {
  providers: [/* ... */],
});
```

4. Add the swiper element to the `.html` file of the view you're working on, using Angular's `@for` control-flow syntax:

```html
<swiper-container navigation="true" pagination="true">
  @for (image of testImages; track image) {
    <swiper-slide>
      <img class="swiperImage" src="{{image}}" alt="">
    </swiper-slide>
  }
</swiper-container>
```
