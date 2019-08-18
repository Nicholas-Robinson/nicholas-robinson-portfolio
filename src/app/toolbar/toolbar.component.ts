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

              <mat-expansion-panel [expanded]="showContent" (mouseleave)="showContent = false" hideToggle>
                  <mat-expansion-panel-header (click)="showContent = !showContent">
                      <mat-panel-title>

                      </mat-panel-title>
                      <mat-icon>menu</mat-icon>
                  </mat-expansion-panel-header>

                  <div id="link-tray">
                      <a *ngFor="let link of config"
                         [href]="getHrefLink(link)"
                         mat-button>
                          {{ link.sectionLabel }}
                      </a>
                  </div>
              </mat-expansion-panel>
          </div>
      </div>
  `,
})
export class ToolbarComponent {

  @Input()
  public config: IToolbarConfig[];

  public showContent = false;

  public getHrefLink(config: IToolbarConfig): string {
    return `#${config.sectionIdentifier}`;
  }

}
