import { Controller } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import main from '/views/pages/ddCloners/dd-each-html.html?raw';



export default class DdEachHtmlCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    // this.$debugOpts.ddEach = true;
    this.setTitle('dd-each dd-html');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', main);
  }

  async __init(trx) {
    this.fields = ['name', 'size'];

    this.$model.companies = [
      { name: 'Cloud Ltd', size: 3 },
      { name: 'Roto Ltd', size: 5 }
    ];
  }

  changeCompanies() {
    this.$model.companies = [
      { name: 'ABC Ltd', size: this._rnd() },
      { name: 'Dugi Ltd', size: this._rnd() },
      { name: 'Soko Ltd', size: this._rnd() }
    ];
  }


  ddhtmlCompanies(companyKey) {
    const company = this.$model.companies[companyKey];
    let html = '';
    this.fields.forEach(field => {
      const companyField = company[field];
      html += `<td>${companyField} <button class="btn-small" style="float:right" dd-click="alertCompanyField(\'${companyField}\')">see</button></td>`;
    });
    return html;
  }


  alertCompanyField(companyField) {
    alert(companyField);
  }


  _rnd() {
    return Math.round((Math.random() * 100));
  }

}
