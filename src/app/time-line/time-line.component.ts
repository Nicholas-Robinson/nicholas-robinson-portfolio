import { Component, Type } from "@angular/core";
import { GrantaComponent } from "./granta/granta.component";

interface ITimelineSectionConfig {
  title: string;
  backgroundImage: string;
  periods: ITimelinePeriodConfig[];
}

interface ITimelinePeriodConfig {
  period: string;
  logo: string;
  components: Type<any>[];
}

@Component({
  selector: "ntr-time-line",
  styles: [`
      #time-line {
          position: absolute;
          height: 100%;
          width: 4px;
          background: black;
          top: 0;
          left: 60px;
      }
  `],
  template: `
      <div id="time-line"></div>
      <div class="contents">
          <ntr-timeline-section *ngFor="let section of config"
                                [sectionTitle]="section.title"
                                [backgroundImage]="section.backgroundImage">

              <ntr-time-line-period *ngFor="let period of section.periods"
                                    [period]="period.period"
                                    [logoUrl]="period.logo">

                  <ng-container *ngFor="let component of period.components">
                      <ng-container *ngComponentOutlet="component"></ng-container>
                  </ng-container>

              </ntr-time-line-period>

          </ntr-timeline-section>
      </div>`,
})
export class TimeLineComponent {

  public teting = GrantaComponent;

  public config: ITimelineSectionConfig[] = [
    {
      title: "Work",
      backgroundImage: "https://cataas.com/cat",
      periods: [
        {
          period: "2016 - present",
          logo: "https://grantadesign.com/wp-content/themes/grantatheme/img/logo-granta-ansys.png",
          components: [GrantaComponent]
        }
      ],
    }
  ];

}
