(function () {
  function animator(handler) {
    function (config) {
      return function updater() {
        handler(config);
        requestAnimationFrame(updater);
      }
    }
  }

  function draw(e) {
    const screen = document.querySelector('.screen');
    const dim = document.body.getBoundingClientRect();
    const { clientX: x, clientY: y } = e;
    const posX = x - (dim.width / 2);
    const posY = y - (dim.height / 2);
    const distance = Math.hypot(posX, posY);
    const maxdistance = Math.hypot(dim.width, dim.height);
    const scale = distance / maxdistance;
    screen.style.background = `radial-gradient(circle farthest-side, transparent, rgba(0, 0, 0, ${scale * 0.9}))`;
  }

  const animateDraw = animator(draw);

  document.body.addEventListener('mousemove', (e) => animateDraw(e));
}());
