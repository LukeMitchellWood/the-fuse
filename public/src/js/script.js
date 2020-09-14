(function() {

    const canvas = document.querySelector('.images__canvas--grey');
    const ctx = canvas.getContext('2d');
    const setCanvasSize = ({width, height}) => {
      canvas.width = width;
      canvas.height = height;
    }
    const getWindowSize = () => {
      const {innerWidth: width, innerHeight: height} = window
      return {width, height};
    }
    setCanvasSize(getWindowSize())

    window.onresize = () => {
        setCanvasSize(getWindowSize());
    }

    class Square {
      constructor({x = 0, y = 0}, h, color = {h: 340, s: 82, l: 52, a: 15}) {
        this.h = h;
        this.x = x;
        this.y = y;
        this.color = color;
      }
      buildColorString(color) {
        const {h, s, l, a} = color;
        return `hsla(${h}deg, ${s}%, ${l}%, ${a / 1000})`;
      }
      setPosition({x, y}) {
        this.x = x;
        this.y = y;
      }
      getPosition() {
        return {x: this.x, y: this.y};
      }
      setColor(color) {
        this.color = color;
        return this;
      }
      incrementAlpha() {
        this.color.a = (this.color.a + 1) % 1000
        return this;
      }
      decrementAlpha() {
        this.color.a = (this.color.a - 1) % 1000
        return this;
      }
      rotateColor(value) {
        this.color.h += value
        return this;
      }
      getColor() {
        return this.color;
      }
      draw() {
        ctx.fillStyle = this.buildColorString(this.color);
        ctx.fillRect(this.x - this.h, this.y - this.h, this.h, this.h);
        return this;
      }
    }

    const clear = (frame) => () => {
      const {width, height} = getWindowSize()
      ctx.clearRect(0, 0, width, height);
    }

    const getSquares = () => {
      const squares = [];
      let i, j;
      const {width, height} = getWindowSize()
      const total = Math.sqrt(961) * 2;
      const rows = (height / 40) | 0;
      const cols = (width / 40) | 0;
      const hypot = Math.hypot(width, height) / 30;
      for (i = 0; i <= cols; i += 1) {
        for (j = 0; j <= rows; j += 1) {
          squares.push(new Square({
            x: i * hypot,
            y: j * hypot
          },
          hypot, {
            // hsl(200deg, 18%, 26%)
            h: 200,
            s: 50,
            l: 80,
            a: (32 + Math.random() * 32) | 0
          }).rotateColor(Math.sqrt(1 * i ** 2 + 1 * j ** 2 + 1 * Math.random() ** 2)));
        }
      }
      return squares;
    };

    const squares = getSquares();

    const modulate = (squares) => (frame) => () => {
      clear()()
      squares.forEach((square, i) => {
        Math.random() < 0.5 ? square.incrementAlpha() : square.decrementAlpha();
        square.draw();
      });
    }

    const animator = function () {
      let id;
      let frame = 0
      function play(fns = []) {
        frame += 1;
        fns.forEach((fn, index) => fn(frame)());
        id = requestAnimationFrame(() => {
          play(fns);
        });
      }
      function stop() {
        cancelAnimationFrame(id);
      }
      return {
        play,
        stop
      }
    };

    const animate = animator();
    animate.play([modulate(squares)]);

    window.onresize = () => {
        const animate = animator();
        animate.play([modulate(getSquares())]);
        setCanvasSize(getWindowSize());
    }


})();

