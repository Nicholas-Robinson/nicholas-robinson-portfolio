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
      body: "The objective of this project was to learn how about the Google Chrome extension API and simplify the booking experience. " +
        "The extension automates the booking process for a film ticket though the light cinema website.",
      media: [
        {
          type: "image",
          src: "https://i.imgur.com/PbsQmtj.png",
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
      subTitle: "Using Arduino to control LED strip with Google Assistant API",
      body: "I used an Arduino nano and the Google Assistant API to control an LED strip. " +
        "This was a personal project to explore the Assistant API and attempt to create a smart light.",
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
          name: "Light!",
        },
        {
          type: "video",
          src: "https://www.youtube.com/embed/3a3fE9pw-lw",
          alt: "",
          name: "LED - 101",
        },
      ],
      links: [],
    };
  }

}
