import { Controller, corelib } from '@mikosoft/dodo';
import navbar from '../../views/inc/navbar.html?raw';
import paginator from '../../views/pages/lib/paginator.html?raw';

export default class PaginatorCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    this.setTitle('Paginator');
    this.setDescription('Test the Paginator lib.');
    this.setKeywords('dodo, examples, Paginator');
    this.setLang('en');
    this.loadCSS('https://www.w3schools.com/w3css/4/w3.css');
    this.loadView('#navbar', navbar);
    this.loadView('#main', paginator);
  }

  async __init(trx) {
    this.paginator = new corelib.Paginator(3, ['w3-gray']);
    await this.openPage(1);
  }

  __destroy() {
    this.unloadCSS('https://www.w3schools.com/w3css/4/w3.css');
    corelib.navig.reload(); // reload page to completely unload css
  }



  /**
   * Open new page when paginator links are clicked.
   * @param {number} pageNum - opened page number
   * @param {Element} element - HTML element when clicked will change the page
   */
  async openPage(pageNum, element) {
    if (!!element) { element.blur(); }

    this.$model.results = [];
    this.currentPage = +pageNum;
    this.itemsPerPage = 5;
    await this.getResults();

    const { pageLinks, pagesTotal } = this.paginator.page(pageNum, this.$model.itemsTotal, this.itemsPerPage);
    this.$model.pageLinks = pageLinks;
    this.pagesTotal = pagesTotal;
  }


  async getResults() {
    const limit = this.itemsPerPage;
    const skip = this.paginator.skipCalc(this.currentPage, this.itemsPerPage);

    await corelib.util.sleep(800);

    const results = [
      { name: 'John Doe 1', age: 1 },
      { name: 'John Doe 2', age: 2 },
      { name: 'John Doe 3', age: 3 },
      { name: 'John Doe 4', age: 4 },
      { name: 'John Doe 5', age: 5 },
      { name: 'John Doe 6', age: 6 },
      { name: 'John Doe 7 ', age: 7 },
      { name: 'John Doe 8', age: 8 },
      { name: 'John Doe 9', age: 9 },
      { name: 'John Doe 10', age: 10 },
      { name: 'John Doe 11', age: 11 },
      { name: 'John Doe 12', age: 12 },
      { name: 'John Doe 13', age: 13 },
      { name: 'John Doe 14', age: 14 },
      { name: 'John Doe 15', age: 15 },
      { name: 'John Doe 16', age: 16 },
      { name: 'John Doe 17', age: 17 },
      { name: 'John Doe 18', age: 18 },
      { name: 'John Doe 19', age: 19 },
      { name: 'John Doe 20', age: 20 },
      { name: 'John Doe 21', age: 21 },
      { name: 'John Doe 22', age: 22 },
    ];

    const start = skip;
    const end = limit + skip;
    this.$model.results = results.slice(start, end);
    this.$model.itemsTotal = 22;
  }


}
