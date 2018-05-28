import { Component, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'lib-slot-machine-wheel',
  template: '<ng-content></ng-content>',
  styles: [':host { display: inline-block; height: 200%; }']
})
export class SlotMachineWheelComponent {
  @Input() groupID: number;
  @Input() delay = 0;

  constructor(public element: ElementRef) {}
}
