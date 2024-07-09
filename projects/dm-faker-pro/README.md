# DmFakerPro

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.0.

## Commands init lib
```bash
ng generate library dm-faker-pro
&& mkdir projects/dm-faker-pro/src/lib/dm-faker-pro/ \
&& mkdir projects/dm-faker-pro/src/lib/dm-faker-pro/services \
&& mkdir projects/dm-faker-pro/src/lib/dm-faker-pro/components \
&& mkdir projects/dm-faker-pro/src/lib/dm-faker-pro/directives \
&& mkdir projects/dm-faker-pro/src/lib/dm-faker-pro/pipes \
&& mkdir projects/dm-faker-pro/src/lib/dm-faker-pro/models \
&& mkdir projects/dm-faker-pro/src/lib/dm-faker-pro/utils \
&& touch projects/dm-faker-pro/src/lib/dm-faker-pro/models/dm-faker-pro-config.model.ts \
&& touch projects/dm-faker-pro/src/lib/dm-faker-pro/models/dm-faker-pro-data.model.ts \
&& touch projects/dm-faker-pro/src/lib/dm-faker-pro/utils/dm-faker-pro-utils.ts  \
&& ng generate module dm-faker-pro/DMFakerPro --project=dm-faker-pro  \
&& ng generate service dm-faker-pro/services/DMFakerPro --project=dm-faker-pro \
&& ng generate component dm-faker-pro/components/DM-FakerProConfig --project=dm-faker-pro \
&& ng generate directive dm-faker-pro/directives/DMFakerPro --project=dm-faker-pro \
&& ng generate pipe dm-faker-pro/pipes/DMFakerPro --project=dm-faker-pro \
&& ng generate service dm-faker-pro/services/DM-FakerProLocale --project=dm-faker-pro 
```

## Code scaffolding

Run `ng generate component component-name --project dm-faker-pro` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project dm-faker-pro`.
> Note: Don't forget to add `--project dm-faker-pro` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build dm-faker-pro` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build dm-faker-pro`, go to the dist folder `cd dist/dm-faker-pro` and run `npm publish`.

## Running unit tests

Run `ng test dm-faker-pro` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
