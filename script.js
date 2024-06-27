function setRandomColors() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const randomColor2 = Math.floor(Math.random() * 16777215).toString(16);
  document.getElementById('hat').setAttribute('material', `${'color: ' + '#'}${randomColor}`);
  document.getElementById('rim').setAttribute('material', `${'color: ' + '#'}${randomColor2}; side: double`);
}

function partyMode() {
  setInterval(
    setRandomColors,
    500
  );
}

AFRAME.registerComponent('button', {
  init() {
    const btn = document.getElementById('myButton');
    btn.addEventListener('click', () => {
      setRandomColors();
    });
  },
});

AFRAME.registerComponent('button2', {
  init() {
    const btn = document.getElementById('buttonParty');
    btn.addEventListener('click', () => {
      partyMode();
    });
  },
});

setRandomColors();
