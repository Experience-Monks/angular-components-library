import { Component, AfterContentInit, Input, ContentChildren, HostListener, QueryList, ElementRef } from '@angular/core';
import { TimelineLite, Expo, Linear } from 'gsap';

import { SlotMachineWheelComponent } from './slot-machine-wheel.component';

@Component({
  selector: 'lib-slot-machine-button',
  template: '<ng-content></ng-content>',
  styles: [':host { overflow: hidden; }']
})
export class SlotMachineButtonComponent implements AfterContentInit {
  @Input() activeOnHover: boolean;
  @Input() bottomToTop: boolean;
  @Input() delay = 0;
  @Input() duration = 0.5;
  @Input() ease = Expo.easeInOut;
  @Input() fadeDuration: number;
  @Input() groupID: number;
  @Input()
  set isActive(active: boolean) {
    this.active = active;
    if (this.ready) {
      if (active) {
        this.animateActive();
      } else {
        this.animateIdle();
      }
    }
  }
  get isActive(): boolean {
    return this.active;
  }

  // Fade Back
  @Input() fadeBack: boolean;
  @Input() fadeBackDuration: number;
  @Input() fadeBackEase = Linear.easeNone;

  @ContentChildren(SlotMachineWheelComponent) wheels: QueryList<SlotMachineWheelComponent>;

  private ready = false;
  private active: boolean;
  private idleY: string;
  private activeY: string;
  private masterTimeline: TimelineLite;
  private didPause = false;

  @HostListener('mouseenter')
  onmouseenter() {
    if (this.activeOnHover) {
      this.animateActive();
    }
  }

  @HostListener('mouseleave')
  onmouseleave() {
    if (this.activeOnHover && !this.active) {
      this.animateIdle();
    }
  }

  constructor() {}

  ngAfterContentInit() {
    this.idleY = this.bottomToTop ? '0%' : '-50%';
    this.activeY = this.bottomToTop ? '-50%' : '0%';
    this.masterTimeline = new TimelineLite({ paused: true });

    this.wheels.filter(wheel => (this.groupID ? this.groupID === wheel.groupID : true)).forEach(wheel => {
      const container: HTMLElement = wheel.element.nativeElement;
      const parts = container.children;
      if (parts.length !== 2) {
        throw new Error('Each wheel should have exact 2 direct children as the idle and active parts');
      }
      const fadeDuration = this.fadeDuration || this.duration;
      if (this.duration <= 0) {
        throw new Error('Duration must be greater than 0');
      }

      const timeline = new TimelineLite();
      const ease = this.ease;
      timeline.fromTo(container, this.duration, { y: this.idleY }, { y: this.activeY, ease }, 0);

      const fadeBackInDelay = this.duration - fadeDuration;
      const idlePart = parts.item(Number(!this.bottomToTop));
      const activePart = parts.item(Number(this.bottomToTop));
      timeline.fromTo(idlePart, fadeDuration, { autoAlpha: 1 }, { autoAlpha: 0, ease }, 0);
      timeline.fromTo(activePart, fadeDuration, { autoAlpha: 0 }, { autoAlpha: 1, ease }, fadeBackInDelay);

      this.masterTimeline.add(timeline, this.delay + wheel.delay);
    });

    if (this.fadeBack) {
      const duration = this.fadeBackDuration;
      if (duration === undefined) {
        throw new Error('FadeBackDuration must be present if fadeBack is true');
      } else if (isNaN(duration) || duration <= 0) {
        throw new Error('FadeDuration must be greater than 0');
      }
      this.masterTimeline.addPause('+=0', () => (this.didPause = true));
      this.masterTimeline.eventCallback('onStart', () => (this.didPause = false));
      this.masterTimeline.eventCallback('onComplete', () => (this.didPause = false));
      const position = this.bottomToTop ? 'bottom' : 'top';
      const ease = this.fadeBackEase;
      const idleParts = this.wheels
        .filter(wheel => (this.groupID ? this.groupID === wheel.groupID : true))
        .map(wheel => wheel.element.nativeElement.children.item(Number(!this.bottomToTop)));
      this.masterTimeline.to(idleParts, duration, { position: 'absolute', [position]: 0, autoAlpha: 1, ease });
    }

    if (this.active) {
      this.animateActive();
    }

    this.ready = true;
  }

  animateActive() {
    if (this.ready) {
      if (this.fadeBack) {
        this.masterTimeline.restart();
      } else {
        this.masterTimeline.play();
      }
    } else {
      console.warn('Timeline is not ready, should wait for AfterContentInit');
    }
  }

  animateIdle() {
    if (this.ready) {
      if (this.fadeBack && this.didPause) {
        this.masterTimeline.resume();
      } else {
        this.masterTimeline.reverse();
      }
    } else {
      console.warn('Timeline is not ready, should wait for AfterContentInit');
    }
  }
}
