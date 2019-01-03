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

  const waitingToRunningTransition = () => {
    nbBalls = parseInt(nbBallsInput.value(), 10);
    state = STATES.running;
    sk.frameRate(60);
  }

  const step = () => {
    const xStep = width / nbBalls;
    const yStep = height / nbBalls;
    for (let index = 0; index < nbBalls; index++) {
      sk.ellipse(index * xStep, index * yStep,radius, radius);
    }
  }

  sk.setup = () => {
    sk.createCanvas(width, height);
    nbBallsInput = sk.createInput();
    startButton = sk.createButton('start');
    startButton.mousePressed(waitingToRunningTransition);
    sk.frameRate(1);
  }

  sk.draw = () => {
    sk.background(0);
    switch (state) {
      case STATES.waiting_for_input:
        break;
      case STATES.running:
        step();
        break;
      default:
        console.error('Unexpected state')
        break
    }
  }

}
