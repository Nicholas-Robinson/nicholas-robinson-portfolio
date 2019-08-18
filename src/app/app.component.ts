import { Component, HostBinding } from "@angular/core";
import { ConfigProviderService } from "./config-provider/config-provider.service";
import { ITimelineSectionConfig } from "./time-line/i-time-line-config";
import { IToolbarConfig } from "./toolbar/i-toolbar-config";

@Component({
  selector: "ntr-root",
  styleUrls: ["./app.component.css"],
  template: `
      <ntr-toolbar [config]="toolbarConfig"></ntr-toolbar>

      <ntr-parallax-panel [height]="350"
                          [backgroundImageUrl]="aboutMeBackgroundImage">
      </ntr-parallax-panel>

      <ntr-time-line [config]="config"></ntr-time-line>
      <div id="something0"></div>
  `,
})
export class AppComponent {

  constructor(
    private readonly configProvider: ConfigProviderService,
  ) {}

  @HostBinding("class")
  public activeTheme: "dark-theme" | "light-theme" = "dark-theme";

  public readonly aboutMeBackgroundImage = "https://lh5.googleusercontent.com/fLIgqIaylOZZBKjwsxjeC4lAPSpJ1cQR5SAYaiZNKJZsbpHgO-UPi-Nu3R0=w2400";
  // public readonly aboutMeBackgroundImage = "https://media.licdn.com/dms/image/C4D16AQEcUtcssV9Tfg/profile-displaybackgroundimage-shrink_350_1400/0?e=1571270400&v=beta&t=kv0laKMOJnXYMP7YnhJWJZZzhrl8FS2ifGyMZZxchF8";

  public config: ITimelineSectionConfig[] = this.configProvider.buildTimelineConfig();

  // public config: ITimelineSectionConfig[] = [
  //   {
  //     identifier: "Work",
  //     title: "Work",
  //     backgroundImage: "https://cataas.com/cat",
  //     periods: [
  //       {
  //         period: "2016 - present",
  //         logo: "https://lh6.googleusercontent.com/akemJnuhJS1RnODRxP4B327Lbw0SOLb3LgImj19meqSuPVuNo1ktSpDYT4U=w2400",
  //         endpoint: "http://grantadesign.com",
  //         cards: [
  //           {
  //             title: "asd",
  //             subTitle: "Something else ",
  //             body: "Such wow",
  //             media: [
  //               { type: "video", src: "https://www.youtube.com/embed/aGCFkjCt_48", alt: "In action tutorial", name: "In action" }
  //             ],
  //             links: [
  //               { text: "Click me", url: "http://www.google.com" }
  //             ],
  //           },
  //           {
  //             title: "asd",
  //             subTitle: "Something else ",
  //             body: "Such wow",
  //             media: [
  //               { type: "video", src: "https://www.youtube.com/embed/aGCFkjCt_48", alt: "In action tutorial", name: "In action" }
  //             ],
  //             links: [],
  //           },
  //         ]
  //       },
  //       {
  //         period: "2015 - 2016",
  //         logo: "https://lh6.googleusercontent.com/LvecF7tf_YkTe9llYNa-f3x7uGqFHeSICaZsBdj9SMJDpy7M4JcP8kITiyA=w2400",
  //         endpoint: "https://www.entelect.co.za/",
  //         cards: [],
  //       },
  //       {
  //         period: "2014 - 2015",
  //         logo: "https://lh4.googleusercontent.com/tppeCrgL3ee-q7NdUvcjA5PEcJLDh-OrCxO_ADMI-TTwmwLL5-mGsmi90LA=w2400",
  //         endpoint: "http://www.psybergate.com/",
  //         cards: [],
  //       },
  //     ],
  //   },
  //   {
  //     identifier: "Education",
  //     title: "Eduction",
  //     backgroundImage: "https://cataas.com/cat",
  //     periods: [
  //       {
  //         period: "2012-2015",
  //         logo: "https://lh4.googleusercontent.com/3T_VzrhNfo2HoZYewestRwRR99QI9ifvgSI6OKDP8PjoEahPbvR0ehhZus8=w2400",
  //         endpoint: "https://www.up.ac.za/",
  //         cards: [],
  //       }
  //     ],
  //   },
  //   {
  //     identifier: "Projects",
  //     title: "Projects",
  //     backgroundImage: "https://cataas.com/cat",
  //     periods: [
  //       {
  //         period: "2016 - present",
  //         logo: "https://grantadesign.com/wp-content/themes/grantatheme/img/logo-granta-ansys.png",
  //         cards: [],
  //       }
  //     ],
  //   }
  // ];

  public toolbarConfig: IToolbarConfig[] = this.config.map(section => ({
    sectionLabel: section.title,
    sectionIdentifier: section.identifier,
  }));

}
