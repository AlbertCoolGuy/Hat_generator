function setRandomColors() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const randomColor2 = Math.floor(Math.random() * 16777215).toString(16);
  console.log(randomColor);
  document.getElementById('hat').setAttribute('material', `${'color: ' + '#'}${randomColor}`);
  document.getElementById('rim').setAttribute('material', `${'color: ' + '#'}${randomColor2}; side: double`);
}

AFRAME.registerComponent('button', {
  init() {
    const btn = document.getElementById('myButton');
    btn.addEventListener('click', () => {
      setRandomColors();
    });
  },
});

setRandomColors();
