import { InjectionToken, NgModule, Type } from "@angular/core";
import { createProvider, IPeriodConfigProvider, SectionConfigProvider, TIME_LINE_SECTION_PROVIDER_TOKEN } from "../config-provider";
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
        "https://i.imgur.com/WdqpIwA.jpg",
        items,
      ),
      deps: [periodProviders],
      multi: true,
    },
  ]
})
export class WorkSectionModule {}
