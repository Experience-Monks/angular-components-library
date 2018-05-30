# Angular Slot Machine Button Component Module

![Slot Machine Buttons Demo](/projects/slot-machine-button/demo.gif)

## See Also

* [Other component libraries](https://github.com/Jam3/angular-components-library#angular-components-library)
* [React slot machine button](https://github.com/Jam3/slot-machine-button)

## Install & Import

```shell
npm install ng-slot-machine-button
```

In the module (e.g. `AppModule`) where it will be used:

```TypeScript
/* ... */
import { SlotMachineButtonModule } from 'ng-slot-machine-button';

@NgModule({
  /* ... */
  imports: [
    SlotMachineButtonModule,
    BrowserModule
  ]
})
export class AppModule { }
```

## Example

#### 1 minute setup

```html
<lib-slot-machine-button [activeOnHover]="true">
  <lib-slot-machine-wheel>
    <div class="idle part">Slot Machine Button</div>
    <div class="active part">Slot Machine Button</div>
  </lib-slot-machine-wheel>
</lib-slot-machine-button>
```

#### A more advanced one

```html
<lib-slot-machine-button [activeOnHover]="true" [bottomToTop]="true" [fadeBack]="true" [fadeBackDuration]="0.3">
  <lib-slot-machine-wheel>
    <div class="idle part">Slot</div>
    <div class="active part">Slot</div>
  </lib-slot-machine-wheel>
  <lib-slot-machine-wheel [delay]="0.1">
    <div class="idle part">Machine</div>
    <div class="active part">Machine</div>
  </lib-slot-machine-wheel>
  <lib-slot-machine-wheel [delay]="0.2">
    <div class="idle part">Button</div>
    <div class="active part">Button</div>
  </lib-slot-machine-wheel>
</lib-slot-machine-button>
```

## Inputs

```TypeScript
// ng-slot-machine-button
@Input() activeOnHover: boolean;
@Input() bottomToTop: boolean;
@Input() delay = 0;
@Input() duration = 0.5;
@Input() ease = Expo.easeInOut;
@Input() fadeDuration: number;
@Input() groupID: number;
@Input() isActive: boolean;
// Fade Back
@Input() fadeBack: boolean;
@Input() fadeBackDuration: number;
@Input() fadeBackEase = Linear.easeNone;
```

```TypeScript
// ng-slot-machine-wheel
@Input() groupID: number;
@Input() delay = 0;
```
