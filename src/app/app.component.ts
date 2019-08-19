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

      <ntr-parallax-panel [backgroundImageUrl]="aboutMeBackgroundImage">
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
                      different cultures. I also enjoy working with micro-controllers like Adriano.</p>
              </div>
          </div>
      </ntr-parallax-panel>

      <ntr-time-line [config]="config"></ntr-time-line>

      <div id="contact">
          <a *ngFor="let info of contactInfo" target="_blank" [href]="info.link" mat-button>
              <mat-chip-list>
                  <mat-chip color="primary" selected><i [class]="info.icon"></i></mat-chip>
              </mat-chip-list>
              <span>{{ info.value }}</span>
          </a>
      </div>
  `,
})
export class AppComponent {

  constructor(
    private readonly configProvider: ConfigProviderService,
  ) {}

  @HostBinding("class")
  public activeTheme: "dark-theme" | "light-theme" = "dark-theme";

  public readonly aboutMeBackgroundImage = "https://i.imgur.com/GHkWfd6.jpg";

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
    { icon: "fas fa-phone", value: "(+44) 07925 166802", link: "tel:+447925166802" },
    { icon: "fas fa-file-alt", value: "Resume", link: "https://drive.google.com/open?id=1QiSZY36Oqs_lYWjMiWxaIvCht_TAr5rG" },
    { icon: "fas fa-file-invoice", value: "Curriculum vitae", link: "https://drive.google.com/open?id=1oHIUmwkrqXluM91nC1NKMiHyEVq0WLDJ" },
  ];

  public toolbarConfig: IToolbarConfig[] = [
    ...this.config.map(section => ({
      sectionLabel: section.title,
      sectionIdentifier: section.identifier,
    })),
    { sectionLabel: "Contact", sectionIdentifier: "contact" },
  ];

}
