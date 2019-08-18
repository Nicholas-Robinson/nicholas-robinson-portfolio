import { NgModule, Type } from "@angular/core";
import {
  createProvider,
  IPeriodConfigProvider, SectionConfigProvider,
  TIME_LINE_PERIOD_PROVIDER_TOKEN,
  TIME_LINE_SECTION_IDENTIFIER_TOKEN,
  TIME_LINE_SECTION_IMAGE_TOKEN, TIME_LINE_SECTION_PROVIDER_TOKEN,
  TIME_LINE_SECTION_TITLE_TOKEN
} from "../config-provider";
import { GrantaSectionConfigService } from "./granta-section-config.service";

const workPeriodProviders: Type<IPeriodConfigProvider>[] = [
  GrantaSectionConfigService,
];

const toPeriodProvider = createProvider.bind(undefined, TIME_LINE_PERIOD_PROVIDER_TOKEN);

@NgModule({
  providers: [
    workPeriodProviders.map(toPeriodProvider),
    { provide: TIME_LINE_SECTION_IDENTIFIER_TOKEN, useValue: "Work" },
    { provide: TIME_LINE_SECTION_TITLE_TOKEN, useValue: "Work" },
    { provide: TIME_LINE_SECTION_IMAGE_TOKEN, useValue: "https://cataas.com/cat" },
    { provide: TIME_LINE_SECTION_PROVIDER_TOKEN, useClass: SectionConfigProvider, multi: true },
  ]
})
export class WorkSectionModule {}
