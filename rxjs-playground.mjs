import * as repl from 'repl';
import * as rxjs from 'rxjs';
import {
  ArgumentOutOfRangeError,
  AsyncSubject,
  BehaviorSubject,
  EMPTY,
  EmptyError,
  NEVER,
  NotFoundError,
  ObjectUnsubscribedError,
  Observable,
  ReplaySubject,
  SequenceError,
  Subject,
  Subscriber,
  Subscription,
  TimeoutError,
  UnsubscriptionError,
  VirtualTimeScheduler,
  animationFrames,
  audit,
  auditTime,
  bindCallback,
  bindNodeCallback,
  buffer,
  bufferCount,
  bufferTime,
  bufferToggle,
  bufferWhen,
  catchError,
  combineLatest,
  combineLatestAll,
  combineLatestWith,
  concat,
  concatAll,
  concatMap,
  concatWith,
  connect,
  connectable,
  count,
  debounce,
  debounceTime,
  defaultIfEmpty,
  defer,
  delay,
  delayWhen,
  dematerialize,
  distinct,
  distinctUntilChanged,
  distinctUntilKeyChanged,
  elementAt,
  endWith,
  every,
  exhaustAll,
  exhaustMap,
  expand,
  filter,
  finalize,
  find,
  findIndex,
  first,
  firstValueFrom,
  forkJoin,
  from,
  fromEvent,
  fromEventPattern,
  generate,
  groupBy,
  identity,
  ignoreElements,
  iif,
  interval,
  isEmpty,
  isObservable,
  last,
  lastValueFrom,
  map,
  materialize,
  max,
  merge,
  mergeAll,
  mergeMap,
  mergeScan,
  mergeWith,
  min,
  noop,
  observeOn,
  of,
  onErrorResumeNext,
  pairwise,
  partition,
  pipe,
  race,
  raceWith,
  range,
  reduce,
  repeat,
  retry,
  sample,
  sampleTime,
  scan,
  scheduled,
  sequenceEqual,
  share,
  shareReplay,
  single,
  skip,
  skipLast,
  skipUntil,
  skipWhile,
  startWith,
  subscribeOn,
  switchAll,
  switchMap,
  switchScan,
  take,
  takeLast,
  takeUntil,
  takeWhile,
  tap,
  throttle,
  throttleTime,
  throwError,
  throwIfEmpty,
  timeInterval,
  timeout,
  timer,
  timestamp,
  toArray,
  using,
  window,
  windowCount,
  windowTime,
  windowToggle,
  windowWhen,
  withLatestFrom,
  zip,
  zipAll,
  zipWith
} from 'rxjs';

console.log('Imported all non-deprecated rxjs exported members. Initializing REPL...');

const server = repl.start({ prompt: '> ', useGlobal: true });

server.context.rxjs = rxjs;
/* Observable */
server.context.Observable = Observable;
server.context.animationFrames = animationFrames;

/* Subjects */
server.context.Subject = Subject;
server.context.BehaviorSubject = BehaviorSubject;
server.context.ReplaySubject = ReplaySubject;
server.context.AsyncSubject = AsyncSubject;

/* Schedulers */
server.context.VirtualTimeScheduler = VirtualTimeScheduler;

/* Subscription */
server.context.Subscription = Subscription;
server.context.Subscriber = Subscriber;

/* Utils */
server.context.pipe = pipe;
server.context.noop = noop;
server.context.identity = identity;
server.context.isObservable = isObservable;

/* Promise Conversion */
server.context.lastValueFrom = lastValueFrom;
server.context.firstValueFrom = firstValueFrom;

/* Error types */
server.context.ArgumentOutOfRangeError = ArgumentOutOfRangeError;
server.context.EmptyError = EmptyError;
server.context.NotFoundError = NotFoundError;
server.context.ObjectUnsubscribedError = ObjectUnsubscribedError;
server.context.SequenceError = SequenceError;
server.context.TimeoutError = TimeoutError;
server.context.UnsubscriptionError = UnsubscriptionError;

