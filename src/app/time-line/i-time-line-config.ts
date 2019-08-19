export interface ITimelineSectionConfig {
  identifier: string;
  title: string;
  backgroundImage: string;
  periods: ITimelinePeriodConfig[];
}

export interface ITimelinePeriodConfig {
  period: string;
  logo: string;
  endpoint?: string;
  cards: ITimelineCard[];
}

export interface ITimelineCard {
  title: string;
  subTitle: string;
  iconImg?: string;

  body: string;

  media: ITimeLineCardMedia[];
  links: ITimeLineCarLink[];
}

export interface ITimeLineCardMedia {
  type: "video" | "image";
  name: string;
  src: string;
  alt: string;
}

export interface ITimeLineCarLink {
  text: string;
  url: string;
}
