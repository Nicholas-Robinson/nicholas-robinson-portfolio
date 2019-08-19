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
      body: "For the last 3 years I have worked at Granta Design as a UI Engineer, updating and maintaining an Angular based web-platform that is used to create various applications for engineers",
      media: [
        {
          type: "image",
          src: "https://lh5.googleusercontent.com/iX6SXWiGy4Vn9Tt9x9A-RctzlxEaFvhAlu72guqsBxiBW7J3W2akgpAimuc=w2400",
          alt: "Material wall image",
          name: "Materials wall"
        },
        {
          type: "image",
          src: "https://lh3.googleusercontent.com/iRsibVEphg-XoYzvGw0TkPnAlCGQnE1OFHLTEZ_ufuoy1BYvMx71YGIgQZw=w2400",
          alt: "Building image",
          name: "Building"
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
      title: "GRANTA Web-Platform",
      subTitle: "An Angular web-platform used to build multiple applications",
      body: "I helped to maintain and improve the Granta Angular web-platform. Notable contributions I have made include: The functional data plotting feature, the latest version of the Mi:Bom Analyzer application and upgrading the platform from Angular 1 to the latest Angular release.",
      media: [
        {
          type: "image",
          src: "https://lh6.googleusercontent.com/GsltLNXfliZPs5sJ66kthF2XW2_Fjgyxqh0d4psk9n3zX-ZzTW_S1S_qNew=w2400",
          alt: "Explore functional graph image",
          name: "Graphing"
        },
        {
          type: "image",
          src: "https://lh6.googleusercontent.com/aYmQs-cP-CWYUgwp8TvVncGcPx4rZxgLRaNOquLqSGWLZbqkuI8OQniUP7U=w2400",
          alt: "MI:Explore image",
          name: "MI:Explore"
        },
        {
          type: "image",
          src: "https://lh4.googleusercontent.com/ORazA9T-ctIuBvILs_fLAcPO5X99akxXZDRx8hX7f1VQsDAfp8P50mSlyjs=w2400",
          alt: "Data-sheets image",
          name: "Data-sheets"
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
          src: "https://lh4.googleusercontent.com/y-3u_PHa4KXFiOOJn3_SNSKKIMeAfSwbTmRuvqKDtjPzdDG1wRIJaBlxu7c=w2400",
          // src: "https://lh6.googleusercontent.com/QMH3gGYaprWratovg3saXiv_mKKIvU-jRxZ7DnXyS6Zl_Fmpq6PI5aAR8EY=w2400",
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
