import { Controller } from '@mikosoft/dodo';

export default class View_lazyJSCtrl extends Controller {

  constructor(app) {
    super();
  }

  async loader(trx) {
    this.setTitle('DoDo - View#lazyJS()');
    this.setDescription('The examples which shows how to use the DoDo Framework in single page application.');
    this.setKeywords('dodo, framework, javascript, js, single page app, spa');
    this.setLang('en');

    await this.loadView('#main', 'pages/view-lazyjs/main.html');
  }


  async destroy() {
    this.unlazyAllJS();
  }


  popup() {
    window.swal({
      icon: 'success',
      text: 'Hello DoDo. How are you?',
    });
    $.notify('Hello Dodo, nice to meet you.');
  }

  // button function
  async lazyAll() {
    console.info('Loading... Please wait.');
    await this.lazyJS([
      'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js', // must be loaded before notify.min.js because notify require jQuery
      'https://cdnjs.cloudflare.com/ajax/libs/notify/0.4.2/notify.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.1.2/sweetalert.min.js',
    ], 1300); // wait 1.3 seconds for next script to load
    console.info('Scripts are loded. Now click on the POPUP button.');
  }

  lazyTest() {
    this.lazyJS([
      '/frontend/src/assets/regoch/js/lazyTest2.js'
    ], 1000);
  }

  unlazyAll() {
    this.unlazyAllJS();
  }

  unlazySweetalert() {
    this.unlazyJS([
      'https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.1.2/sweetalert.min.js'
    ]);
  }

}
