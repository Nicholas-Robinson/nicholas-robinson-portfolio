import { Inject, Injectable, InjectionToken } from "@angular/core";
import { ITimelinePeriodConfig, ITimelineSectionConfig } from "../time-line/i-time-line-config";
import { ISectionConfigProvider, TIME_LINE_SECTION_PROVIDER_TOKEN } from "./config-provider";

@Injectable()
export class ConfigProviderService {

  constructor(
    @Inject(TIME_LINE_SECTION_PROVIDER_TOKEN) private readonly providers: ISectionConfigProvider[],
  ) {}

  public buildTimelineConfig(): ITimelineSectionConfig[] {
    return this.providers.map(provider => provider.getSectionConfig());
  }

}
