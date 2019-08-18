import { NgModule } from "@angular/core";
import { ConfigProviderService } from "./config-provider.service";
import { WorkSectionModule } from "./work/work-section.module";

@NgModule({
  imports: [
    WorkSectionModule,
  ],
  providers: [ConfigProviderService],
})
export class ConfigProviderModule {}

