import { Injectable } from "@angular/core";
import { ITimelineCard, ITimelinePeriodConfig } from "../../time-line/i-time-line-config";
import { IPeriodConfigProvider } from "../config-provider";

@Injectable()
export class PsybergateSectionConfigService implements IPeriodConfigProvider {

  public getPeriodConfig(): ITimelinePeriodConfig {
    return {
      period: "2014 - 2015",
      logo: "https://lh4.googleusercontent.com/tppeCrgL3ee-q7NdUvcjA5PEcJLDh-OrCxO_ADMI-TTwmwLL5-mGsmi90LA=w2400",
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
      body: "I took part in a 6 month graduate program at Psybergate that covered the Java programming language. The pragramme covered everything from the Java object model to JEE and Enterprise server applications.",
      media: [
        {
          type: "image",
          src: "https://lh4.googleusercontent.com/8y7d158rexigf83A3L0uqXQtTzD2Ud7Eae_ZFXPlVXZO_m-plBBWefVOGKU=w2400",
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
