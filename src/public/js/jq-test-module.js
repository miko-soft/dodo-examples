import 'https://code.jquery.com/jquery-3.6.0.min.js';
const $ = window.$;
console.log('jQuery loaded::', $);


$(document).ready(function () {
  const msg = 'Custom text from /public/js/jq-test-module.js';
  console.log(msg);
  $('#msgplace').text(msg);
});
