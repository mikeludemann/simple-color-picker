function setColor() {

  console.log(input.value);
  console.log(hexToRGB(input.value));

}

function rgbToHex(red, green, blue) {

  var rgb = blue | (green << 8) | (red << 16);

  return '#' + (0x1000000 + rgb).toString(16).slice(1);

}

function hexToRGB(hex) {

  r = hex.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);

  if (r) {

    return r.slice(1,4).map(function(x) { 

      return parseInt(x, 16); 

    });

  }

  r = hex.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i);

  if (r) {

    return r.slice(1,4).map(function(x) { 

      return 0x11 * parseInt(x, 16); 

    });

  }

  return null;

}