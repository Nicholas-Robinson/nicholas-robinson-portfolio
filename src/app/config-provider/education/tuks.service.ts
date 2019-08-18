import { Injectable } from "@angular/core";
import { ITimelineCard, ITimelinePeriodConfig } from "../../time-line/i-time-line-config";
import { IPeriodConfigProvider } from "../config-provider";

@Injectable()
export class TuksService implements IPeriodConfigProvider {

  public getPeriodConfig(): ITimelinePeriodConfig {
    return {
      period: "2012 - 2015",
      logo: "https://lh5.googleusercontent.com/mGAM7qBvtq0M0DX3XJ8FIjHbqh6hGlLO1VwtuFDYyo7oOFwwu4ISmKDxosY=w2400",
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
      body: "Equivalent to a Computer Science degree, the degree covered subjects like data-structures and algorithms, UI and UX design and testing, concurrent programming and programming languages (to name a few)",
      media: [
        {
          type: "image",
          src: "https://lh6.googleusercontent.com/gmqEqVZ8znf8iQxOzDH3q7pJdAWt4P4_ME3Z3h-fHHuWRoFsPCI1rqNH0e0=w2400",
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