/* Static observable creation exports */
server.context.bindCallback = bindCallback;
server.context.bindNodeCallback = bindNodeCallback;
server.context.combineLatest = combineLatest;
server.context.concat = concat;
server.context.connectable = connectable;
server.context.defer = defer;
server.context.forkJoin = forkJoin;
server.context.from = from;
server.context.fromEvent = fromEvent;
server.context.fromEventPattern = fromEventPattern;
server.context.generate = generate;
server.context.iif = iif;
server.context.interval = interval;
server.context.merge = merge;
server.context.of = of;
server.context.onErrorResumeNext = onErrorResumeNext;
server.context.partition = partition;
server.context.race = race;
server.context.range = range;
server.context.throwError = throwError;
server.context.timer = timer;
server.context.using = using;
server.context.zip = zip;
server.context.scheduled = scheduled;

/* Constants */
server.context.EMPTY = EMPTY;
server.context.NEVER = NEVER;

/* Operators */
server.context.audit = audit;
server.context.auditTime = auditTime;
server.context.buffer = buffer;
server.context.bufferCount = bufferCount;
server.context.bufferTime = bufferTime;
server.context.bufferToggle = bufferToggle;
server.context.bufferWhen = bufferWhen;
server.context.catchError = catchError;
server.context.combineLatestAll = combineLatestAll;
server.context.combineLatestWith = combineLatestWith;
server.context.concatAll = concatAll;
server.context.concatMap = concatMap;
server.context.concatWith = concatWith;
server.context.connect = connect;
server.context.count = count;
server.context.debounce = debounce;
server.context.debounceTime = debounceTime;
server.context.defaultIfEmpty = defaultIfEmpty;
server.context.delay = delay;
server.context.delayWhen = delayWhen;
server.context.dematerialize = dematerialize;
server.context.distinct = distinct;
server.context.distinctUntilChanged = distinctUntilChanged;
server.context.distinctUntilKeyChanged = distinctUntilKeyChanged;
server.context.elementAt = elementAt;
server.context.endWith = endWith;
server.context.every = every;
server.context.exhaustAll = exhaustAll;
server.context.exhaustMap = exhaustMap;
server.context.expand = expand;
server.context.filter = filter;
server.context.finalize = finalize;
server.context.find = find;
server.context.findIndex = findIndex;
server.context.first = first;
server.context.groupBy = groupBy;
server.context.ignoreElements = ignoreElements;
server.context.isEmpty = isEmpty;
server.context.last = last;
server.context.map = map;
server.context.materialize = materialize;
server.context.max = max;
server.context.mergeAll = mergeAll;
server.context.mergeMap = mergeMap;
server.context.mergeScan = mergeScan;
server.context.mergeWith = mergeWith;
server.context.min = min;
server.context.observeOn = observeOn;
server.context.pairwise = pairwise;
server.context.raceWith = raceWith;
server.context.reduce = reduce;
server.context.repeat = repeat;
server.context.retry = retry;
server.context.sample = sample;
server.context.sampleTime = sampleTime;
server.context.scan = scan;
server.context.sequenceEqual = sequenceEqual;
server.context.share = share;
server.context.shareReplay = shareReplay;
server.context.single = single;
server.context.skip = skip;
server.context.skipLast = skipLast;
server.context.skipUntil = skipUntil;
server.context.skipWhile = skipWhile;
server.context.startWith = startWith;
server.context.subscribeOn = subscribeOn;
server.context.switchAll = switchAll;
server.context.switchMap = switchMap;
server.context.switchScan = switchScan;
server.context.take = take;
server.context.takeLast = takeLast;
server.context.takeUntil = takeUntil;
server.context.takeWhile = takeWhile;
server.context.tap = tap;
server.context.throttle = throttle;
server.context.throttleTime = throttleTime;
server.context.throwIfEmpty = throwIfEmpty;
server.context.timeInterval = timeInterval;
server.context.timeout = timeout;
server.context.timestamp = timestamp;
server.context.toArray = toArray;
server.context.window = window;
server.context.windowCount = windowCount;
server.context.windowTime = windowTime;
server.context.windowToggle = windowToggle;
server.context.windowWhen = windowWhen;
server.context.withLatestFrom = withLatestFrom;
server.context.zipAll = zipAll;
server.context.zipWith = zipWith;

export { server };
