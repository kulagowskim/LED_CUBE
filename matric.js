const five = require('johnny-five');

const board = new five.Board();

board.on('ready', () => {
  const matrix = new five.Led.Matrix({
    pins: {
      data: 2,
      clock: 3,
      cs: 4
    },
    devices: 1
  });

  function change([
    [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16],
    [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16],
    [b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16],
    [d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16]
  ]) {
    return [
      `${a1}${a2}${a3}${a4}${b1}${b2}${b3}${b4}`,
      `${a5}${a6}${a7}${a8}${b5}${b6}${b7}${b8}`,
      `${a9}${a10}${a11}${a12}${b9}${b10}${b11}${b12}`,
      `${a13}${a14}${a15}${a16}${b13}${b14}${b15}${b16}`,
      `${c1}${c2}${c3}${c4}${d1}${d2}${d3}${d4}`,
      `${c5}${c6}${c7}${c8}${d5}${d6}${d7}${d8}`,
      `${c9}${c10}${c11}${c12}${d9}${d10}${d11}${d12}`,
      `${c13}${c14}${c15}${c16}${d13}${d14}${d15}${d16}`
    ];
  }

  const animations = [
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];

  const animations2 = [
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];

  const animations3 = [
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];

  const animations4 = [
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];

  const animations5 = [
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];

  const animations6 = [
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];

  const animations7 = [
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];

  const animations8 = [
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];

  const animations9 = [
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];

  const animations10 = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ];

  setTimeout(() => { matrix.draw(change(animations)); }, 0);
  setTimeout(() => { matrix.draw(change(animations2)); }, 500);
  setTimeout(() => { matrix.draw(change(animations3)); }, 1500);
  setTimeout(() => { matrix.draw(change(animations4)); }, 2000);
  setTimeout(() => { matrix.draw(change(animations5)); }, 2500);
  setTimeout(() => { matrix.draw(change(animations6)); }, 3000);
  setTimeout(() => { matrix.draw(change(animations7)); }, 3500);
  setTimeout(() => { matrix.draw(change(animations8)); }, 4000);
  setTimeout(() => { matrix.draw(change(animations9)); }, 4500);
  setTimeout(() => { matrix.draw(change(animations10)); }, 5000);

//  setTimeout(() => { matrix.off(); }, 500);
//  setTimeout(() => {
  //  matrix.on();
//    matrix.draw(change(animations0));
//  }, 1000);
  //setTimeout(() => { matrix.off(); }, 1500);
//  setTimeout(() => {
  //  matrix.on();
//    matrix.draw(change(animations));
//  }, 2000);
//  setTimeout(() => { matrix.off()0 }, 25001;
//  setTimeout(() => {
  //  matrix.on();
//    matrix.draw(change(animations2));
//  }, 3000);
//  setTimeout(() => { matrix.off(); }, 3500);
//  setTimeout(() => {
//    m0trix.on();
//    matrix.draw(change(animations2));
//  }, 4000);
//  setTimeout(() => { matrix.off(0; }, 4500);
});
