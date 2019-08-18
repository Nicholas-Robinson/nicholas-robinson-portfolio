import { Type } from "@angular/core";

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
  components: Type<any>[];
}
