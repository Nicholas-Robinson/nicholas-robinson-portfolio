import { Injectable } from "@angular/core";
import { ITimelineCard, ITimelinePeriodConfig } from "../../time-line/i-time-line-config";
import { IPeriodConfigProvider } from "../config-provider";

@Injectable()
export class PortfolioSiteService implements IPeriodConfigProvider {

  public getPeriodConfig(): ITimelinePeriodConfig {
    return {
      period: "2019",
      logo: "",
      endpoint: "",
      cards: [
        this.buildProtfolioCard(),
      ]
    };
  }

  private buildProtfolioCard(): ITimelineCard {
    return {
      title: "This Website",
      subTitle: "An Angular single-page-application with material components",
      body: "I used this portfolio as an opportunity to learn and sharpen my skills. " +
        "In stead of creating a template-website I decided to take a " +
        "deep dive into the Angular Material component library and build this portfolio over a weekend.",
      media: [
        {
          type: "image",
          src: "https://i.imgur.com/4WRobyx.png",
          alt: "Portfolio inception",
          name: "Portfolio",
        },
      ],
      links: [
        {
          text: "Github",
          url: "https://github.com/Nicholas-Robinson/nicholas-robinson-portfolio",
        },
        {
          text: "You are here",
          url: "https://nicholas-robinson.firebaseapp.com",
        },
      ],
    };
  }

}
