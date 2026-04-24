import { Controller } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import ddOutclick from '/views/pages/ddListeners/dd-outclick.html?raw';



export default class DdOutclickCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    // this.$debugOpts.ddOutclick = true;
    this.setTitle('dd-outclick');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', ddOutclick);
  }

  async __init() {
    this.$model.dropdownOpen = false;
    this.$model.dropdownOpen2 = false;
    this.$model.log = 'Click outside any open panel to close it.';
  }


  toggleDropdown() {
    this.$model.dropdownOpen = !this.$model.dropdownOpen;
    this.$model.log = this.$model.dropdownOpen ? 'Dropdown 1 opened.' : 'Dropdown 1 closed.';
  }

  closeDropdown() {
    if (!this.$model.dropdownOpen) { return; }
    this.$model.dropdownOpen = false;
    this.$model.log = 'Dropdown 1 closed by outside click.';
  }


  toggleDropdown2() {
    this.$model.dropdownOpen2 = !this.$model.dropdownOpen2;
    this.$model.log = this.$model.dropdownOpen2 ? 'Tooltip 2 opened.' : 'Tooltip 2 closed.';
  }

  closeDropdown2() {
    if (!this.$model.dropdownOpen2) { return; }
    this.$model.dropdownOpen2 = false;
    this.$model.log = 'Tooltip 2 closed by outside click.';
  }

}
