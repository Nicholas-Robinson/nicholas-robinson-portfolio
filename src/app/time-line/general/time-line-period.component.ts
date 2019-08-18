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
              <mat-chip color="accent" selected>{{period}}</mat-chip>
          </mat-chip-list>

          <ng-container *ngIf="logoEndpoint; then linedProfileImage; else profileImage"></ng-container>

          <ng-template #profileImage>
              <img [src]="logoUrl" height="50">
          </ng-template>

          <ng-template #linedProfileImage>
              <a [href]="logoEndpoint" target="_blank">
                  <ng-container *ngTemplateOutlet="profileImage"></ng-container>
              </a>
          </ng-template>

      </div>
      <ng-content></ng-content>
  `,
})
export class TimeLinePeriodComponent {

  @Input() public period: string;
  @Input() public logoUrl: string;
  @Input() public logoEndpoint?: string;

}
