import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatDividerModule,
  MatExpansionModule,
  MatIconModule,
  MatListModule,
  MatTabsModule
} from "@angular/material";
import { ParallaxPanelModule } from "../parallax-panel/parallax-panel.module";
import { TimeLineCardComponent } from "./general/time-line-card.component";
import { TimeLinePeriodComponent } from "./general/time-line-period.component";
import { TimeLineSectionComponent } from "./general/time-line-section.component";
import { TimeLineComponent } from "./time-line.component";


@NgModule({
  imports: [
    CommonModule,

    MatDividerModule,
    MatListModule,
    MatExpansionModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    MatCardModule,

    ParallaxPanelModule,
    MatTabsModule,
  ],
  exports: [TimeLineComponent],
  declarations: [
    TimeLineSectionComponent,
    TimeLinePeriodComponent,
    TimeLineCardComponent,
    TimeLineComponent,
  ],
})
export class TimeLineModule {}
