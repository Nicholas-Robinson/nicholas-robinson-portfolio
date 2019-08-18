import { InjectionToken, NgModule, Type } from "@angular/core";
import {
  createProvider,
  IPeriodConfigProvider, SectionConfigProvider,
  TIME_LINE_PERIOD_PROVIDER_TOKEN,
  TIME_LINE_SECTION_IDENTIFIER_TOKEN,
  TIME_LINE_SECTION_IMAGE_TOKEN, TIME_LINE_SECTION_PROVIDER_TOKEN,
  TIME_LINE_SECTION_TITLE_TOKEN
} from "../config-provider";
import { EntelectSectionConfigService } from "./entelect-section-config.service";
import { GrantaSectionConfigService } from "./granta-section-config.service";
import { PsybergateSectionConfigService } from "./psybergate-section-config.service";

const workPeriodProviders: Type<IPeriodConfigProvider>[] = [
  GrantaSectionConfigService,
  EntelectSectionConfigService,
  PsybergateSectionConfigService,
];

const periodProviders = new InjectionToken("");
const toPeriodProvider = createProvider.bind(undefined, periodProviders);

@NgModule({
  providers: [
    workPeriodProviders.map(toPeriodProvider),
    {
      provide: TIME_LINE_SECTION_PROVIDER_TOKEN,
      useFactory: items => new SectionConfigProvider(
        "Work",
        "Work",
        "https://lh3.googleusercontent.com/tvcsRR85MUZqhQlck3ua1xl2PR25w_CuBTt6Pa2eOk4FnMw68s-3jyBeRGQ=w2400",
        items,
      ),
      deps: [periodProviders],
      multi: true,
    },
  ]
})
export class WorkSectionModule {}
