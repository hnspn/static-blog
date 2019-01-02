import ("p5").catch(() => {console.log('only necessary if you are using npm without react-p5-wrapper')});
import ("p5/lib/addons/p5.dom").catch(() => {console.log('only add this if you are using npm')});

/* eslint no-param-reassign: 0 */  // 
/* eslint no-console: 0 */  //
/* eslint no-plusplus: 0 */  //

export default function s(sk) {
  const STATES = Object.freeze({'waiting_for_input': 0, 'running': 1});

  const width = 600;
  const height = 400;

  const radius = 10;

  let state = STATES.waiting_for_input;

  let nbBallsInput;
  let startButton;

  let nbBalls;

  sk.setup = () => {
    sk.createCanvas(width, height);
    nbBallsInput = sk.createInput();
    startButton = sk.createButton('start');
    startButton.mousePressed(() => {
      nbBalls = parseInt(nbBallsInput.value(), 10);
      state = STATES.running;
    })
    sk.frameRate(1);
  }

  sk.draw = () => {
    sk.background(0);
    switch (state) {
      case STATES.waiting_for_input:
        
        sk.frameRate(60);
        break;
      case STATES.running:
        step();
        break;
      default:
        console.error('Unexpected state')
        break
    }
  }

  const step = () => {
    const xStep = width / nbBalls;
    const yStep = height / nbBalls;
    for (let index = 0; index < nbBalls; index++) {
      sk.ellipse(index * xStep, index * yStep,radius, radius);
    }
  }
}

