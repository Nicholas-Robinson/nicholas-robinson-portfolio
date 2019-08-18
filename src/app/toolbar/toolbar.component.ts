import { Component, Input } from "@angular/core";
import { IToolbarConfig } from "./i-toolbar-config";

@Component({
  selector: "ntr-toolbar",
  styleUrls: ["./toolbar.scss"],
  template: `
      <div class="toolbar-layout">
          <div class="profile-picture"></div>

          <div class="toolbars">
              <mat-toolbar color="accent">
                  <span id="name">Nicholas Robinson</span>
                  <button mat-icon-button color="primary">
                      <mat-icon class="mat-ripple"
                                color="primary"
                                mat-list-icon
                                aria-hidden="false">
                          tune
                      </mat-icon>
                  </button>
              </mat-toolbar>

              <mat-toolbar class="nav" color="primary">
                  <a *ngFor="let link of config"
                     [href]="getHrefLink(link)"
                     mat-button>
                      {{ link.sectionLabel }}
                  </a>
              </mat-toolbar>
          </div>
      </div>
  `,
})
export class ToolbarComponent {

  @Input()
  public config: IToolbarConfig[];

  public getHrefLink(config: IToolbarConfig): string {
    return `#${config.sectionIdentifier}`;
  }

}
