import { createMachine } from 'xstate';

export const appMachine = createMachine({
  id: 'app',
  initial: 'start',
  states: {
    start: {
      on: {
        toggle: 'toggle'
      }
    },
    toggle: {
      on: {
        back: 'start'
      }
    }
  }
});