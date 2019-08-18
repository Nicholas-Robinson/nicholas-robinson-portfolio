import { Component, HostBinding } from "@angular/core";
import { GrantaComponent } from "./time-line/granta/granta.component";
import { ITimelineSectionConfig } from "./time-line/i-time-line-config";
import { IToolbarConfig } from "./toolbar/i-toolbar-config";

@Component({
  selector: "ntr-root",
  styleUrls: ["./app.component.css"],
  template: `
      <ntr-toolbar [config]="toolbarConfig"></ntr-toolbar>

      <ntr-parallax-panel [height]="150"
                          backgroundImageUrl="https://media.licdn.com/dms/image/C4D16AQEcUtcssV9Tfg/profile-displaybackgroundimage-shrink_350_1400/0?e=1571270400&v=beta&t=kv0laKMOJnXYMP7YnhJWJZZzhrl8FS2ifGyMZZxchF8">
      </ntr-parallax-panel>

      <ntr-time-line [config]="config"></ntr-time-line>
      <div id="something0"></div>
  `,
})
export class AppComponent {

  @HostBinding("class")
  public activeTheme: "dark-theme" | "light-theme" = "dark-theme";

  public config: ITimelineSectionConfig[] = [
    {
      identifier: "Work",
      title: "Work",
      backgroundImage: "https://cataas.com/cat",
      periods: [
        {
          period: "2016 - present",
          logo: "https://grantadesign.com/wp-content/themes/grantatheme/img/logo-granta-ansys.png",
          endpoint: "http://grantadesign.com",
          components: [GrantaComponent]
        },
        {
          period: "2016 - present",
          logo: "https://grantadesign.com/wp-content/themes/grantatheme/img/logo-granta-ansys.png",
          endpoint: "http://grantadesign.com",
          components: [GrantaComponent]
        },
      ],
    },
    {
      identifier: "Education",
      title: "Eduction",
      backgroundImage: "https://cataas.com/cat",
      periods: [
        {
          period: "2016 - present",
          logo: "https://grantadesign.com/wp-content/themes/grantatheme/img/logo-granta-ansys.png",
          components: [GrantaComponent]
        }
      ],
    },
    {
      identifier: "Work",
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

  public toolbarConfig: IToolbarConfig[] = this.config.map(section => ({
    sectionLabel: section.title,
    sectionIdentifier: section.identifier,
  }));

}
