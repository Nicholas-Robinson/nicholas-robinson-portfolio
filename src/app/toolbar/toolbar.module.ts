import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ToolbarComponent } from "./toolbar.component";
import { MatButtonModule, MatIconModule, MatListModule, MatTabsModule, MatToolbarModule } from "@angular/material";

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
    CommonModule
  ]
})
export class ToolbarModule {}
