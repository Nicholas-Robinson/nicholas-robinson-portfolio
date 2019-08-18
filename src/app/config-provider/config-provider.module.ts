import { NgModule } from "@angular/core";
import { ConfigProviderService } from "./config-provider.service";
import { ProjectsSectionModule } from "./projects/projects-section.module";
import { WorkSectionModule } from "./work/work-section.module";

@NgModule({
  imports: [
    WorkSectionModule,
    ProjectsSectionModule,
  ],
  providers: [ConfigProviderService],
})
export class ConfigProviderModule {}

