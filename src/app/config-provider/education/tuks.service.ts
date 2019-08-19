import { Injectable } from "@angular/core";
import { ITimelineCard, ITimelinePeriodConfig } from "../../time-line/i-time-line-config";
import { IPeriodConfigProvider } from "../config-provider";

@Injectable()
export class TuksService implements IPeriodConfigProvider {

  public getPeriodConfig(): ITimelinePeriodConfig {
    return {
      period: "2012 - 2015",
      logo: "https://i.imgur.com/qCIBaTw.png",
      endpoint: "https://www.up.ac.za/",
      cards: [
        this.buildDataMinderCard(),
      ]
    };
  }

  private buildDataMinderCard(): ITimelineCard {
    return {
      title: "University of Pretoria",
      subTitle: "BSc Information Technologies",
      body: "Equivalent to a Computer Science degree, my degree covered subjects like data-structures and algorithms, " +
        "concurrent programming, UI/UX design and testing and programming languages; to list a few.",
      media: [
        {
          type: "image",
          src: "https://i.imgur.com/Z0vIenh.jpg",
          alt: "University of pretoria image",
          name: "University of Pretoria",
        },
      ],
      links: [
        {
          text: "University of Pretoria",
          url: "https://www.up.ac.za/",
        },
        {
          text: "Computer science department",
          url: "https://www.cs.up.ac.za/",
        },
      ],
    };
  }

}
