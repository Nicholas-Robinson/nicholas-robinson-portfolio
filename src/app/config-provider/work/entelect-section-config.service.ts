import { Injectable } from "@angular/core";
import { ITimelineCard, ITimelinePeriodConfig } from "../../time-line/i-time-line-config";
import { IPeriodConfigProvider } from "../config-provider";

@Injectable()
export class EntelectSectionConfigService implements IPeriodConfigProvider {

  public getPeriodConfig(): ITimelinePeriodConfig {
    return {
      period: "2015 - 2016",
      logo: "https://i.imgur.com/Ci4DzSK.jpg",
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
      body: "As a Junior UI Engineer I created an AngularJS application to guide users through investment " +
        "information and advice for First National Bank (FNB).",
      media: [
        {
          type: "image",
          src: "https://i.imgur.com/5eJ68mQ.jpg",
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
