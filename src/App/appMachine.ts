import { createMachine } from "xstate";

export const appMachine = createMachine({
  id: "app",
  initial: "start",
  states: {
    start: {
      on: {
        toggle: "toggle",
        timer: "timer",
        calc: "calc",
      },
    },
    toggle: {
      on: {
        back: "start",
      },
    },
    timer: {
      on: {
        back: "start",
      },
    },
    calc: {
      on: {
        back: "start",
      },
    }
  },
});
