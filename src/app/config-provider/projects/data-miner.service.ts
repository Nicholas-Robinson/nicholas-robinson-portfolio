import { Injectable } from "@angular/core";
import { ITimelineCard, ITimelinePeriodConfig } from "../../time-line/i-time-line-config";
import { IPeriodConfigProvider } from "../config-provider";

@Injectable()
export class DataMinerService implements IPeriodConfigProvider {

  public getPeriodConfig(): ITimelinePeriodConfig {
    return {
      period: "2014",
      logo: "",
      endpoint: "",
      cards: [
        this.buildDataMinderCard(),
      ]
    };
  }

  private buildDataMinderCard(): ITimelineCard {
    return {
      title: "Data Miner",
      subTitle: "An application for mining ANPR point data",
      body: "A Civil Engineering Maters student tasked me with creating an application for parsing, transforming and mining " +
        "Automatic Number Plate Recognition (ANPR) point data to identify " +
        "patterns and flow rates for a given time and origin/destination. " +
        "This Java application was used to produce the results used in a master student's thesis; the student graduated in 2018.",
      media: [
        {
          type: "image",
          src: "https://i.imgur.com/k6CEgSL.png",
          alt: "Data Miner image",
          name: "Filtering",
        },
        {
          type: "image",
          src: "https://i.imgur.com/kyfJPWV.png",
          alt: "Data Miner image",
          name: "Period selection",
        },
        {
          type: "image",
          src: "https://i.imgur.com/E9pFqGW.png",
          alt: "Data Miner image",
          name: "Data Miner",
        },
      ],
      links: [
        {
          text: "The Thesis",
          url: "https://repository.up.ac.za/handle/2263/66238",
        },
      ],
    };
  }

}
