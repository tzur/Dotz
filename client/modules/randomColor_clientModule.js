
//TBD...

let randomColor = () => {
  let colorsArray = ['darkGreenDot', 'greenDot', 'purpleDot', 'blueDot', 'redDot', 'orangeDot'];
  let i = Math.floor(Math.random() * 6);
  return colorsArray[i];
};


Modules.client.randomColor = randomColor;
