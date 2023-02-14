if (-1 || 0) alert( 'first' ); //runs because for || it needs first truly value
if (-1 && 0) alert( 'second' );// do not work cause  for && it needs first falsy value
if (null || -1 && 1) alert( 'third' );//yes work but first && then ||