(function() {

    const canvas = document.querySelector('.images__canvas--pink');
    const ctx = canvas.getContext('2d');
    const setCanvasSize = ({width, height}) => {
      canvas.width = width;
      canvas.height = height;
    }
    const getWindowSize = () => {
      const {innerWidth: width, innerHeight: height} = window
      return {width, height};
    }
    setCanvasSize(getWindowSize())

    window.onresize = () => {
        setCanvasSize(getWindowSize());
    }

    class Square {
      constructor({x = 0, y = 0}, h, color = {h: 340, s: 82, l: 52, a: 15}) {
        this.h = h;
        this.x = x;
        this.y = y;
        this.color = color;
      }
      buildColorString(color) {
        const {h, s, l, a} = color;
        return `hsla(${h}deg, ${s}%, ${l}%, ${a / 255})`;
      }
      setPosition({x, y}) {
        this.x = x;
        this.y = y;
      }
      getPosition() {
        return {x: this.x, y: this.y};
      }
      setColor(color) {
        this.color = color;
        return this;
      }
      incrementAlpha() {
        this.color.a = (this.color.a + 1) % 256
        return this;
      }
      decrementAlpha() {
        this.color.a = (this.color.a - 1) % 256
        return this;
      }
      rotateColor(value) {
        this.color.h += value
        return this;
      }
      getColor() {
        return this.color;
      }
      draw() {
        ctx.fillStyle = this.buildColorString(this.color);
        ctx.fillRect(this.x - this.h, this.y - this.h, this.h, this.h);
        return this;
      }
    }

    const clear = (frame) => () => {
      const {width, height} = getWindowSize()
      ctx.clearRect(0, 0, width, height);
    }

    const getSquares = () => {
      const squares = [];
      let i, j;
      const {width, height} = getWindowSize()
      const total = Math.sqrt(961) * 2;
      const rows = (height / 40) | 0;
      const cols = (width / 40) | 0;
      const hypot = Math.hypot(width, height) / 30;
      for (i = 0; i <= cols; i += 1) {
        for (j = 0; j <= rows; j += 1) {
          squares.push(new Square({
            x: i * hypot,
            y: j * hypot
          },
          hypot, {
            // hsl(207deg 90% 54%);
            h: 207,
            s: 90,
            l: 54,
            a: (32 + Math.random() * 32) | 0
          }).rotateColor(Math.sqrt(1 * i ** 2 + 1 * j ** 2 + 1 * Math.random() ** 2)));
        }
      }
      return squares;
    };

    const squares = getSquares();

    const modulate = (squares) => (frame) => () => {
      clear()()
      squares.forEach((square, i) => {
        Math.random() < 0.5 ? square.incrementAlpha() : square.decrementAlpha();
        square.draw();
      });
    }

    const animator = function () {
      let id;
      let frame = 0
      function play(fns = []) {
        frame += 1;
        fns.forEach((fn, index) => fn(frame)());
        id = requestAnimationFrame(() => {
          play(fns);
        });
      }
      function stop() {
        cancelAnimationFrame(id);
      }
      return {
        play,
        stop
      }
    };

    const animate = animator();
    animate.play([modulate(squares)]);

    window.onresize = () => {
        const animate = animator();
        animate.play([modulate(getSquares())]);
        setCanvasSize(getWindowSize());
    }


})();

