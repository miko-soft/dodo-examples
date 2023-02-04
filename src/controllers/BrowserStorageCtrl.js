import { Controller, corelib } from '@mikosoft/dodo';

export default class BrowserStorageCtrl extends Controller {

  constructor(app) {
    super();
  }

  async loader(trx) {
    this.setTitle('DoDo - BrowserStorage');
    this.setDescription('The examples which shows how to use the DoDo Framework in single page application.');
    this.setKeywords('dodo, framework, javascript, js, single page app, spa');
    this.setLang('en');

    await this.loadView('#main', 'pages/browserstorage/main.html');
  }

  async init() {
    this.sLocal = new corelib.BrowserStorage({ storageType: 'local' }, true);
    this.sSess = new corelib.BrowserStorage({ storageType: 'session' }, true);
  }


  test_put() {
    console.log(this.first_name);
    this.sLocal.put('first_name', this.first_name);
    this.sSess.put('first_name', this.first_name);
  }

  test_putObject() {
    console.log(this.some_obj);
    this.sLocal.putObject('some_obj', this.some_obj);
    this.sSess.putObject('some_obj', this.some_obj);
  }

  test_getAll() {
    this.$model.localStorageValues = this.sLocal.getAll();
    console.log('LOCAL:', this.$model.localStorageValues);
    this.$model.sessionStorageValues = this.sSess.getAll();
    console.log('SESS:', this.$model.sessionStorageValues);
  }

  test_get() {
    this.$model.localStorageVal = this.sLocal.get(this.storageName);
    this.$model.sessionStorageVal = this.sSess.get(this.storageName);
  }

  test_getObject() {
    this.$model.localStorageVal2 = this.sLocal.getObject(this.storageName2);
    this.$model.sessionStorageVal2 = this.sSess.getObject(this.storageName2);
  }

  test_remove() {
    this.sLocal.remove(this.storageName3);
    this.sSess.remove(this.storageName3);
  }

  test_removeAll() {
    this.sLocal.removeAll();
    this.sSess.removeAll();
  }

}
