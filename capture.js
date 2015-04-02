// this is phantomjs, not node!

phantom.injectJs('./urls.js');
urls = Object.keys(urls);

var page = require('webpage').create();
page.viewportSize = {
  // width: 1920,
  // height: 1080
  // more like what we design for
  width: 1400,
  height: 1400 * 9 / 16
};

// don't wait all day for APIs
page.settings.resourceTimeout = 3000;

// async for loop
var i = 0;
next();

function next() {
  console.log(i + ': ' + urls[i]);
  page.open(urls[i], function() {
    // Allow time for stuff beyond the
    // regular load event to happen
    setTimeout(render, 10 * 1000);
  });
  function render() {
    page.render('pngs/' + i + '.png');
    i++;
    if (i < urls.length) {
      return next();
    }
    phantom.exit();
  }
}

