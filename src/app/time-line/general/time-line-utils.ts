import { animate, AnimationTriggerMetadata, state, style, transition, trigger } from "@angular/animations";

export enum ETimelineFilters {
  All = "All",
  Life = "Life",
  Education = "Education",
  Work = "Work",
  Achievements = "Achievements",
}

const closedStyle = style({
  display: "none",
});

const openStyle = style({
  display: "flex",
});

export function createStyles(filters: ETimelineFilters[]): AnimationTriggerMetadata {

  const shouldShow = filters.reduce((memo, filter) => ({ ...memo, [filter]: true }), {});

  return trigger("timelineFilter", [

    state(ETimelineFilters.All, openStyle),
    state(ETimelineFilters.Life, shouldShow[ETimelineFilters.Life] ? openStyle : closedStyle),
    state(ETimelineFilters.Education, shouldShow[ETimelineFilters.Education] ? openStyle : closedStyle),
    state(ETimelineFilters.Work, shouldShow[ETimelineFilters.Work] ? openStyle : closedStyle),
    state(ETimelineFilters.Achievements, shouldShow[ETimelineFilters.Achievements] ? openStyle : closedStyle),

    transition("* => *", [animate("500ms")]),

  ]);

}
