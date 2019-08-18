import { Component, Input } from "@angular/core";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { ITimelineCard } from "../i-time-line-config";

@Component({
  selector: "ntr-time-line-card",
  styles: [`
      :host {
          margin: 12px;
      }

      .timeline-card {
          max-width: 450px;
      }

      iframe {
          width: 100%;
          height: 315px;
      }

      img {
          max-height: 315px;
          max-width: 100%;
      }
  `],
  template: `
      <mat-card class="timeline-card">
          <mat-card-header>

              <div *ngIf="card.iconImg"
                   [style.backgroundImage]="card.iconImg"
                   mat-card-avatar></div>

              <mat-card-title>{{card.title}}</mat-card-title>
              <mat-card-subtitle>{{card.subTitle}}</mat-card-subtitle>

          </mat-card-header>


          <mat-tab-group headerPosition="below" mat-card-image>
              <mat-tab *ngFor="let media of card.media" [label]="media.name">
                  <ng-template matTabContent>
                      <ng-container [ngSwitch]="media.type">

                          <img *ngSwitchCase="'image'" [src]="trustUrl(media.src)" [alt]="media.alt">

                          <iframe *ngSwitchCase="'video'"
                                  [src]="trustUrl(media.src)"
                                  frameborder="0"
                                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                  allowfullscreen></iframe>

                      </ng-container>
                  </ng-template>
              </mat-tab>
          </mat-tab-group>

          <mat-card-content>
              <p>{{ card.body }}</p>
          </mat-card-content>

          <mat-card-actions>
              <a *ngFor="let link of card.links"
                 [href]="trustUrl(link.url)"
                 mat-button
                 target="_blank">
                  {{ link.text }}
              </a>
          </mat-card-actions>
      </mat-card>
  `
})
export class TimeLineCardComponent {

  constructor(
    private readonly sanitiser: DomSanitizer,
  ) {}

  @Input()
  public card: ITimelineCard;

  private readonly safeUrlCache: { [url: string]: SafeUrl } = {};

  public trustUrl(url: string): SafeUrl {
    if (this.safeUrlCache[url]) {
      return this.safeUrlCache[url];
    }

    return this.safeUrlCache[url] = this.sanitiser.bypassSecurityTrustResourceUrl(url);
  }

}
