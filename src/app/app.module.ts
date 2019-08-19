import { NgModule } from "@angular/core";
import { MatChipsModule, MatExpansionModule, MatListModule, MatProgressBarModule } from "@angular/material";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { ConfigProviderModule } from "./config-provider/config-provider.module";
import { ParallaxPanelModule } from "./parallax-panel/parallax-panel.module";
import { TimeLineModule } from "./time-line/time-line.module";
import { ToolbarModule } from "./toolbar/toolbar.module";

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,

    TimeLineModule,
    ToolbarModule,
    ParallaxPanelModule,
    ConfigProviderModule,

    MatListModule,
    MatExpansionModule,
    MatChipsModule,
    MatProgressBarModule,
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
