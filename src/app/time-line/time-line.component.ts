import { Component, Input } from "@angular/core";
import { ITimelineSectionConfig } from "./i-time-line-config";

@Component({
  selector: "ntr-time-line",
  styles: [`
      #time-line {
          position: fixed;
          background: black;
          height: 100%;
          width: 4px;
          left: 60px;
          top: 0;
      }
  `],
  template: `
      <div id="time-line"></div>
      <div class="contents">
          <ntr-timeline-section [id]="section.identifier"
                                *ngFor="let section of config"
                                [sectionTitle]="section.title"
                                [backgroundImage]="section.backgroundImage">

              <ntr-time-line-period *ngFor="let period of section.periods"
                                    [period]="period.period"
                                    [logoUrl]="period.logo"
                                    [logoEndpoint]="period.endpoint">

                  <ng-container *ngFor="let card of period.cards">
                      <ntr-time-line-card [card]="card"></ntr-time-line-card>
                  </ng-container>

              </ntr-time-line-period>

          </ntr-timeline-section>
      </div>`,
})
export class TimeLineComponent {

  @Input()
  public config: ITimelineSectionConfig[];

}
