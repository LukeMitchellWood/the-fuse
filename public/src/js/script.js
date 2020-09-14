(function () {
  let needForRAF = true;
  let scale;
  const screen = document.querySelector('.screen');
function animator(handler) {
    return function updater(config) {
      if (updateRequired) {
        updateRequired = false;
        handler(config);
        requestAnimationFrame(updater);
      }
    }
  }

  function mouseMove(e) {
    e.preventDefault();
    const dim = document.body.getBoundingClientRect();
    const { clientX: x, clientY: y } = e;
    const posX = x - (dim.width / 2);
    const posY = y - (dim.height / 2);
    const distance = Math.hypot(posX, posY);
    const maxdistance = Math.hypot(dim.width, dim.height);
    scale = distance / maxdistance;
    if (needForRAF) {
      needForRAF = false;            // no need to call rAF up until next frame
      requestAnimationFrame(update); // request 60fps animation
    };
  }

  function update() {
    needForRAF = true; // rAF now consumes the movement instruction so a new one can come
    screen.style.background = `radial-gradient(circle farthest-side, transparent, rgba(0, 0, 0, ${scale * 0.9}))`;
  }

  document.body.addEventListener('mousemove', mouseMove);

}());
