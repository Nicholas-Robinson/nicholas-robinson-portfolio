import { Component, HostBinding } from "@angular/core";
import { ConfigProviderService } from "./config-provider/config-provider.service";
import { ITimelineSectionConfig } from "./time-line/i-time-line-config";
import { IToolbarConfig } from "./toolbar/i-toolbar-config";
import { ISocialLink } from "./toolbar/toolbar.component";

@Component({
  selector: "ntr-root",
  styleUrls: ["./app.component.css"],
  template: `
      <ntr-toolbar [config]="toolbarConfig" [socialLinks]="socialLinks"></ntr-toolbar>

      <ntr-parallax-panel [height]="350"
                          [backgroundImageUrl]="aboutMeBackgroundImage">
          <div class="profile-container">
              <div>
                  <div class="language-skill" *ngFor="let skill of languageSkills">
                      <mat-chip-list>
                          <mat-chip color="accent" selected>{{ skill.name }}</mat-chip>
                      </mat-chip-list>
                      <mat-progress-bar color="primary" mode="determinate" [value]="skill.value"></mat-progress-bar>
                  </div>
              </div>
              <div id="about">
                  <p> I am an enthusiastic career driven young man, eager to broaden and strengthen my software engineering knowledge and
                      skills. I thrive on solving problems by applying abstract, analytical and logical thinking. I enjoy honing my skills
                      by doing coding katas, not dissimilar to the Foobar problems I have been doing.</p>
                  <p>When I am not working, I am a light aircraft pilot and I enjoy traveling, meeting new people and learning about
                      different cultures. I also enjoy working with microcontrollers like Adriano.</p>
              </div>
          </div>
      </ntr-parallax-panel>

      <ntr-time-line [config]="config"></ntr-time-line>

      <div id="contact">
          <div *ngFor="let info of contactInfo">
              <mat-chip-list>
                  <mat-chip color="primary" selected><i [class]="info.icon"></i></mat-chip>
              </mat-chip-list>
              <a target="_blank" [href]="info.link" mat-button>{{ info.value }}</a>
          </div>
      </div>
  `,
})
export class AppComponent {

  constructor(
    private readonly configProvider: ConfigProviderService,
  ) {}

  @HostBinding("class")
  public activeTheme: "dark-theme" | "light-theme" = "dark-theme";

  // public readonly aboutMeBackgroundImage = "https://lh5.googleusercontent.com/fLIgqIaylOZZBKjwsxjeC4lAPSpJ1cQR5SAYaiZNKJZsbpHgO-UPi-Nu3R0=w2400";
  public readonly aboutMeBackgroundImage = "https://media.licdn.com/dms/image/C4D16AQEcUtcssV9Tfg/profile-displaybackgroundimage-shrink_350_1400/0?e=1571270400&v=beta&t=kv0laKMOJnXYMP7YnhJWJZZzhrl8FS2ifGyMZZxchF8";

  public config: ITimelineSectionConfig[] = this.configProvider.buildTimelineConfig();

  public socialLinks: ISocialLink[] = [
    { title: "Linkedin", url: "https://www.linkedin.com/in/nicholas-robinson-00821a102/", icons: "fab fa-linkedin" },
    { title: "Instagram", url: "https://www.instagram.com/adventures_of_ntrpilot/", icons: "fab fa-instagram" },
    { title: "Facebook", url: "https://www.facebook.com/nicholas.robinson.796", icons: "fab fa-facebook" },
  ];

  public languageSkills: { name: string; value: number }[] = [
    { name: "TypeScript", value: 95 },
    { name: "Angular", value: 80 },
    { name: "HTML", value: 85 },
    { name: "CSS", value: 75 },
    { name: "JavaScript", value: 90 },
    { name: "Java", value: 55 },
    { name: "Go", value: 20 },
  ];

  public contactInfo: { icon: string, value: string, link: string }[] = [
    { icon: "fas fa-envelope", value: "ntrpilot@gmail.com", link: "mailto:ntrpilot@gmail.com" },
    { icon: "fas fa-phone", value: "+44 (0) 7592166802", link: "tel:07925166802" },
  ];

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

  public toolbarConfig: IToolbarConfig[] = [
    ...this.config.map(section => ({
      sectionLabel: section.title,
      sectionIdentifier: section.identifier,
    })),
    { sectionLabel: "Contact", sectionIdentifier: "contact" },
  ];

}
