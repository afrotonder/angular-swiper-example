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

![image](https://github.com/afrotonder/angular-swiper-example/assets/8844972/3f450674-5571-41d3-816c-760cd046b816)


3. Import register function to initialize swiper in app.component. This only needs to be done once in the whole project.

import { register } from 'swiper/element/bundle';
register();

![image](https://github.com/afrotonder/angular-swiper-example/assets/8844972/b7de43f5-f5c1-4976-8c1b-20844e42b83e)

4. Add swiper element to the .html file of the view youre working on.

```
<swiper-container  navigation="true" pagination="true">
  <swiper-slide *ngFor="let image of testImages">
    <img class="swiperImage" src="{{image}}" alt="">
  </swiper-slide>
</swiper-container>
```

