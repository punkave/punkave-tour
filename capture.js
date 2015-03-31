// this is phantomjs, not node!

var urls = [
  'http://interface-studio.com',
  'http://press.visitphilly.com',
  'http://askemap.org',
  'http://gilkerlin.com',
  'http://ldi.upenn.edu/',
  'http://gtms.org',
  'http://connectthecircuit.org',
  'http://www.rap-arcc.org/',
  'http://kimberton.org',
  'http://pogil.org',
  'http://ccaha.org',
  'http://philly360.visitphilly.com',
  'http://aapss.org',
  'http://cgi.unc.edu',
  'http://civilwarmuseumphila.org',
  'http://pasbdc.org',
  // SSL problem
  // 'https://autismmatch.org/',
  'http://www.apostrophenow.com/',
  'http://cs.uarts.edu',
  'http://chibe.upenn.edu',
  'http://greatphillyschools.org',
  'http://tps.uarts.edu',
  'http://worldclassgreaterphila.org',
  'http://planphilly.com/',
  'http://thefoodtrust.org',
  'http://ihousephilly.org',
  'http://drwc.org/',
  'http://cuspproject.org/',
  'http://moore.edu',
  'http://greenestreetfriends.org/',
  'http://www.themichaelsorg.com',
  'http://papayalive.org',
  'http://efworld.org',
  'http://grayareaphilly.org',
  'http://phillyfunguide.com',
  'http://ccdparks.org',
  'http://weathervanemusic.org',
  // ssl problems
  // 'http://seventy.org',
  'http://junto.org',
  'http://bettertomorrows.org',
  // ssl problems
  // 'https://pikprofessors.upenn.edu',
  // scrolling problems
  // 'http://charliewasasinner.com',
  'http://pie-charts.pie-network.org',
  // scrolling problems
  // 'http://www.lgarch.com',
  'http://ortnercenter.org',
  'http://netgainchallenge.org',
  'http://ece.greatphillyschools.org/',
  'http://fandm.edu',
  'http://www.pahumanities.org/',
  'http://www.digsau.com/',
  'http://goodcompanygroup.org',
  'http://new-guide.punkave.com/',
  'http://punkave.com'
];

var page = require('webpage').create();
page.viewportSize = {
  // width: 1920,
  // height: 1080
  // more like what we design for
  width: 1400,
  height: 1400 * 9 / 16
};

// async for loop
var i = 0;
next();

function next() {
  console.log(i + ': ' + urls[i]);
  page.open(urls[i], function() {
    // Allow 3 seconds for stuff beyond the
    // regular load event to happen
    setTimeout(render, 3 * 1000);
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

