import { setup, assign } from "xstate";
import { tickActor } from "./tickActor";
import { TimerEvent, TimerState } from "./constants";
import { Context, Events } from "./types";

export const timerMachine = setup({
  types: {
    context: {} as Context,
    events: {} as Events,
  },
  actors: {
    tickActor,
  },
  actions: {
    increment: assign({ elapsed: ({ context }) => context.elapsed + 1 }),
  },
}).createMachine({
  id: "timer",
  initial: TimerState.STOPPED,
  context: { elapsed: 0 },
  states: {
    [TimerState.STOPPED]: {
      on: {
        [TimerEvent.START]: { target: TimerState.RUNNING },
      },
    },
    [TimerState.RUNNING]: {
      invoke: {
        id: "tick",
        src: "tickActor",
      },
      on: {
        [TimerEvent.TICK]: {
          actions: "increment",
        },
        [TimerEvent.STOP]: {
          target: TimerState.STOPPED,
        },
      },
    },
  },
});
