import { Controller } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import ddIntersect from '/views/pages/ddListeners/dd-intersect.html?raw';



export default class DdIntersectCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    // this.$debugOpts.ddIntersect = true;
    this.setTitle('dd-intersect');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', ddIntersect);
  }

  async __init() {
    this.$model.lazyLoaded = false;
    this.$model.lazySrc = '';
    this.$model.animateDone = false;
    this.$model.counter = 0;
    this.$model.counterRunning = false;
    this.$model.sentinelHits = 0;
  }


  // fires once when the lazy image scrolls into view (--once)
  loadLazyImage() {
    if (this.$model.lazyLoaded) { return; }
    this.$model.lazyLoaded = true;
    this.$model.lazySrc = 'https://picsum.photos/seed/dodo/400/200';
  }


  // fires every time the section is 50 % visible (--threshold:0.5), but we animate only once
  animateSection(entry) {
    if (this.$model.animateDone) { return; }
    this.$model.animateDone = true;
    // count up from 0 to 100 over ~1 s
    this.$model.counterRunning = true;
    let n = 0;
    const tick = () => {
      n += 2;
      this.$model.counter = n;
      if (n < 100) { requestAnimationFrame(tick); }
      else { this.$model.counterRunning = false; }
    };
    requestAnimationFrame(tick);
  }


  // infinite-scroll sentinel — fires every time it enters view (no --once)
  loadNextPage() {
    this.$model.sentinelHits++;
  }

}
