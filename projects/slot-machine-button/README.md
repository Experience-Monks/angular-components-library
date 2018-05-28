# Angular Slot Machine Button Component Module

![Slot Machine Buttons Demo](/projects/slot-machine-button/demo.gif)

## See Also

* [Other component libraries](https://github.com/Jam3/angular-components-library#angular-components-library)
* [React slot machine button](https://github.com/Jam3/slot-machine-button)

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