(function() {

    const canvas = document.querySelector('.images__canvas--blue');
    const ctx = canvas.getContext('2d');
    const setCanvasSize = ({width, height}) => {
      canvas.width = width;
      canvas.height = height;
    }
    const getWindowSize = () => {
      const {innerWidth: width, innerHeight: height} = window
      return {width, height};
    }
    setCanvasSize(getWindowSize())

    window.onresize = () => {
        setCanvasSize(getWindowSize());
    }

    class Square {
      constructor({x = 0, y = 0}, h, color = {h: 340, s: 82, l: 52, a: 15}) {
        this.h = h;
        this.x = x;
        this.y = y;
        this.color = color;
      }
      buildColorString(color) {
        const {h, s, l, a} = color;
        return `hsla(${h}deg, ${s}%, ${l}%, ${a / 255})`;
      }
      setPosition({x, y}) {
        this.x = x;
        this.y = y;
      }
      getPosition() {
        return {x: this.x, y: this.y};
      }
      setColor(color) {
        this.color = color;
        return this;
      }
      incrementAlpha() {
        this.color.a = (this.color.a + 1) % 256
        return this;
      }
      decrementAlpha() {
        this.color.a = (this.color.a - 1) % 256
        return this;
      }
      rotateColor(value) {
        this.color.h += value
        return this;
      }
      getColor() {
        return this.color;
      }
      draw() {
        ctx.fillStyle = this.buildColorString(this.color);
        ctx.fillRect(this.x - this.h, this.y - this.h, this.h, this.h);
        return this;
      }
    }

    const clear = (frame) => () => {
      const {width, height} = getWindowSize()
      ctx.clearRect(0, 0, width, height);
    }

    const getSquares = () => {
      const squares = [];
      let i, j;
      const {width, height} = getWindowSize()
      const total = Math.sqrt(961) * 2;
      const rows = (height / 40) | 0;
      const cols = (width / 40) | 0;
      const hypot = Math.hypot(width, height) / 30;
      for (i = 0; i <= cols; i += 1) {
        for (j = 0; j <= rows; j += 1) {
          squares.push(new Square({
            x: i * hypot,
            y: j * hypot
          },
          hypot, {
            h: 340,
            s: 82,
            l: 52,
            a: (32 + Math.random() * 32) | 0
          }).rotateColor(Math.sqrt(33 * i ** 2 + 33 * j ** 2 + 33 * Math.random() ** 2)));
        }
      }
      return squares;
    };

    const squares = getSquares();

    const modulate = (squares) => (frame) => () => {
      clear()()
      squares.forEach((square, i) => {
        Math.random() < 0.5 ? square.incrementAlpha() : square.decrementAlpha();
        square.draw();
      });
    }

    const animator = function () {
      let id;
      let frame = 0
      function play(fns = []) {
        frame += 1;
        fns.forEach((fn, index) => fn(frame)());
        id = requestAnimationFrame(() => {
          play(fns);
        });
      }
      function stop() {
        cancelAnimationFrame(id);
      }
      return {
        play,
        stop
      }
    };

    const animate = animator();
    animate.play([modulate(squares)]);

    window.onresize = () => {
        const animate = animator();
        animate.play([modulate(getSquares())]);
        setCanvasSize(getWindowSize());
    }


})();

(function() {

    const canvas = document.querySelector('.images__canvas--orange');
    const ctx = canvas.getContext('2d');
    const setCanvasSize = ({width, height}) => {
      canvas.width = width;
      canvas.height = height;
    }
    const getWindowSize = () => {
      const {innerWidth: width, innerHeight: height} = window
      return {width, height};
    }
    setCanvasSize(getWindowSize())

    window.onresize = () => {
        setCanvasSize(getWindowSize());
    }

    class Square {
      constructor({x = 0, y = 0}, h, color = {h: 340, s: 82, l: 52, a: 15}) {
        this.h = h;
        this.x = x;
        this.y = y;
        this.color = color;
      }
      buildColorString(color) {
        const {h, s, l, a} = color;
        return `hsla(${h}deg, ${s}%, ${l}%, ${a / 255})`;
      }
      setPosition({x, y}) {
        this.x = x;
        this.y = y;
      }
      getPosition() {
        return {x: this.x, y: this.y};
      }
      setColor(color) {
        this.color = color;
        return this;
      }
      incrementAlpha() {
        this.color.a = (this.color.a + 1) % 256
        return this;
      }
      decrementAlpha() {
        this.color.a = (this.color.a - 1) % 256
        return this;
      }
      rotateColor(value) {
        this.color.h += value
        return this;
      }
      getColor() {
        return this.color;
      }
      draw() {
        ctx.fillStyle = this.buildColorString(this.color);
        ctx.fillRect(this.x - this.h, this.y - this.h, this.h, this.h);
        return this;
      }
    }

    const clear = (frame) => () => {
      const {width, height} = getWindowSize()
      ctx.clearRect(0, 0, width, height);
    }

    const getSquares = () => {
      const squares = [];
      let i, j;
      const {width, height} = getWindowSize()
      const total = Math.sqrt(961) * 2;
      const rows = (height / 40) | 0;
      const cols = (width / 40) | 0;
      const hypot = Math.hypot(width, height) / 30;
      for (i = 0; i <= cols; i += 1) {
        for (j = 0; j <= rows; j += 1) {
          squares.push(new Square({
            x: i * hypot,
            y: j * hypot
          },
          hypot, {
            // hsl(36deg 100% 50%);
            h: 36,
            s: 100,
            l: 50,
            a: (32 + Math.random() * 32) | 0
          }).rotateColor(Math.sqrt(33 * i ** 2 + 33 * j ** 2 + 33 * Math.random() ** 2)));
        }
      }
      return squares;
    };

    const squares = getSquares();

    const modulate = (squares) => (frame) => () => {
      clear()()
      squares.forEach((square, i) => {
        Math.random() < 0.5 ? square.incrementAlpha() : square.decrementAlpha();
        square.draw();
      });
    }

    const animator = function () {
      let id;
      let frame = 0
      function play(fns = []) {
        frame += 1;
        fns.forEach((fn, index) => fn(frame)());
        id = requestAnimationFrame(() => {
          play(fns);
        });
      }
      function stop() {
        cancelAnimationFrame(id);
      }
      return {
        play,
        stop
      }
    };

    const animate = animator();
    animate.play([modulate(squares)]);

    window.onresize = () => {
        const animate = animator();
        animate.play([modulate(getSquares())]);
        setCanvasSize(getWindowSize());
    }


})();

