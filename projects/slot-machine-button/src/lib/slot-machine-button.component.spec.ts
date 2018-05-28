import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotMachineButtonComponent } from './slot-machine-button.component';

describe('SlotMachineButtonComponent', () => {
  let component: SlotMachineButtonComponent;
  let fixture: ComponentFixture<SlotMachineButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlotMachineButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotMachineButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
