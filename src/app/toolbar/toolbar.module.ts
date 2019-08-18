import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ToolbarComponent } from "./toolbar.component";
import {
  MatButtonModule,
  MatChipsModule,
  MatExpansionModule,
  MatIconModule,
  MatListModule,
  MatTabsModule,
  MatToolbarModule
} from "@angular/material";

@NgModule({
  declarations: [
    ToolbarComponent,
  ],
  exports: [
    ToolbarComponent,
  ],
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatTabsModule,
    CommonModule,
    MatExpansionModule,
    MatChipsModule
  ]
})
export class ToolbarModule {}