(function() {

    const canvas = document.querySelector('.images__canvas--red');
    const ctx = canvas.getContext('2d');
    const setCanvasSize = ({width, height}) => {
      canvas.width = width;
      canvas.height = height;
    }
    const getWindowSize = () => {
      const {innerWidth: width, innerHeight: height} = window
      return {width, height};
    }
    setCanvasSize(getWindowSize())

    window.onresize = () => {
        setCanvasSize(getWindowSize());
    }

    class Square {
      constructor({x = 0, y = 0}, h, color = {h: 340, s: 82, l: 52, a: 15}) {
        this.h = h;
        this.x = x;
        this.y = y;
        this.color = color;
      }
      buildColorString(color) {
        const {h, s, l, a} = color;
        return `hsla(${h}deg, ${s}%, ${l}%, ${a / 255})`;
      }
      setPosition({x, y}) {
        this.x = x;
        this.y = y;
      }
      getPosition() {
        return {x: this.x, y: this.y};
      }
      setColor(color) {
        this.color = color;
        return this;
      }
      incrementAlpha() {
        this.color.a = (this.color.a + 1) % 256
        return this;
      }
      decrementAlpha() {
        this.color.a = (this.color.a - 1) % 256
        return this;
      }
      rotateColor(value) {
        this.color.h += value
        return this;
      }
      getColor() {
        return this.color;
      }
      draw() {
        ctx.fillStyle = this.buildColorString(this.color);
        ctx.fillRect(this.x - this.h, this.y - this.h, this.h, this.h);
        return this;
      }
    }

    const clear = (frame) => () => {
      const {width, height} = getWindowSize()
      ctx.clearRect(0, 0, width, height);
    }

    const getSquares = () => {
      const squares = [];
      let i, j;
      const {width, height} = getWindowSize()
      const total = Math.sqrt(961) * 2;
      const rows = (height / 40) | 0;
      const cols = (width / 40) | 0;
      const hypot = Math.hypot(width, height) / 30;
      for (i = 0; i <= cols; i += 1) {
        for (j = 0; j <= rows; j += 1) {
          squares.push(new Square({
            x: i * hypot,
            y: j * hypot
          },
          hypot, {
            // hsl(4deg 90% 58%);
            h: 4,
            s: 90,
            l: 58,
            a: (32 + Math.random() * 32) | 0
          }).rotateColor(Math.sqrt(33 * i ** 2 + 33 * j ** 2 + 33 * Math.random() ** 2)));
        }
      }
      return squares;
    };

    const squares = getSquares();

    const modulate = (squares) => (frame) => () => {
      clear()()
      squares.forEach((square, i) => {
        Math.random() < 0.5 ? square.incrementAlpha() : square.decrementAlpha();
        square.draw();
      });
    }

    const animator = function () {
      let id;
      let frame = 0
      function play(fns = []) {
        frame += 1;
        fns.forEach((fn, index) => fn(frame)());
        id = requestAnimationFrame(() => {
          play(fns);
        });
      }
      function stop() {
        cancelAnimationFrame(id);
      }
      return {
        play,
        stop
      }
    };

    const animate = animator();
    animate.play([modulate(squares)]);

    window.onresize = () => {
        const animate = animator();
        animate.play([modulate(getSquares())]);
        setCanvasSize(getWindowSize());
    }


})();

