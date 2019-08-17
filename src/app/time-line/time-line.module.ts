import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule, MatChipsModule, MatDividerModule, MatExpansionModule, MatIconModule, MatListModule } from "@angular/material";
import { ParallaxPanelModule } from "../parallax-panel/parallax-panel.module";
import { TimeLinePeriodComponent } from "./general/time-line-period.component";
import { TimeLineSectionComponent } from "./general/time-line-section.component";
import { GrantaComponent } from "./granta/granta.component";
import { TimeLineComponent } from "./time-line.component";

const timelineComponents = [
  GrantaComponent,
];

@NgModule({
  imports: [
    MatDividerModule,
    MatListModule,
    MatExpansionModule,
    MatIconModule,
    MatButtonModule,
    CommonModule,
    ParallaxPanelModule,
    MatChipsModule
  ],
  exports: [TimeLineComponent],
  declarations: [
    TimeLineSectionComponent,
    TimeLinePeriodComponent,
    TimeLineComponent,

    timelineComponents
  ],
  entryComponents: [timelineComponents],
})
export class TimeLineModule {}
