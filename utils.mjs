function randomIntBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function subscribeAndLog(observable) {
  observable.subscribe(console.log, console.error);
}

export { randomIntBetween, subscribeAndLog };
