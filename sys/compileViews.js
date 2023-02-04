import path from 'path';
import chokidar from 'chokidar';
import fs from 'fs';
const fsp = fs.promises;



class CompileViews {

  constructor(viewsPath) {
    this.viewsDir = path.resolve(process.cwd(), viewsPath); // absolute path
  }


  async init() {
    const doesExist = await this.dirExists();
    if (!doesExist) { return console.log(`Views folder "${this.viewsDir}" doesn't exist.`); }

    const views_imported = await import('../src/views.js').catch(console.log);
    this.views = { ...views_imported }; // cole the object to prevent error: Cannot add property inc/layout.html, object is not extensible
    if (!this.views) {
      this.views = {};
      await this.makeViewFile(this.views); // on error create views.js with empty object
    }

    this.dirWatch();
  }



  /**
   * Check if viewsDir exists
   * https://nodejs.org/api/fs.html#fspromisesaccesspath-mode
   * https://nodejs.org/api/fs.html#fs_fs_constants
   */
  async dirExists() {
    let doesExist;
    try {
      const result = await fsp.access(this.viewsDir, fs.constants.F_OK);
      if (result === undefined) { doesExist = true; }
    } catch (err) {
      // console.log(err);
      doesExist = false;
    }
    return doesExist;
  }


  /**
   * Watch viewsDir recursively
   */
  dirWatch() {
    const watcher = chokidar.watch(this.viewsDir, {
      ignored: /(^|[\/\\])\../, // ignore dotfiles
      persistent: false
    });

    watcher
      .on('add', this.onAdd.bind(this))
      .on('change', this.onChange.bind(this))
      .on('unlink', this.onUnlink.bind(this));
  }


  async onAdd(filePath) {
    const filePath2 = this.shortenPath(filePath);
    console.log(`   + ${filePath2}`);

    let html = await this.getHTML(filePath);
    html = this.minifyHTML(html);
    html = this.correctHTML(html);

    this.views[filePath2] = html;
    await this.makeViewFile(this.views);
  }


  async onChange(filePath) {
    const filePath2 = this.shortenPath(filePath);
    console.log(`  -+ ${filePath2}`);

    let html = await this.getHTML(filePath);
    html = this.minifyHTML(html);
    html = this.correctHTML(html);

    this.views[filePath2] = html;
    await this.makeViewFile(this.views);
  }


  async onUnlink(filePath) {
    const filePath2 = this.shortenPath(filePath);
    console.log(`   - ${filePath2}`);

    this.views[filePath2] = undefined;
    await this.makeViewFile(this.views);
  }


  /**
   * Shorten absolute file path
   * /web/node/dodo-skel/src/views/pages/playground/view-rginc/main.html -> pages/playground/view-rginc/main.html
   * @param {string} filePath - file absolute path
   * @returns {string}
   */
  shortenPath(filePath) {
    return filePath.replace(/.*\/views\//, '');
  }


  /**
   * Read HTML content from the file.
   * @param {string} filePath - file absolute path
   * @returns {string} - HTML
   */
  async getHTML(filePath) {
    const html = await fsp.readFile(filePath, { encoding: 'utf8' });
    return html;
  }


  /**
   * Remove empty spaces, new lines, tabs and HTML comments.
   * @param {string} html - HTML code
   * @return {string} - minified HTML
   */
  minifyHTML(html) {
    html = html.replace(/\t+/g, ' ');
    html = html.replace(/\s+/g, ' ');
    html = html.replace(/\n+/g, '');
    html = html.replace(/\r+/g, '');
    html = html.replace(/> </g, '><');
    html = html.replace(/(<!--.*?-->)|(<!--[\S\s]+?-->)|(<!--[\S\s]*?$)/g, ''); // remove comments
    html = html.trim();
    return html;
  }


  /**
   * Correct HTML to be valid JSON string.
   * @param {string} html - HTML code
   * @return {string} - corrected HTML
   */
  correctHTML(html) {
    return html;
  }


  /**
   * Create/update view.js file.
   * @param {object} views - {'./main.html': '<b>something</b>', ...}
   */
  async makeViewFile(views) {
    const fileDest = path.resolve(process.cwd(), 'src/views.js');
    const fileContent = `/*** Generated with $ node compileViews.js  ***  DON'T EDIT MANUALLY !!! ***/\n\nexport default ${JSON.stringify(views, null, 2)};`;
    await fsp.writeFile(fileDest, fileContent, { encoding: 'utf8' });
  }


}




const compileViews = new CompileViews('src/views');
compileViews.init();

