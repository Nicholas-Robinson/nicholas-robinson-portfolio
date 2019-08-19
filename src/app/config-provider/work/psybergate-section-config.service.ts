import { Injectable } from "@angular/core";
import { ITimelineCard, ITimelinePeriodConfig } from "../../time-line/i-time-line-config";
import { IPeriodConfigProvider } from "../config-provider";

@Injectable()
export class PsybergateSectionConfigService implements IPeriodConfigProvider {

  public getPeriodConfig(): ITimelinePeriodConfig {
    return {
      period: "2014 - 2015",
      logo: "https://i.imgur.com/UTyFVPZ.jpg",
      endpoint: "http://www.psybergate.com/",
      cards: [
        this.buildPsybergateCard(),
      ]
    };
  }

  private buildPsybergateCard(): ITimelineCard {
    return {
      title: "Psybergate",
      subTitle: "Graduate Java Engineer",
      body: "I was an intern in the 6 month Psybergate graduate program, that covered the Java programming language. " +
        "During this programme we covered everything from the Java object model to JEE and Enterprise server applications.",
      media: [
        {
          type: "image",
          src: "https://i.imgur.com/plJzNHc.jpg",
          alt: "Graduate programme image",
          name: "Graduate programme"
        },
      ],
      links: [
        {
          text: "Psybergate",
          url: "http://www.psybergate.com/",
        },
        {
          text: "Graduate programme",
          url: "http://www.psybergate.com/graduate-programme/",
        },
      ],
    };
  }
}
