import { Controller, corelib } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import browserstorage from '/views/pages/lib/browserstorage.html?raw';


export default class BrowserStorageCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    // this.$debugOpts.ddSet = true;
    this.setTitle('BrowserStorage');
    this.setDescription('Test the BrowserStorage lib.');
    this.setKeywords('dodo, examples, BrowserStorage');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', browserstorage);
  }

  __init(trx) {
    const browserStorageOpts = {
      storageType: 'local'
    };
    this.storage = new corelib.BrowserStorage(browserStorageOpts, true);
  }

  __postrend() {
    this.$model.storage_type = 'local';
    this.$model.on('model-change', event => {
      // console.log('MODEL CHANGED::', event);
      if (event.detail.modelName === 'storage_type') {
        const browserStorageOpts = {
          storageType: event.detail.modelValue
        };
        this.storage = new corelib.BrowserStorage(browserStorageOpts, true);
      }
    });
  }


  // full name
  put_test() {
    this.storage.put('full_name', this.full_name);
  }
  get_test() {
    const full_name = this.storage.get('full_name');
    this.$model.storageValue = full_name;
    console.log('full_name:', typeof full_name, full_name);
  }
  remove_test() {
    this.storage.remove('full_name');
  }


  // myObj
  putObject_test() {
    console.log('putObject->', typeof this.myObj, this.myObj);
    this.storage.putObject('myObj', this.myObj);
  }
  getObject_test() {
    const myObj = this.storage.getObject('myObj');
    this.$model.storageValue = myObj;
    console.log('myObj:', typeof myObj, myObj);
  }
  remove_myObj_test() {
    this.storage.remove('myObj');
  }


  // myArr
  putObject_test2() {
    console.log('putObject->', typeof this.myArr, this.myArr);
    this.storage.putObject('myArr', this.myArr);
  }
  getObject_test2() {
    const myArr = this.storage.getObject('myArr');
    this.$model.storageValue = myArr;
    console.log('myArr:', typeof myArr, myArr);
  }
  remove_myArr_test() {
    this.storage.remove('myArr');
  }


  getAll_test() {
    const allStorages_string = this.storage.getAll();
    console.log('getAll::', typeof allStorages_string, allStorages_string);
  }
  getObjectAll_test1() {
    const allStorages_object = this.storage.getObjectAll();
    console.log('getObjectAll-convert type::', typeof allStorages_object, allStorages_object);
  }
  getObjectAll_test2() {
    const allStorages_object = this.storage.getObjectAll(false);
    console.log('getObjectAll-don\'t convert type::', typeof allStorages_object, allStorages_object);
  }
  removeAll_test() {
    this.storage.removeAll();
  }


  exists_test() {
    const doesExist = this.storage.exists(this.storage_name);
    console.log('doesExist:', doesExist);
  }



}
