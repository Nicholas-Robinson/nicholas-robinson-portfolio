import { Component, Input } from "@angular/core";

@Component({
  selector: "ntr-time-line-period",
  styles: [`
      #period-header {
          display: flex;
          flex: 1 1 0;
          padding: 24px 30px;
          align-items: center;
      }

      #period-content {
          margin-left: 165px;
          margin-bottom: 32px;
          display: flex;
          flex-wrap: wrap;
      }

      mat-chip-list {
          width: 150px;
      }

      mat-chip {
          border: 4px solid black;
      }

      @media only screen and (max-width: 800px) {
          #period-header {
              flex-direction: column;
              align-items: flex-start;
          }

          #period-header a {
              margin-top: 6px;
              z-index: 30;
          }

          #period-content {
              margin-left: 100px;
          }
      }

      @media only screen and (max-width: 600px) {
          #period-content {
              margin-left: 80px;
          }
      }

      @media only screen and (max-width: 480px) {
          #period-content {
              margin-left: 0px;
          }
      }
  `],
  template: `
      <div id="period-header">
          <mat-chip-list>
              <mat-chip color="accent" selected>{{period}}</mat-chip>
          </mat-chip-list>

          <ng-container *ngIf="logoEndpoint; then linedProfileImage; else profileImage"></ng-container>

          <ng-template #profileImage>
              <img *ngIf="logoUrl" [src]="logoUrl" height="50">
          </ng-template>

          <ng-template #linedProfileImage>
              <a [href]="logoEndpoint" target="_blank">
                  <ng-container *ngTemplateOutlet="profileImage"></ng-container>
              </a>
          </ng-template>

      </div>
      <div id="period-content">
          <ng-content></ng-content>
      </div>
  `,
})
export class TimeLinePeriodComponent {

  @Input() public period: string;
  @Input() public logoUrl: string;
  @Input() public logoEndpoint?: string;

}
