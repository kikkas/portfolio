/*
 *
 * RxJS helpers
 *
 */

import Rx from 'rxjs/Rx';


export const msElapsed = (scheduler = Rx.Scheduler.animationFrame) =>
  Rx.Observable.defer(() => {
    const start = scheduler.now();

    return Rx.Observable
      .interval(0, scheduler)
      .map(() => scheduler.now() - start);
  });

export const duration = (ms, scheduler = Rx.Scheduler.animationFrame) =>
  msElapsed(scheduler)
    .map(ems => ems / ms)
    .takeWhile(t => t <= 1);

export const distance = (data) => (t) => data.map(value => t * value);