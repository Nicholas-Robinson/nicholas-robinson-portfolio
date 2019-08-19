import { Injectable } from "@angular/core";
import { ITimelineCard, ITimelinePeriodConfig } from "../../time-line/i-time-line-config";
import { IPeriodConfigProvider } from "../config-provider";

@Injectable()
export class GrantaSectionConfigService implements IPeriodConfigProvider {

  public getPeriodConfig(): ITimelinePeriodConfig {
    return {
      period: "2016 - present",
      logo: "https://i.imgur.com/JcV5HIg.png",
      endpoint: "http://grantadesign.com",
      cards: [
        this.buildGrantaCard(),
        this.buildGatewayCard(),
        this.buildExploreCard(),
        this.buildNngCard(),
      ]
    };
  }

  private buildGrantaCard(): ITimelineCard {
    return {
      title: "GRANTA Design Ltd.",
      subTitle: "UI Engineer",
      body: "For the last 3 years I have worked at Granta Design as a UI Engineer, " +
        "updating and maintaining the Angular based web-platform that is used to create various engineering applications.",
      media: [
        {
          type: "image",
          src: "https://i.imgur.com/i1EydO3.jpg",
          alt: "Material wall image",
          name: "Materials wall"
        },
        {
          type: "image",
          src: "https://i.imgur.com/ieZapKE.png",
          alt: "Building image",
          name: "GRANTA Design"
        },
      ],
      links: [
        {
          text: "GRANTA Design Ltd.",
          url: "https://grantadesign.com",
        },
      ],
    };
  }

  private buildGatewayCard(): ITimelineCard {
    return {
      title: "GRANTA Material Gateway v6.0",
      subTitle: "Full UI/UX re-design of the GRANTA Material Gateway for NX",
      body: "I evolved the UI and improved the UX for version 6.0 of Granta's Material Gateway and helped define the standards " +
        "for the UI vision of all Grata products going forward.",
      media: [
        {
          type: "image",
          src: "https://i.imgur.com/GfgMODJ.png",
          alt: "Final design image",
          name: "Gateway v6.0"
        },
        {
          type: "image",
          src: "https://i.imgur.com/demfGQV.jpg",
          alt: "Side by side image",
          name: "Comparison"
        },
        { type: "video", src: "https://www.youtube.com/embed/aGCFkjCt_48", alt: "In action tutorial", name: "Introduction" },
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
      title: "GRANTA Web-Platform",
      subTitle: "An Angular based web-platform used to build engineering applications",
      body: "I helped to maintain and improve the Granta Angular based web-platform. " +
        "Some notable contributions I have made include: The functional data plotting feature in Mi:Explore, " +
        "updates for the latest version of the Mi:Bom Analyzer " +
        " and upgrading the platform from Angular 1.3 to the latest Angular release.",
      media: [
        {
          type: "image",
          src: "https://i.imgur.com/cldDqG3.jpg",
          alt: "Explore functional graph image",
          name: "Graphing"
        },
        {
          type: "image",
          src: "https://i.imgur.com/9dSsq9A.png",
          alt: "MI:Explore image",
          name: "MI:Explore"
        },
        {
          type: "image",
          src: "https://i.imgur.com/5uZX2R9.jpg",
          alt: "Data-sheets image",
          name: "Data Sheets"
        },
      ],
      links: [
        {
          text: "GRANTA Mi product page",
          url: "https://grantadesign.com/industry/products/granta-mi/"
        },
      ],
    };
  }

  private buildNngCard(): ITimelineCard {
    return {
      title: "Nielsen Norman Group",
      subTitle: "Attended the NNg UX Conference",
      body: "Granta presented me with the opportunity to improve my UX skills though the Nielsen Norman Group UX Conference.",
      media: [
        {
          type: "image",
          src: "https://i.imgur.com/cjhnPse.png",
          alt: "NNg image",
          name: "NNg UX Conference"
        },
      ],
      links: [
        {
          text: "NNg",
          url: "https://www.nngroup.com/"
        },
        {
          text: "UX Conference",
          url: "https://www.nngroup.com/ux-conference/"
        },
      ],
    };
  }

}
