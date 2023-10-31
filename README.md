# angular-swiper-example
Simple angular ionic project implementing swiper.js 11, angular 16+ &amp; ionic 7+


# Steps

1. Install the latest swiper.js version.

   ```
    $ npm i swiper@latest
   ```

2. Add CUSTOM_ELEMENTS_SCHEMA to the module.ts file of the view youre adding a swiper element to.

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

&

schemas: [CUSTOM_ELEMENTS_SCHEMA]

![image](https://github.com/afrotonder/angular-swiper-example/assets/8844972/e2cea5ae-33c4-4667-abaa-7b3327706f4c)


3. Import register function to initialize swiper in app.component. This only needs to be done once in the whole project.

import { register } from 'swiper/element/bundle';
register();

![image](https://github.com/afrotonder/angular-swiper-example/assets/8844972/bc8efe94-3828-4319-b90e-39fee6b90ba6)

4. Add swiper element to the .html file of the view youre working on.

```
<swiper-container  navigation="true" pagination="true">
  <swiper-slide *ngFor="let image of testImages">
    <img class="swiperImage" src="{{image}}" alt="">
  </swiper-slide>
</swiper-container>
```

