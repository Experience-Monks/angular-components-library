import { NgModule } from '@angular/core';

import { SlotMachineButtonComponent } from './slot-machine-button.component';
import { SlotMachineWheelComponent } from './slot-machine-wheel.component';

@NgModule({
  imports: [
  ],
  declarations: [SlotMachineButtonComponent, SlotMachineWheelComponent],
  exports: [SlotMachineButtonComponent, SlotMachineWheelComponent]
})
export class SlotMachineButtonModule { }
