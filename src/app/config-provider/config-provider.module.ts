import { NgModule } from "@angular/core";
import { ConfigProviderService } from "./config-provider.service";
import { EducationSectionModule } from "./education/education-section.module";
import { ProjectsSectionModule } from "./projects/projects-section.module";
import { WorkSectionModule } from "./work/work-section.module";

@NgModule({
  imports: [
    WorkSectionModule,
    EducationSectionModule,
    ProjectsSectionModule,
  ],
  providers: [ConfigProviderService],
})
export class ConfigProviderModule {}

