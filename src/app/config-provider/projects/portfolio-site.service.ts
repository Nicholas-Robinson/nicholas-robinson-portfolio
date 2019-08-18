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
        this.buildChromeExtension(),
      ]
    };
  }

  private buildChromeExtension(): ITimelineCard {
    return {
      title: "This website",
      subTitle: "Angular single page application with Material components",
      body: "I used this portfolio as an excuse to grow and learn. In stead of creating a template-website I decided to take a deep dive into the Angular Material component library and build this website over a weekend.",
      media: [
        {
          type: "image",
          src: "https://lh4.googleusercontent.com/w8K3nMRhtCfGr41y0uigWBm1k4-3PzFPiC_-TofA7I1OTD8nNBhIuHrWeWY=w2400",
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
