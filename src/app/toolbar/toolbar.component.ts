import { Component, Input } from "@angular/core";
import { IToolbarConfig } from "./i-toolbar-config";

export interface ISocialLink {
  title: string;
  url: string;
  icons: string;
}

@Component({
  selector: "ntr-toolbar",
  styleUrls: ["./toolbar.scss"],
  template: `
      <div class="toolbar-layout">
          <div class="profile-picture"></div>

          <div class="toolbars">
              <mat-toolbar color="accent">
                  <span id="name">Nicholas Robinson</span>
                  <a *ngFor="let link of socialLinks"
                     [title]="link.title"
                     [href]="link.url"
                     target="_blank"
                     class="social-link"
                     mat-icon-button
                     color="primary">
                      <i [class]="link.icons"></i>
                  </a>
                  <mat-menu #appMenu="matMenu">
                      <a href="https://drive.google.com/open?id=1QiSZY36Oqs_lYWjMiWxaIvCht_TAr5rG"
                         target="_blank"
                         mat-menu-item>
                         Resume
                      </a>
                      <a href="https://drive.google.com/open?id=1oHIUmwkrqXluM91nC1NKMiHyEVq0WLDJ"
                         target="_blank"
                         mat-menu-item>
                          Curriculum vitae
                      </a>
                      <a href="https://drive.google.com/open?id=17PwbC47GaxaOGP2Fjusf2sbXcxdxTSuS"
                         target="_blank"
                         mat-menu-item>
                          Cover letter
                      </a>
                  </mat-menu>
                  <button [matMenuTriggerFor]="appMenu"
                          title="Documents"
                          class="social-link"
                          mat-icon-button
                          color="primary">
                      <i class="far fa-file-pdf"></i>
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

  @Input()
  public socialLinks: ISocialLink[];

  public getHrefLink(config: IToolbarConfig): string {
    return `#${config.sectionIdentifier}`;
  }

}
