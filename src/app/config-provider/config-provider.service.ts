import { Inject, Injectable } from "@angular/core";
import { ITimelineSectionConfig } from "../time-line/i-time-line-config";
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
