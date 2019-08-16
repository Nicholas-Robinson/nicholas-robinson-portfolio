import { Component } from "@angular/core";

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
                  <a href="#something0" mat-button>Teesing</a>
                  <a href="#something1" mat-button>Teesing</a>
                  <a href="#something2" mat-button>Teesing</a>
                  <a href="#something3" mat-button>Teesing</a>
              </mat-toolbar>
          </div>
      </div>
  `,
})
export class ToolbarComponent {}
