import { Controller } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import main from '/views/pages/ddCloners/dd-each-3D-data.html?raw';



export default class DdEach3DdataCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    // this.$debugOpts.ddEach = true;
    this.setTitle('dd-each 3D data');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', main);
  }

  async __init(trx) {
    this.$model.rows = [
      [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
      [['A', 'B', 'C'], ['D', 'E', 'F'], ['G', 'H', 'I']]
    ];
  }


  changeRows() {
    this.$model.rows = [
      [[this._rnd(), 2, 3, 22], [44, 55, 66], [77, 88, 99]],
      [['A', 'B', 'C'], ['DD', 'E', 'F'], ['G', 'H', 'I']],
      [[`A${this._rnd()}`, 'B1', 'C1'], ['D1', 'E1', 'F1'], ['G', 'H1', 'I']]
    ];
  }


  ddhtml(rowKey) {
    const row = this.$model.rows[rowKey];
    let html = '';
    row.forEach(column => {
      html += '<td>';
      column.forEach(data => {
        html += `<span>${data}</span>,&nbsp;`;
      });
      html += '</td>';
    });
    return html;
  }


  _rnd() {
    return Math.round((Math.random() * 100));
  }

}
