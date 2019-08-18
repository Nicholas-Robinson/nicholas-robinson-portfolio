import { Injectable } from "@angular/core";
import { ITimelineCard, ITimelinePeriodConfig } from "../../time-line/i-time-line-config";
import { IPeriodConfigProvider } from "../config-provider";

@Injectable()
export class GoogleService implements IPeriodConfigProvider {

  public getPeriodConfig(): ITimelinePeriodConfig {
    return {
      period: "2016 - 2017",
      logo: "",
      endpoint: "",
      cards: [
        this.buildAssistantLight(),
        this.buildChromeExtension(),
      ]
    };
  }

  private buildChromeExtension(): ITimelineCard {
    return {
      title: "Convenience Chrome extension",
      subTitle: "A Google Chrome extension to automate booking a film",
      body: "Created a Google Chrome extention that automated the process of booking a film ticket though the light cinema website. The objective of this project was to learn how about Google Chrome extensions and simplify the booking experience.",
      media: [
        {
          type: "image",
          src: "https://www.cataas.com/cat",
          alt: "Extension image",
          name: "Extension",
        },
      ],
      links: [],
    };
  }

  private buildAssistantLight(): ITimelineCard {
    return {
      title: "Google Assistant integrated LEDs",
      subTitle: "Using Arduino to control LED strip with Google Assistant",
      body: "I used an Arduino nano and the Google Assistant API to control an LED strip. This was a personal project to explore the Assistant API and attempt to create a smart light.",
      media: [
        {
          type: "video",
          src: "https://www.youtube.com/embed/4qHtvCMaE2Y",
          alt: "",
          name: "Integration",
        },
        {
          type: "video",
          src: "https://www.youtube.com/embed/WLqYEvxGe_M",
          alt: "",
          name: "Lights!",
        },
        {
          type: "video",
          src: "https://www.youtube.com/embed/3a3fE9pw-lw",
          alt: "",
          name: "Tutorial",
        },
      ],
      links: [],
    };
  }

}
