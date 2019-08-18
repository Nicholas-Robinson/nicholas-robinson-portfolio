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
        "https://lh4.googleusercontent.com/Ser2As4v47WtyG9xiFUWi7f5vCjNnX2m3VAARoK1Ry9-w3oLMtsNDjuYl-c=w2400",
        items,
      ),
      deps: [periodProviders],
      multi: true,
    },
  ]
})
export class EducationSectionModule {}