const TitleHandler = (function () {
  const title = document.querySelector('.title');
  const subtitle = document.querySelector('.title--sub');
  const hands_left = document.querySelector('.images__item--hands-left');
  const hands_right = document.querySelector('.images__item--hands-right');

  let title_initialSpacing = 6;
  let subtitle_initialTop = 65;
  title.style.letterSpacing = `${title_initialSpacing}vmin`;
  subtitle.style.top = `${subtitle_initialTop}%`;
  return function (e) {
      const {scrollTop: top, scrollHeight: height} = e.target.scrollingElement;
      const ratio = top / height;
      title.style.letterSpacing = `${title_initialSpacing - 3 * title_initialSpacing * (top / height)}vmin`;
      subtitle.style.top = `${subtitle_initialTop - 0.775 * subtitle_initialTop * (top / height)}%`;
      hands_left.style.transform = `translate(${-((0.004 * top) ** 2)}%, -50%)`
      hands_right.style.transform = `translate(${(0.004 * top) ** 2}%, -50%)`
  }
}());

const SectionHandler = (function () {
  const sections = [];
  const nav = document.querySelector('.nav');
  [...document.querySelectorAll('.images')].slice(1).forEach((section, index) => {
    const items = section.querySelectorAll('.images__info, .images__item, .decoration, .images__copy');
    const [image, info, copy, decoration] = items
    sections.push({info, image, decoration, copy});
  });
  return function (e) {
    const { innerWidth: width, innerHeight: height} = window;
    const { scrollTop: top, scrollHeight: sheight } = e.target.scrollingElement;
    const sectionScroll = top % height / height;
    sections[0].info.style.transform = `translate(${0.00002 * (top - height) ** 2}%, 0)`
    sections[0].decoration.style.transform = `translate(${0.00004 * (top - height) ** 2}%, 0)`
    sections[0].image.style.transform = `translate(${-0.000005 * (top - height) ** 2}%, 0)`
    sections[0].copy.style.opacity = `${100 - 0.0003 *(top - height) ** 2}%`
    sections[1].info.style.transform = `translate(0, ${0.0002 * (top - 2 * height) ** 2}%)`
    sections[1].decoration.style.transform = `translate(${0.0002 * (top - 2 * height) ** 2}%, 0)`
    sections[1].image.style.transform = `translate(${0.000005 * (top - 2 * height) ** 2}%, 0)`
    sections[1].copy.style.opacity = `${100 - 0.0003 *(top - 2 * height) ** 2}%`

    sections[2].info.style.transform = `translate(0, ${0.0002 * (top - 3 * height) ** 2}%)`
    sections[2].decoration.style.transform = `translate(0, ${-0.0004 * (top - 3 * height) ** 2}%)`
    sections[2].image.style.transform = `translate(${10 + -0.000005 * (top - 3 * height) ** 2}%, 0)`
    sections[2].copy.style.opacity = `${100 - 0.0003 *(top - 3 * height) ** 2}%`

    if (top >= (height - 200)) {
      nav.classList.toggle('nav--is-visible', true);
    } else {
      nav.classList.toggle('nav--is-visible', false);
    }
  }
}());

document.addEventListener('scroll', (e) => {
  TitleHandler(e);
  SectionHandler(e)
});

