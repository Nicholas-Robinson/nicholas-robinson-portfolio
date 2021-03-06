import { InjectionToken, NgModule, Type } from "@angular/core";
import { createProvider, IPeriodConfigProvider, SectionConfigProvider, TIME_LINE_SECTION_PROVIDER_TOKEN } from "../config-provider";
import { DataMinerService } from "./data-miner.service";
import { GoogleService } from "./google.service";
import { PortfolioSiteService } from "./portfolio-site.service";

const projectsPeriodProviders: Type<IPeriodConfigProvider>[] = [
  PortfolioSiteService,
  GoogleService,
  DataMinerService,
];

const periodProviders = new InjectionToken("");
const toPeriodProvider = createProvider.bind(undefined, periodProviders);

@NgModule({
  providers: [
    projectsPeriodProviders.map(toPeriodProvider),
    {
      provide: TIME_LINE_SECTION_PROVIDER_TOKEN,
      useFactory: items => new SectionConfigProvider(
        "Projects",
        "Projects",
        "https://i.imgur.com/0JOWqNE.jpg",
        items,
      ),
      deps: [periodProviders],
      multi: true,
    },
  ]
})
export class ProjectsSectionModule {}
