# angular-swiper-example
Simple angular ionic project implementing swiper.js 14, angular 22+ &amp; ionic 9+, using standalone components.


# Steps

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