(function () {

  window.requestAnimFrame = function()
  	{
  		return (
  			window.requestAnimationFrame       ||
  			window.webkitRequestAnimationFrame ||
  			window.mozRequestAnimationFrame    ||
  			window.oRequestAnimationFrame      ||
  			window.msRequestAnimationFrame     ||
  			function(/* function */ callback){
  				window.setTimeout(callback, 1000 / 60);
  			}
  		);
  }();

  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');

  //get DPI
  let dpi = window.devicePixelRatio || 1;
  context.scale(dpi, dpi);
  console.log(dpi);

  function fix_dpi() {
  //get CSS height
  //the + prefix casts it to an integer
  //the slice method gets rid of "px"
  let style_height = +getComputedStyle(canvas).getPropertyValue("height").slice(0, -2);
  let style_width = +getComputedStyle(canvas).getPropertyValue("width").slice(0, -2);

  //scale the canvas
  canvas.setAttribute('height', style_height * dpi);
  canvas.setAttribute('width', style_width * dpi);
  }

  	var particle_count = 10,
  		particles = [],
  		colors   = ["#ffffff22", "#ffffff44", "#ffffff66","#ffffff88"];
      function Particle()
      {

          this.radius = Math.round((Math.random()*3)+5);
          this.x = Math.floor(((.5 * Math.random() + .25) * ((+getComputedStyle(canvas).getPropertyValue("width").slice(0, -2) * dpi) - this.radius + 1) + this.radius));
          this.y = Math.floor(((.5 * Math.random() + .25) * ((+getComputedStyle(canvas).getPropertyValue("height").slice(0, -2) * dpi) - this.radius + 1) + this.radius));
          this.color = colors[Math.floor(Math.random()*colors.length)];
          this.speedx = Math.round((Math.random()*901)+0)/100;
          this.speedy = Math.round((Math.random()*901)+0)/100;

          switch (Math.round(Math.random()*colors.length))
          {
              case 1:
              this.speedx *= 1;
              this.speedy *= 1;
              break;
              case 2:
              this.speedx *= -1;
              this.speedy *= 1;
              break;
              case 3:
              this.speedx *= 1;
              this.speedy *= -1;
              break;
              case 4:
              this.speedx *= -1;
              this.speedy *= -1;
              break;
          }

          this.move = function()
          {

              context.beginPath();
              context.globalCompositeOperation = 'source-over';
              context.fillStyle   = this.color;
              context.globalAlpha = 1;
              context.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
              context.fill();
              context.closePath();

              this.x = this.x + this.speedx;
              this.y = this.y + this.speedy;

              if(this.x <= 0+this.radius)
              {
                  this.speedx *= -1;
              }
              if(this.x >= canvas.width-this.radius)
              {
                  this.speedx *= -1;
              }
              if(this.y <= 0+this.radius)
              {
                  this.speedy *= -1;
              }
              if(this.y >= canvas.height-this.radius)
              {
                  this.speedy *= -1;
              }

              for (var j = 0; j < particle_count; j++)
              {
                  var particleCurrent = particles[j],
                      yd = particleCurrent.y - this.y,
                      xd = particleCurrent.x - this.x,
                      d  = Math.sqrt(xd * xd + yd * yd);

                  if ( d < 1000 )
                  {
                      context.beginPath();
                      context.globalAlpha = (1000 - d) / (1000 - 0);
                      context.globalCompositeOperation = 'destination-over';
                      context.lineWidth = 1;
                      context.moveTo(this.x, this.y);
                      context.lineTo(particleCurrent.x, particleCurrent.y);
                      context.strokeStyle = this.color;
                      context.lineCap = "round";
                      context.stroke();
                      context.closePath();
                  }
              }
          };
      };
      for (var i = 0; i < particle_count; i++)
      {
          fix_dpi();
          var particle = new Particle();
          particles.push(particle);
      }


      function animate()
      {
          fix_dpi();
          context.clearRect(0, 0, canvas.width, canvas.height);
          for (var i = 0; i < particle_count; i++)
          {
              particles[i].move();
          }
          requestAnimFrame(animate);
      }




      animate();


}())
