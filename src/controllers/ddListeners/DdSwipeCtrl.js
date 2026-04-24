import { Controller } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import ddSwipe from '/views/pages/ddListeners/dd-swipe.html?raw';



export default class DdSwipeCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    // this.$debugOpts.ddSwipe = true;
    this.setTitle('dd-swipe');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', ddSwipe);
  }

  async __init() {
    this.$model.slides = ['Slide 1 🟥', 'Slide 2 🟩', 'Slide 3 🟦', 'Slide 4 🟨'];
    this.$model.slideIndex = 0;

    this.$model.drawerOpen = false;

    this.$model.anySwipeLog = 'Swipe anywhere in the bottom box to detect direction.';
  }


  nextSlide() {
    const len = this.$model.slides.length;
    this.$model.slideIndex = (this.$model.slideIndex + 1) % len;
  }

  prevSlide() {
    const len = this.$model.slides.length;
    this.$model.slideIndex = (this.$model.slideIndex - 1 + len) % len;
  }


  openDrawer() {
    this.$model.drawerOpen = true;
  }

  closeDrawer() {
    this.$model.drawerOpen = false;
  }


  onAnySwipe(event) {
    // reconstruct direction from changedTouches — purely for the demo log
    this.$model.anySwipeLog = 'Swipe detected! (check console for event details)';
    console.log('dd-swipe any direction event::', event);
  }

}
