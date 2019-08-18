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
      body: "An application for parsing, transforming and mining Automatic Number Plate Recognition (ANPR) point data to identify patterns and flow rates for a given time and origin/destination. This software was used in a master's thesis in Civil Engineering. The student graduated in 2018.",
      media: [
        {
          type: "image",
          src: "https://lh5.googleusercontent.com/hdxRN8H6FDVRoManISsCDmDsAVWPg1yNLVfenQ57X544WMcHoiNqJPKRz7A=w2400",
          alt: "Data Miner image",
          name: "Data Miner",
        },
      ],
      links: [
        {
          text: "The Maters Thesis",
          url: "https://repository.up.ac.za/handle/2263/66238",
        },
      ],
    };
  }

}
