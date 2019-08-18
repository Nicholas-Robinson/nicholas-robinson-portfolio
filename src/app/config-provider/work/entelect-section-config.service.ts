import { Injectable } from "@angular/core";
import { ITimelineCard, ITimelinePeriodConfig } from "../../time-line/i-time-line-config";
import { IPeriodConfigProvider } from "../config-provider";

@Injectable()
export class EntelectSectionConfigService implements IPeriodConfigProvider {

  public getPeriodConfig(): ITimelinePeriodConfig {
    return {
      period: "2015 - 2016",
      logo: "https://lh6.googleusercontent.com/uajsihLsBrJAStgQgRt8XSZ1OL-S_YuaknYbHNSxq8Q09JnKtQ3aJrtdn6k=w2400",
      endpoint: "https://www.entelect.co.za/",
      cards: [
        this.buildEntelectCard(),
      ]
    };
  }

  private buildEntelectCard(): ITimelineCard {
    return {
      title: "Entelect",
      subTitle: "Junior UI Engineer",
      body: "I spent a year as a Junior UI Engineer working on and AngularJS application to guide users through investment information and advice for FNB (a bank in South Africa).",
      media: [
        {
          type: "image",
          src: "https://lh5.googleusercontent.com/aYWwy0aYVD9T7Wg6NNBo3MXo6YHA-uSNrgp3TDoclo_DX0FEmnuKX6gCFPw=w2400",
          alt: "FNB Entelect image",
          name: "FNB and Entelect"
        },
      ],
      links: [
        {
          text: "Entelect",
          url: "https://www.entelect.co.za/",
        },
      ],
    };
  }
}
