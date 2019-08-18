import { Injectable } from "@angular/core";
import { ITimelineCard, ITimelinePeriodConfig } from "../../time-line/i-time-line-config";
import { IPeriodConfigProvider } from "../config-provider";

@Injectable()
export class GrantaSectionConfigService implements IPeriodConfigProvider {

  public getPeriodConfig(): ITimelinePeriodConfig {
    return {
      period: "2016 - present",
      logo: "https://lh6.googleusercontent.com/akemJnuhJS1RnODRxP4B327Lbw0SOLb3LgImj19meqSuPVuNo1ktSpDYT4U=w2400",
      endpoint: "http://grantadesign.com",
      cards: [
        this.buildGatewayCard(),
        this.buildExploreCard(),
      ]
    };
  }

  private buildGatewayCard(): ITimelineCard {
    return {
      title: "GRANTA Material Gateway v6.0",
      subTitle: "Full UI re-design of Granta's Material Gateway for NX",
      body: "I evolved the UI and improved the UX for version 6 of Granta's materials gateway and helped define the UI standards for the vision of all Grata products going forward.",
      media: [
        {
          type: "image",
          src: "https://lh3.googleusercontent.com/Urf-cY_wcBSgSQ35nSaQxDiFMAkeZdxXDxRnrOH_nLCqUzrytp8cDUtkMOQ=w2400",
          alt: "Final design image",
          name: "Final product"
        },
        {
          type: "image",
          src: "https://lh5.googleusercontent.com/e8yn5dKd6bJw0n6v3YNDLhYOEoLxY2Mzigp3QpnYpfaCJMZJ_OMqfRsU7Nw=w2400",
          alt: "Side by side image",
          name: "Side by Side"
        },
        { type: "video", src: "https://www.youtube.com/embed/aGCFkjCt_48", alt: "In action tutorial", name: "In action" },
      ],
      links: [
        {
          text: "Gateway product page",
          url: "https://grantadesign.com/industry/products/granta-mi/product-engineering/granta-miproduct-engineering/material-intelligence-in-siemens-plm-software/"
        },
        {
          text: "Introduction presentation",
          url: "https://drive.google.com/open?id=1kAXrvcXJ61ycPfLClFaZt609A_pahxls",
        }
      ],
    };
  }

  private buildExploreCard(): ITimelineCard {
    return {
      title: "asd",
      subTitle: "Something else ",
      body: "Such wow",
      media: [
        { type: "video", src: "https://www.youtube.com/embed/aGCFkjCt_48", alt: "In action tutorial", name: "In action" }
      ],
      links: [],
    };
  }

}
