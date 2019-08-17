import { Component, Input } from "@angular/core";

@Component({
  selector: "ntr-time-line-period",
  styles: [`
      #period-header {
          display: flex;
          flex: 1 1 0;
          padding: 24px;
          align-items: center;
      }

      mat-chip-list {
          margin-right: 12px;
      }

      mat-chip {
          border: 4px solid black;
      }
  `],
  template: `
      <div id="period-header">
          <mat-chip-list>
              <mat-chip color="primary" selected>{{period}}</mat-chip>
          </mat-chip-list>
          <img [src]="logoUrl" height="50">
      </div>
      <ng-content></ng-content>
  `,
})
export class TimeLinePeriodComponent {

  @Input() public period: string;
  @Input() public logoUrl: string;

}
