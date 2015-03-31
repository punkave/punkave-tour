require('shelljs/global');

ls('pngs/*.png').forEach(function(file) {
  console.log(file);
  var result = exec("pngtopnm < " + file + " | pamcut -height=2000 > /tmp/big.pnm");
  if (result.code == 0) {
    console.log('CROPPING ' + file);
    exec("pnmtopng < /tmp/big.pnm > " + file);
  } else {
    console.log('I will not crop ' + file);
  }
});

