import { Component, Input } from "@angular/core";

@Component({
  selector: "ntr-timeline-section",
  styles: [`
      mat-expansion-panel {
          border-radius: 0;
      }

      mat-panel-title {
          align-items: center;
      }

      mat-chip-list {
          margin: 0 22px
      }

      mat-chip {
          border: 4px solid black;
      }
  `],
  template: `
      <mat-expansion-panel [expanded]="showContent">
          <mat-expansion-panel-header (click)="showContent = !showContent">
              <mat-panel-title>
                  <mat-chip-list>
                      <mat-chip color="primary" selected></mat-chip>
                  </mat-chip-list>
                  {{sectionTitle}}
              </mat-panel-title>
          </mat-expansion-panel-header>

          <ntr-parallax-panel [backgroundImageUrl]="backgroundImage">
              <ng-content></ng-content>
          </ntr-parallax-panel>
      </mat-expansion-panel>
  `,
})
export class TimeLineSectionComponent {

  @Input() public sectionTitle: string;
  @Input() public backgroundImage: string;

  public showContent = true;

}
