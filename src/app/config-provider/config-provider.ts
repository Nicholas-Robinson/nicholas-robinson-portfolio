import { Inject, InjectionToken, Provider, Type } from "@angular/core";
import { ITimelinePeriodConfig, ITimelineSectionConfig } from "../time-line/i-time-line-config";

export const TIME_LINE_SECTION_PROVIDER_TOKEN = new InjectionToken<ISectionConfigProvider>("");
export const TIME_LINE_SECTION_IDENTIFIER_TOKEN = new InjectionToken<ISectionConfigProvider>("");
export const TIME_LINE_SECTION_TITLE_TOKEN = new InjectionToken<ISectionConfigProvider>("");
export const TIME_LINE_SECTION_IMAGE_TOKEN = new InjectionToken<ISectionConfigProvider>("");

export const TIME_LINE_PERIOD_PROVIDER_TOKEN = new InjectionToken<IPeriodConfigProvider[]>("");

export function createProvider<T>(token: InjectionToken<T>, provider: Type<T>): Provider[] {
  return [provider, { provide: token, useExisting: provider, multi: true }];
}

export interface IPeriodConfigProvider {
  getPeriodConfig(): ITimelinePeriodConfig;
}

export interface ISectionConfigProvider {
  getSectionConfig(): ITimelineSectionConfig;
}

export class SectionConfigProvider implements ISectionConfigProvider {

  constructor(
    @Inject(TIME_LINE_SECTION_IDENTIFIER_TOKEN) private readonly identifier: string,
    @Inject(TIME_LINE_SECTION_TITLE_TOKEN) private readonly title: string,
    @Inject(TIME_LINE_SECTION_IMAGE_TOKEN) private readonly backgroundImage: string,
    @Inject(TIME_LINE_PERIOD_PROVIDER_TOKEN) private readonly periodProvider: IPeriodConfigProvider[],
  ) {}

  getSectionConfig(): ITimelineSectionConfig {
    return {
      identifier: this.identifier,
      title: this.title,
      backgroundImage: this.backgroundImage,
      periods: this.periodProvider.map(period => period.getPeriodConfig()),
    };
  }

}
