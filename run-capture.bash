#!/bin/bash

rm pngs/*

# webkit based, if your site sucks in safari go fix it!

# actually that means no thumbnails of video which is prominent
# in too many good designs.

#phantomjs --ignore-ssl-errors=true capture.js

# firefox based, a little unreliable, very picky about ssl
casperjs --ssl-protocol=any --engine=slimerjs capture.js

node crop.js
