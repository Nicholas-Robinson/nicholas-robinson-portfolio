import { Component, HostBinding, Input } from "@angular/core";

@Component({
  selector: "ntr-parallax-panel",
  styles: [`
      :host {
          display: flex;
          flex: 1 1 0px;

          background-attachment: fixed;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
      }
  `],
  template: `
      <ng-content></ng-content>
  `,
})
export class ParallaxPanelComponent {

  @Input()
  @HostBinding("style.height.px")
  height: number;

  @Input()
  public backgroundImageUrl: string;

  @HostBinding("style.background-image")
  public get backgroundStyl(): string {
    return `url(${this.backgroundImageUrl})`;
  }

}
