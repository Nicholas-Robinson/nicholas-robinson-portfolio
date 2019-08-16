import { Component, HostBinding } from "@angular/core";

@Component({
  selector: "ntr-root",
  styleUrls: ["./app.component.css"],
  template: `
      <ntr-toolbar></ntr-toolbar>
      <div class="contents">
          <div id="something0" style="background: yellow; height: 300px"></div>
          <div id="something1" style="background: green; height: 300px"></div>
          <div id="something2" style="background: yellow; height: 300px"></div>
          <div id="something3" style="background: green; height: 300px"></div>
      </div>
  `,
})
export class AppComponent {

  @HostBinding("class")
  public activeTheme: "dark-theme" | "light-theme" = "dark-theme";

  title = "nicholas-robinson-portfolio";
}
