import { InjectionToken, NgModule, Type } from "@angular/core";
import { createProvider, IPeriodConfigProvider, SectionConfigProvider, TIME_LINE_SECTION_PROVIDER_TOKEN } from "../config-provider";
import { TuksService } from "./tuks.service";


const educationPeriodProviders: Type<IPeriodConfigProvider>[] = [
  TuksService,
];

const periodProviders = new InjectionToken("");
const toPeriodProvider = createProvider.bind(undefined, periodProviders);

@NgModule({
  providers: [
    educationPeriodProviders.map(toPeriodProvider),
    {
      provide: TIME_LINE_SECTION_PROVIDER_TOKEN,
      useFactory: items => new SectionConfigProvider(
        "Education",
        "Education",
        "https://i.imgur.com/HWjCPs7.jpg",
        items,
      ),
      deps: [periodProviders],
      multi: true,
    },
  ]
})
export class EducationSectionModule {}
