# DmCustomNotifier

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.0.

## Commands init lib

```bash
ng generate library dm-custom-notifier \
&& rm -rf projects/dm-custom-notifier/src/lib/ \
&& mkdir projects/dm-custom-notifier/src/lib \
&& ng generate module dm-custom-notifier/notification --project=dm-custom-notifier --flat \
&& ng generate service dm-custom-notifier/services/notifier --project=dm-custom-notifier \
&& ng generate component dm-custom-notifier/components/notifier --project=dm-custom-notifier \
&& ng generate component dm-custom-notifier/components/notifier-container --project=dm-custom-notifier \
&& ng generate directive dm-custom-notifier/directives/notifier --project=dm-custom-notifier \
&& ng generate interface dm-custom-notifier/models/notification --project=dm-custom-notifier
```

## Code scaffolding

Run `ng generate component component-name --project dm-custom-notifier` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project dm-custom-notifier`.

> Note: Don't forget to add `--project dm-custom-notifier` or else it will be added to the default project in your `angular.json` file.

## Build

Run `ng build dm-custom-notifier` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build dm-custom-notifier`, go to the dist folder `cd dist/dm-custom-notifier` and run `npm publish`.

## Running unit tests

Run `ng test dm-custom-notifier` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
