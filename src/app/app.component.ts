import { AfterViewInit, Component, HostBinding, QueryList, ViewChildren } from "@angular/core";

@Component({
  selector: "ntr-root",
  styleUrls: ["./app.component.css"],
  template: `
      <ntr-toolbar></ntr-toolbar>

      <ntr-parallax-panel [height]="150"
                          backgroundImageUrl="https://media.licdn.com/dms/image/C4D16AQEcUtcssV9Tfg/profile-displaybackgroundimage-shrink_350_1400/0?e=1571270400&v=beta&t=kv0laKMOJnXYMP7YnhJWJZZzhrl8FS2ifGyMZZxchF8">
      </ntr-parallax-panel>

      <ntr-time-line></ntr-time-line>
  `,
})
export class AppComponent {

  @HostBinding("class")
  public activeTheme: "dark-theme" | "light-theme" = "dark-theme";

}
