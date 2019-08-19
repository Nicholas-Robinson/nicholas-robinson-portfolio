import { animate, group, sequence, state, style, transition, trigger } from "@angular/animations";
import { Component, HostListener, Input } from "@angular/core";
import { IToolbarConfig } from "./i-toolbar-config";

export interface ISocialLink {
  title: string;
  url: string;
  icons: string;
}

@Component({
  selector: "ntr-toolbar",
  styleUrls: ["./toolbar.scss"],
  animations: [
    trigger("windowSizePcNav", [
      state("fullScreen", style({})),
      state("midScreen", style({ padding: "0 8px" })),
      state("smallScreen", style({ width: "0" })),

      transition("* => *", animate("200ms")),
      transition("* => smallScreen", sequence([
        style({ width: "0" }),
        animate("200ms"),
      ])),
    ]),

    trigger("windowSizePcLinks", [
      state("fullScreen", style({})),
      state("midScreen", style({ width: "35px", display: "block" })),
      state("smallScreen", style({ width: 0, display: "none" })),
      transition("* => *", animate("200ms")),
    ]),

    trigger("windowSizeVisibleMobile", [
      state("fullScreen", style({ display: "none" })),
      state("midScreen", style({ display: "none" })),
      state("smallScreen", style({ display: "block" })),
      transition("* => *", animate("200ms")),
    ]),

    trigger("windowSizeVisiblePC", [
      state("fullScreen", style({ display: "black" })),
      state("midScreen", style({ display: "black" })),
      state("smallScreen", style({ display: "none" })),
      transition("* => *", animate("200ms")),
    ]),
  ],
  template: `
      <div class="toolbar-layout">
          <div class="profile-picture"></div>

          <div class="toolbars">
              <mat-toolbar color="accent">
                  <span id="name">N<span>icholas</span> R<span>obinson</span></span>
                  <a *ngFor="let link of socialLinks"
                     [title]="link.title"
                     [href]="link.url"
                     [@windowSizePcLinks]="windowSizeState"
                     target="_blank"
                     class="social-link"
                     mat-icon-button
                     color="primary">
                      <i [class]="link.icons"></i>
                  </a>
                  <mat-menu #linksMenu="matMenu">
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
                      <mat-divider [@windowSizeVisibleMobile]="windowSizeState"></mat-divider>
                      <a *ngFor="let link of socialLinks"
                         [@windowSizeVisibleMobile]="windowSizeState"
                         [title]="link.title"
                         [href]="link.url"
                         target="_blank"
                         class="social-link"
                         mat-menu-item>
                          <i [class]="link.icons" style="margin-right: 4px"></i>
                          {{ link.title }}
                      </a>
                  </mat-menu>
                  <button [matMenuTriggerFor]="linksMenu"
                          title="Documents"
                          class="social-link"
                          mat-icon-button
                          color="primary">
                      <i class="far fa-file-pdf" [@windowSizeVisiblePC]="windowSizeState"></i>
                      <i class="fas fa-external-link-square-alt"
                         style="display: none"
                         [@windowSizeVisibleMobile]="windowSizeState"></i>
                  </button>
              </mat-toolbar>

              <mat-toolbar class="nav" color="primary">
                  <a *ngFor="let link of config"
                     [@windowSizePcNav]="windowSizeState"
                     [@windowSizeVisiblePC]="windowSizeState"
                     [href]="getHrefLink(link)"
                     mat-button>
                      {{ link.sectionLabel }}
                  </a>
                  <mat-menu [@windowSizeVisibleMobile]="windowSizeState" #navMenu="matMenu">
                      <a *ngFor="let link of config"
                         [href]="getHrefLink(link)"
                         mat-menu-item>
                          {{ link.sectionLabel }}
                      </a>
                  </mat-menu>
                  <button [matMenuTriggerFor]="navMenu"
                          [@windowSizeVisibleMobile]="windowSizeState"
                          style="display: none"
                          title="Documents"
                          class="social-link"
                          mat-icon-button
                          color="accent">
                      <i class="fas fa-bars"></i>
                  </button>
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

  public windowSizeState: "fullScreen" | "midScreen" | "smallScreen" = this.getWindowSizeState();

  @HostListener("window:resize")
  public onWindowResize(): void {
    this.windowSizeState = this.getWindowSizeState();
  }

  public getHrefLink(config: IToolbarConfig): string {
    return `#${config.sectionIdentifier}`;
  }

  private getWindowSizeState(): "fullScreen" | "midScreen" | "smallScreen" {
    const size = window.innerWidth;

    if (size <= 480) {
      return "smallScreen";

    } else if (size <= 600) {
      return "midScreen";

    } else {
      return "fullScreen";
    }
  }

}
